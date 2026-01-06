// src/utils/pdf.js

import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { drawDebugGrid } from "../templates/checkerBoxCreator";

function drawWhiteRect(page, { x, y, width, height }) {
  page.drawRectangle({
    x,
    y,
    width,
    height,
    color: rgb(1, 1, 1),
  });
}

export async function generatePdf({
  templatePdf,
  mapping,
  fields,
  // Dictionary of { key: base64ImageString }
  // e.g. { departure: "...", return: "...", departure_2: "..." }
  barcodes, 
  // Legacy support fallback (optional, can remove if we update call sites)
  departureBarcodeImage,
  returnBarcodeImage,
  debug = false,
  pdfName,
}) {
  const pdfBytes = await fetch(templatePdf).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(pdfBytes);
  pdfDoc.setTitle(pdfName);

  const pages = pdfDoc.getPages();
  const regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Draw text fields
  Object.entries(fields).forEach(([key, value]) => {
    const pos = mapping.fields[key];
    if (!pos || !value) return;

    // Default to page 0 if not specified
    const pageIdx = pos.pageIndex || 0; 
    const targetPage = pages[pageIdx];
    
    if (!targetPage) {
        console.warn(`Page index ${pageIdx} not found for field ${key}`);
        return;
    }

    // 1. Mask old content
    drawWhiteRect(targetPage, {
      x: pos.x - 2,
      y: pos.y - 2,
      width: pos.width + 2,
      height: pos.height + 2,
      color:pos.backGround || rgb(1, 1, 1),
    });

    // 2. Draw new text
    targetPage.drawText(String(value), {
      x: pos.x,
      y: pos.y,
      size: pos.fontSize,
      font: pos.font === "regular" ? regularFont : boldFont,
      color: pos.color || rgb(0, 0, 0),
    });
  });

  // Prepare barcode map
  const finalBarcodes = { ...barcodes };
  if (departureBarcodeImage && !finalBarcodes.departure) finalBarcodes.departure = departureBarcodeImage;
  if (returnBarcodeImage && !finalBarcodes.return) finalBarcodes.return = returnBarcodeImage;

  // Draw barcodes
  if (mapping.barcodes) {
    for (const [key, imageData] of Object.entries(finalBarcodes)) {
        const coords = mapping.barcodes[key];
        if (!coords || !imageData) continue;

        const pageIdx = coords.pageIndex || 0;
        const targetPage = pages[pageIdx];

        if (!targetPage) {
            console.warn(`Page index ${pageIdx} not found for barcode ${key}`);
            continue;
        }

        drawWhiteRect(targetPage, {
            x: coords.x,
            y: coords.y,
            width: coords.width,
            height: coords.height,
        });

        const pngImage = await pdfDoc.embedPng(imageData);
        targetPage.drawImage(pngImage, coords); // pdf-lib drawImage ignores unknown props in coords usually, or we should verify
    }
  }
  
  // Debug: Draw grid
  if (debug) {
      pages.forEach(p => drawDebugGrid(p));
  }

  return await pdfDoc.save();
}

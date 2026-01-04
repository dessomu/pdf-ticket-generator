// src/utils/pdf.js

import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

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
  departureBarcodeImage,
  returnBarcodeImage,
}) {
  const pdfBytes = await fetch(templatePdf).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(pdfBytes);

  const page = pdfDoc.getPages()[0];
  const regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Draw text fields
  Object.entries(fields).forEach(([key, value]) => {
    const pos = mapping.fields[key];
    if (!pos || !value) return;

    // 1. Mask old content
    drawWhiteRect(page, {
      x: pos.x - 2,
      y: pos.y - 2,
      width: pos.width + 2,
      height: pos.height + 2,
    });

    // 2. Draw new text
    page.drawText(String(value), {
      x: pos.x,
      y: pos.y,
      size: pos.fontSize,
      font: pos.font === "regular" ? regularFont : boldFont,
    });
  });

  // Draw barcode

  // Departure barcode
  drawWhiteRect(page, {
    x: mapping.barcodes.departure.x,
    y: mapping.barcodes.departure.y,
    width: mapping.barcodes.departure.width,
    height: mapping.barcodes.departure.height,
  });

  const depPng = await pdfDoc.embedPng(departureBarcodeImage);
  page.drawImage(depPng, mapping.barcodes.departure);

  // Return barcode
  drawWhiteRect(page, {
    x: mapping.barcodes.return.x,
    y: mapping.barcodes.return.y,
    width: mapping.barcodes.return.width,
    height: mapping.barcodes.return.height,
  });
  const retPng = await pdfDoc.embedPng(returnBarcodeImage);
  page.drawImage(retPng, mapping.barcodes.return);

  return await pdfDoc.save();
}

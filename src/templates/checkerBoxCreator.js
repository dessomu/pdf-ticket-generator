import { PDFDocument, rgb } from "pdf-lib";

export function drawDebugGrid(page) {
  const { width, height } = page.getSize();

  for (let x = 0; x < width; x += 50) {
    page.drawLine({
      start: { x, y: 0 },
      end: { x, y: height },
      thickness: 0.3,
      color: rgb(0.9, 0.9, 0.9),
    });
    page.drawText(`${x}`, { x: x + 2, y: 2, size: 6 });
  }

  for (let y = 0; y < height; y += 50) {
    page.drawLine({
      start: { x: 0, y },
      end: { x: width, y },
      thickness: 0.3,
      color: rgb(0.9, 0.9, 0.9),
    });
    page.drawText(`${y}`, { x: 2, y: y + 2, size: 6 });
  }
}

export async function generateCheckeredPdf(pdf) {
  const pdfBytes = await fetch(pdf).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(pdfBytes);

  const page = pdfDoc.getPages()[0];
  drawDebugGrid(page);

  return await pdfDoc.save();
}

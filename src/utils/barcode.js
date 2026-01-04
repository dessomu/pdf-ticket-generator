// src/utils/barcode.js

import bwipjs from "bwip-js";

export function generatePDF417(text) {
  const canvas = document.createElement("canvas");

  bwipjs.toCanvas(canvas, {
    bcid: "pdf417",
    text,
    scale: 2,
    height: 10,
    includetext: false,
  });

  return canvas.toDataURL("image/png");
}

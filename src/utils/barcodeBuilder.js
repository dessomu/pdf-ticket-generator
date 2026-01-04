// src/utils/barcodeBuilder.js

export function buildBarcodeText({
  surname,
  name,
  pnr,
  source,
  destination,
  flightNo,
  suffix,
}) {
  if (!surname || !name) {
    throw new Error("Surname and Name are required for barcode generation");
  }

  const base = `M1${surname}/${name} ${pnr} ${source}${destination}${flightNo}`;

  return suffix?.trim() ? `${base} ${suffix.trim()}` : base;
}

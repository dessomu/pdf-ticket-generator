// src/utils/barcodeBuilder.js

export function buildBarcodeText({
  surname,
  name,
  pnr,
  source,
  destination,
  flightNo,
  suffix,
  format = "standard", // "standard" or "cleartrip"
  journeyDate, // For cleartrip format: DDMMMYY (e.g., 15JAN26)
}) {
  if (!surname || !name) {
    throw new Error("Surname and Name are required for barcode generation");
  }

  if (format === "cleartrip") {
    // Cleartrip format: M1SURENAME/NAME PNRFLIGHTNO DESTINATIONJOURNEYDATE
    // Example: M1DOE/JOHN ABC123FD121 DMK15JAN26
    return `M1${surname}/${name} ${pnr}${flightNo}${source}${destination}${journeyDate}`;
  }

  // Standard format with optional suffix
  const base = `M1${surname}/${name} ${pnr} ${source}${destination}${flightNo}`;
  return suffix?.trim() ? `${base} ${suffix.trim()}` : base;
}


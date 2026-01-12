const config = {
  id: "cleartrip_double",
  label: "Cleartrip (Double)",
  maxPassengers: 2,

  // Default values for form fields
  defaults: {
    departureFlightNo: "FD 121",
    returnFlightNo: "FD 120",
    barcodeExtra: "", // No barcode extra for Cleartrip
  },

  barcode: {
    type: "PDF417",
    perPassenger: true,
    enabled: true,
    format: "cleartrip", // Custom format identifier
    legs: {
      departure: {
        destination: "DMK",
        requiresExtra: false, // Cleartrip doesn't need extra string
      },
      return: {
        destination: "CCU", 
        requiresExtra: false,
      },
    },
  },
};

export default config;

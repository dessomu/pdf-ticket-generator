// src/templates/th_indigo_single/config.js

const config = {
  id: "indigo_th_single",
  label: "Thailand Indigo (Single)",
  maxPassengers: 1,

  // Default values for form fields
  defaults: {
    departureFlightNo: "6E1054 ( A320 )",
    returnFlightNo: "6E1057 ( A320 )",
    barcodeExtra: "0000311Y000Y00000 009BXTOBCP5DBTQ",
  },

  barcode: {
    type: "PDF417",
    perPassenger: true,
    enabled: true, // Option B enabled
    legs: {
      departure: {
        destination: "BKK", // <-- hardcoded
        requiresExtra: true,
      },
      return: {
        destination: "CCU", // <-- hardcoded
        requiresExtra: true,
      },
    },
  },
};

export default config;

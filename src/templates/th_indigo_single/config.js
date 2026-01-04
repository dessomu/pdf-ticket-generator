// src/templates/th_indigo_single/config.js

const config = {
  id: "indigo_th_single",
  label: "Thailand Indigo (Single)",
  maxPassengers: 1,

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

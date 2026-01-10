const config = {
  id: "mmt_malaysia_single",
  label: "MMT Malaysia (Single)",
  maxPassengers: 1,

  // Default values for form fields
  defaults: {
    departureFlightNo: "MH-185",
    returnFlightNo: "MH-184",
    barcodeExtra: "350Y000000000000",
  },

  barcode: {
    type: "PDF417",
    perPassenger: true,
    enabled: true, 
    legs: {
      departure: {
        destination: "KUL",
        requiresExtra: true,
      },
      return: {
        destination: "CCU", 
        requiresExtra: true,
      },
    },
  },
};

export default config;

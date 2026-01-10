const config = {
  id: "mmt_malaysia_triple",
  label: "MMT Malaysia (Triple)",
  maxPassengers: 3,

  // Default values for form fields
  defaults: {
   departureFlightNo: "MH-0185",
    returnFlightNo: "MH-0184",
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

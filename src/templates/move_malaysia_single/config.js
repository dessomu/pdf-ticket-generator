const config = {
  id: "move_malaysia_single",
  label: "Move Malaysia (Single)",
  maxPassengers: 1,

  // Default values for form fields
  defaults: {
    departureFlightNo: "AK 62",
    returnFlightNo: "AK 65",
    barcodeExtra: "0000201Y1E>318100",
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

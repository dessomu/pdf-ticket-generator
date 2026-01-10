const config = {
  id: "move_thailand_double",
  label: "Move Thailand (Double)",
  maxPassengers: 2,

  // Default values for form fields
  defaults: {
    departureFlightNo: "FD 121",
    returnFlightNo: "FD 120",
    barcodeExtra: "315Y1E>319100",
  },

  barcode: {
    type: "PDF417",
    perPassenger: true,
    enabled: true, 
    legs: {
      departure: {
        destination: "DMK",
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

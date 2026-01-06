const config = {
  id: "mmt_malaysia_double",
  label: "MMT Malaysia (Double)",
  maxPassengers: 2,

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

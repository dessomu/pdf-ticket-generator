const config = {
  id: "indigo_indo_single",
  label: "Indigo Indo (Single)",
  maxPassengers: 1,

  // Default values for form fields (These might populate the inputs, representing the primary/international leg)
  defaults: {
    departureFlightNo: "6E 1605", // Defaulting to the international leg for display
    returnFlightNo: "6E 1606",
    barcodeExtra: "000056Y000Y00000009AbCdEfGhljTT8",
  },

  barcode: {
    type: "PDF417",
    perPassenger: true,
    enabled: true,
    multiLeg: true, // Flag to trigger multi-leg barcode generation
    legs: {
      departure: [
        { 
            source: "GAU", 
            destination: "BLR", 
            flightNo: "6E316",
            useFormDate: true // Both legs happen on "Departure Date" usually? Or +1 day? Assuming same day for now or based on user input date.
        },
        { 
            source: "BLR", 
            destination: "DPS", 
            flightNo: "6E1605", // This matches the form default
            useFormDate: true 
        }
      ],
      return: [
        { 
            source: "DPS", 
            destination: "BLR", 
            flightNo: "6E1606", 
            useFormDate: true 
        },
        { 
            source: "BLR", 
            destination: "GAU", 
            flightNo: "6E6541", 
            useFormDate: true 
        } 
      ]
    },
  },
};

export default config;

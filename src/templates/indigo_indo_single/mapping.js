// src/templates/indigo_indo_single/mapping.js

const mapping = {
  fields: {
    pnr: {
      x: 47,
      y:740,
      font: "bold",
      fontSize: 6.7,
      width: 29,
      height: 8,
    },
    passengerName: {
      x: 50,
      y: 685,
      fontSize: 8,
      font: "bold",
      width: 200,
      height: 12,
    },
    passengerType: {
      x: 251,
      y: 685,
      fontSize: 6.5,
      font: "regular",
      width: 20,
      height: 10,
    },

    departureBoardingDate: {
      x: 68,
      y: 479,
      fontSize: 9.8,
      font: "bold",
      width: 120,
      height: 9,
    },
    departureLandingDate: {
      x: 348,
      y: 474,
      fontSize: 10,
      font: "bold",
      width: 120,
      height: 9.8,
    },
    departureSecondBoardingDate: {
      x: 68,
      y: 308,
      fontSize: 9.8,
      font: "bold",
      width: 120,
      height: 9,
    },
    departureSecondLandingDate: {
      x: 348,
      y: 308,
      fontSize: 10,
      font: "bold",
      width: 120,
      height: 9.8,
    },

    returnBoardingDate: {
      x: 67,
      y: 649,
      fontSize: 9.8,
      font: "bold",
      pageIndex: 1,
      width: 120,
      height: 12,
    },
    returnLandingDate: {
      x: 342,
      y: 649,
      fontSize: 9.8,
      font: "bold",
      pageIndex: 1,
      width: 120,
      height: 12,
    },
    returnSecondBoardingDate: {
      x: 67,
      y: 482.5,
      fontSize: 9.8,
      font: "bold",
      pageIndex: 1,
      width: 120,
      height: 9.5,
    },
    returnSecondLandingDate: {
      x: 348.71,
      y: 482,
      fontSize: 9.8,
      font: "bold",
      pageIndex: 1,
      width: 120,
      height: 9.5,
    },
    departureDate: {
      x: 184,
      y: 586.5,
      fontSize: 6.5,
      font: "bold",
      width: 38,
      height: 8,
    },
    departureSecondDate: {
      x: 137.7,
      y: 421.1,
      fontSize: 6.5,
      font: "bold",
      width: 37,
      height: 8,
    },
    returnDate: {
      x: 180,
      y: 761.2,
      fontSize: 6.5,
      font: "bold",
      pageIndex: 1,
      width: 37,
      height: 8,
    },
    
    returnSecondDate: {
      x: 138,
      y: 595.3,
      fontSize: 6.5,
      font: "bold",
      pageIndex: 1,
      width: 37,
      height: 8,
    },
  },
  barcodes: {
    departure: { x: 68, y: 541,pageIndex: 0, width: 102, height: 30 },
    departureSec: { x: 68, y: 377.6,pageIndex: 0, width: 103, height: 30 }, // Guessed position next to departure
    
    return: { x:70, y: 718.5,pageIndex: 1, width: 103, height: 30 },
    returnSec: { x: 70, y: 552.5,pageIndex: 1, width: 103, height: 30 }, // Guessed position next to return
  },
};

export default mapping;

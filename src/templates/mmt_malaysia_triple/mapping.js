const mapping = {
  fields: {
    // bookingTimeString: { x: 113.2, y: 708.6, fontSize: 8, font: "regular", width: 150, height: 7 },
    bookingDate: { x: 113.2, y: 708.6, fontSize: 10, font: "regular", width: 100, height: 10 },
    bookingId: { x: 32.0, y: 650, font: "regular", fontSize: 10, width: 36, height: 10 }, // PLACHOLDER Y
    eTicketNumber: { x: 32.0, y: 630, font: "regular", fontSize: 10, width: 36, height: 10 }, // PLACEHOLDER Y
    pnr: { x: 32.0, y: 669, font: "regular", fontSize: 10, width: 36, height: 10 },
    
    // Pax 1
    passengerName: { x: 39, y: 607.3, fontSize: 12, font: "bold", width: 130, height: 12 },
    
    // Pax 2
    passengerName_2: { x: 39, y: 592.3, fontSize: 12, font: "bold", width: 130, height: 12 },

    // Pax 3
    passengerName_3: { x: 39, y: 577.3, fontSize: 12, font: "bold", width: 130, height: 12 },

    // E-Tickets (derived offset -15 per row)
    eTicketNumber_2: { x: 32.0, y: 615, font: "regular", fontSize: 10, width: 36, height: 10 },
    eTicketNumber_3: { x: 32.0, y: 600, font: "regular", fontSize: 10, width: 36, height: 10 },


    departureBoardingDate: { x: 43.56, y: 360, fontSize: 9.8, font: "bold", width: 120, height: 9 },
    departureLandingDate: { x: 461, y: 360, fontSize: 10, font: "bold", width: 120, height: 9.8 },

    returnBoardingDate: { x: 43.56, y: 203.09, fontSize: 9.8, font: "bold", width: 120, height: 9.5 },
    returnLandingDate: { x: 347.71, y: 203.09, fontSize: 9.8, font: "bold", width: 120, height: 9.5 },
    
    departureFlightNo: { x: 160, y: 485, fontSize: 7.5, font: "regular", width: 72, height: 8 },
    departureDate: { x: 235, y: 485, fontSize: 7.5, font: "regular", width: 50, height: 8 },
    
    returnFlightNo: { x: 144, y: 316, fontSize: 7.5, font: "regular", width: 69, height: 8 },
    returnDate: { x: 226, y: 316, fontSize: 7.5, font: "regular", width: 50, height: 8 },
  },
  barcodes: {
    departure: { x: 45.5, y: 433.5, width: 105, height: 35 },
    return: { x: 46.0, y: 264.0, width: 105, height: 35 },
     // Pax 2 placeholders
    departure_2: { x: 45.5, y: 433.5 - 40, width: 105, height: 35 }, 
    return_2: { x: 46.0, y: 264.0 - 40, width: 105, height: 35 },
     // Pax 3 placeholders
    departure_3: { x: 45.5, y: 433.5 - 80, width: 105, height: 35 }, 
    return_3: { x: 46.0, y: 264.0 - 80, width: 105, height: 35 },
  },
};

export default mapping;

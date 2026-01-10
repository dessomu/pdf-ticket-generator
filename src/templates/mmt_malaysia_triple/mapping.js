import { COLORS } from "../../utils/pdfColors";

const mapping = {
  fields: {
    // --- FROM MMT SINGLE MAPPING (BASE) ---
    bookingInfoString: { x: 295.4, y: 733, font: "regular", fontSize: 8.5,color:COLORS.semiDarkerGrey, width: 257, height: 9.5},

    // Page 1 (BP 1) fields
    departureTicketNumber: { x: 433, y: 582,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular",color:COLORS.semiDarkGrey, fontSize: 10, width: 85, height: 10 }, 
    returnTicketNumber: { x: 433.5, y:210,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular",color:COLORS.semiDarkGrey, fontSize: 10, width: 85, height: 10 }, 

    departureTravellerName: { x: 50, y: 582,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular", fontSize: 9.5, width: 200, height: 12 }, 
    departureTravellerType: { x: 250, y: 582,backGround:COLORS.backGroundGrey,pageIndex:1, color:COLORS.grey, font: "regular", fontSize: 9.5, width: 20, height: 12 },

    returnTravellerName: { x: 50, y:210,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular", fontSize: 9.5, width: 230, height: 10 }, 
    returnTravellerType: { x: 250, y:210,backGround:COLORS.backGroundGrey,pageIndex:1, color:COLORS.grey, font: "regular", fontSize: 9.5, width: 20, height: 10 }, 

    departurePnr: { x: 107, y: 722,pageIndex:1, font: "regular", fontSize: 11,color:COLORS.darkGrey, width: 47, height: 12 },
    returnPnr: { x: 107, y: 346,pageIndex:1, font: "regular", fontSize: 11,color:COLORS.darkGrey, width: 47, height: 12 },

    // Page 0 (Summary) - Pax 1
    departurePassengerName: { x: 50, y: 636, fontSize: 10, font: "regular",color:COLORS.darkGrey, width: 280, height: 13 },
    returnPassengerName: { x: 50, y: 375, fontSize: 10, font: "regular",color:COLORS.darkGrey, width: 280, height: 13 },

    // BP 1 Dates
    departureBoardingDate: { x: 211.5, y: 740,pageIndex:1, fontSize: 9, font: "regular",color:COLORS.semiDarkerGrey, width: 55, height: 9.8 },
    departureLandingDate: { x: 490, y: 740,pageIndex:1, fontSize: 9, font: "regular",color:COLORS.semiDarkerGrey, width: 55, height: 9.8 },

    returnBoardingDate: { x: 211.5, y: 368,pageIndex:1, fontSize: 9, font: "regular",color:COLORS.semiDarkerGrey, width: 55, height: 9.5 },
    returnLandingDate: { x: 490, y: 368,pageIndex:1, fontSize: 9, font: "regular",color:COLORS.semiDarkerGrey, width: 55, height: 9.5 },
    
    // Page 0 Flight Details
    departureDate: { x: 58, y: 137.3, fontSize: 9, font: "regular",color:COLORS.semiDarkerGrey, width: 80, height: 9 },
    returnDate: { x: 58, y: 458,pageIndex:1, fontSize: 9, font: "regular",color:COLORS.semiDarkerGrey, width: 72, height: 9 },
  
    // --- PASSENGER 2 ---
    departurePassengerName_2: { x: 50, y: 575, fontSize: 10, font: "regular",color:COLORS.semiDarkerGrey, width: 280, height: 13 },
    returnPassengerName_2: { x: 50, y: 316.7, fontSize: 10, font: "regular",color:COLORS.semiDarkerGrey, width: 280, height: 13 },
    
    departureTicketNumber_2: { x: 433, y: 560,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular",color:COLORS.semiDarkGrey, fontSize: 10, width: 85, height: 10 }, 
    returnTicketNumber_2: { x: 433.5, y:186,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular",color:COLORS.semiDarkGrey, fontSize: 10, width: 85, height: 10 }, 

    departureTravellerName_2: { x: 50, y: 560,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular", fontSize: 10, width: 200, height: 12 }, 
    departureTravellerType_2: { x: 250, y: 560,backGround:COLORS.backGroundGrey,pageIndex:1, color:COLORS.grey, font: "regular", fontSize: 10, width: 20, height: 12 },

    returnTravellerName_2: { x: 50, y:186,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular", fontSize: 10, width: 230, height: 10 }, 
    returnTravellerType_2: { x: 250, y:186,backGround:COLORS.backGroundGrey,pageIndex:1, color:COLORS.grey, font: "regular", fontSize: 10, width: 20, height: 10 }, 

    // --- PASSENGER 3 ---
    // Summary (Page 0) - Offset approx -87 from Pax 2
    departurePassengerName_3: { x: 50, y: 500, fontSize: 10, font: "regular",color:COLORS.semiDarkerGrey, width: 280, height: 13 },
    returnPassengerName_3: { x: 50, y: 244, fontSize: 10, font: "regular",color:COLORS.semiDarkerGrey, width: 280, height: 13 },
    
    // BP (Page 1) - Offset approx -30 from Pax 2
    departureTicketNumber_3: { x: 433, y: 535.3,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular",color:COLORS.semiDarkGrey, fontSize: 10, width: 85, height: 10 }, 
    returnTicketNumber_3: { x: 433.7, y:160,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular",color:COLORS.semiDarkGrey, fontSize: 10, width: 85, height: 10 }, 

    departureTravellerName_3: { x: 50, y: 535.3,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular", fontSize: 10, width: 200, height: 12 }, 
    departureTravellerType_3: { x: 250, y: 535.3,backGround:COLORS.backGroundGrey,pageIndex:1, color:COLORS.grey, font: "regular", fontSize: 10, width: 20, height: 12 },

    returnTravellerName_3: { x: 50, y:160,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular", fontSize: 10, width: 230, height: 10 }, 
    returnTravellerType_3: { x: 250, y:160,backGround:COLORS.backGroundGrey,pageIndex:1, color:COLORS.grey, font: "regular", fontSize: 10, width: 20, height: 10 }, 
    
  },
  barcodes: {
    // Pax 1
    departure: { x: 425.5, y: 629, width: 98, height: 22 }, 
    return: { x: 427, y: 368, width: 97.5, height: 22 },

    // Pax 2
    departure_2: { x: 426.7, y: 567.2, width: 98, height: 23},
    return_2: { x: 426.8, y: 302.5, width: 97.5, height: 23},

    // Pax 3 - Offset approx -87 from Pax 2
    departure_3: { x: 427, y: 511.3, width: 98, height: 22},
    return_3: { x: 422.6, y: 241.4, width: 102.5, height: 23.3},
  },
};

export default mapping;

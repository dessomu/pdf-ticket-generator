import { COLORS } from "../../utils/pdfColors";

const mapping = {
  fields: {
    // --- FROM MMT SINGLE MAPPING (BASE) ---
    bookingInfoString: { x: 308, y: 723, font: "regular", fontSize: 8.5,color:COLORS.semiDarkerGrey, width: 250, height: 9.5},
    bookingType:{x:326,y:735, textAlignRight:true, font: "regular", fontSize: 8.5,color:COLORS.semiDarkerGrey, width: 235, height: 9.5}, 

    // Page 1 (BP 1) fields
    departureTicketNumber: { x: 433, y: 597.3,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular",color:COLORS.semiDarkGrey, fontSize: 10, width: 68, height: 10 }, 
    returnTicketNumber: { x: 433, y:227.3,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular",color:COLORS.semiDarkGrey, fontSize: 10, width: 68, height: 10 }, 

    departureTravellerName: { x: 50, y: 597.3,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular", fontSize: 9.5, width: 200, height: 12 }, 
    departureTravellerType: { x: 250, y: 597.3,backGround:COLORS.backGroundGrey,pageIndex:1, color:COLORS.grey, font: "regular", fontSize: 9.5, width: 20, height: 12 },

    returnTravellerName: { x: 50, y:226.2,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular", fontSize: 9.5, width: 230, height: 10 }, 
    returnTravellerType: { x: 250, y:228.3,backGround:COLORS.backGroundGrey,pageIndex:1, color:COLORS.grey, font: "regular", fontSize: 9.5, width: 20, height: 10 }, 

    departurePnr: { x: 105.5, y: 734,pageIndex:1, font: "regular", fontSize: 11,color:COLORS.darkGrey, width: 47, height: 12 },
    returnPnr: { x: 105.5, y: 358,pageIndex:1, font: "regular", fontSize: 11,color:COLORS.darkGrey, width: 47, height: 12 },

    // Page 0 (Summary)
    departurePassengerName: { x: 62, y: 591.5, fontSize: 12.3, font: "regular",color:COLORS.darkGrey, width: 280, height: 13 },
    returnPassengerName: { x: 62, y: 341.5, fontSize: 12.3, font: "regular",color:COLORS.darkGrey, width: 280, height: 13 },

    // BP 1 Dates
    departureBoardingDate: { x: 211.5, y: 754,pageIndex:1, fontSize: 8, font: "regular",color:COLORS.semiDarkerGrey, width: 50, height: 9.8 },
    departureLandingDate: { x: 490, y: 754,pageIndex:1, fontSize: 8, font: "regular",color:COLORS.semiDarkerGrey, width: 50, height: 9.8 },

    returnBoardingDate: { x: 211.5, y: 380,pageIndex:1, fontSize: 8, font: "regular",color:COLORS.semiDarkerGrey, width: 50, height: 9.5 },
    returnLandingDate: { x: 490, y: 380,pageIndex:1, fontSize: 8, font: "regular",color:COLORS.semiDarkerGrey, width: 50, height: 9.5 },
    
    // Page 0 Flight Details?
    departureDate: { x: 58, y: 126.1, fontSize: 8.8, font: "regular",color:COLORS.semiDarkerGrey, width: 69, height: 9 },
    returnDate: { x: 58, y: 469.8,pageIndex:1, fontSize: 8.8, font: "regular",color:COLORS.semiDarkerGrey, width: 72, height: 9 },
  
    departurePassengerName_2: { x: 62, y: 504.3, fontSize: 12.3, font: "regular",color:COLORS.semiDarkerGrey, width: 280, height: 13 },
    returnPassengerName_2: { x: 62, y: 238, fontSize: 12.3, font: "regular",color:COLORS.semiDarkerGrey, width: 280, height: 13 },
    
    departureTicketNumber_2: { x: 433, y: 567.3,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular",color:COLORS.semiDarkGrey, fontSize: 10, width: 70, height: 10 }, 
    returnTicketNumber_2: { x: 433, y:192,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular",color:COLORS.semiDarkGrey, fontSize: 10, width: 68, height: 10 }, 

    departureTravellerName_2: { x: 50, y: 567.3,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular", fontSize: 10, width: 200, height: 12 }, 
    departureTravellerType_2: { x: 250, y: 567.3,backGround:COLORS.backGroundGrey,pageIndex:1, color:COLORS.grey, font: "regular", fontSize: 10, width: 20, height: 12 },

    returnTravellerName_2: { x: 50, y:192,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular", fontSize: 10, width: 230, height: 10 }, 
    returnTravellerType_2: { x: 250, y:192,backGround:COLORS.backGroundGrey,pageIndex:1, color:COLORS.grey, font: "regular", fontSize: 10, width: 20, height: 10 }, 
    
  },
  barcodes: {
    departure: { x: 400, y: 592, width: 150, height: 29 }, 
    return: { x: 400, y: 341.4, width: 150, height: 29 },

    departure_2: { x: 400, y: 505.1, width: 150, height: 32},
    return_2: { x: 400, y: 212.5, width: 150, height: 32},
  },
};

export default mapping;

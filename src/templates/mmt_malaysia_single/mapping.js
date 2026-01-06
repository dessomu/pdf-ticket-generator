import { COLORS } from "../../utils/pdfColors";

const mapping = {
  fields: {
    bookingInfoString: { x: 308, y: 723, font: "regular", fontSize: 8.5,color:COLORS.semiDarkGrey, width: 250, height: 9.5}, 

    departureTicketNumber: { x: 433, y: 597.3,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular",color:COLORS.semiDarkGrey, fontSize: 10, width: 68, height: 10 }, 
    returnTicketNumber: { x: 433, y:225,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular",color:COLORS.semiDarkGrey, fontSize: 10, width: 68, height: 10 }, 

    departureTravellerName: { x: 50, y: 597.3,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular", fontSize: 10, width: 200, height: 12 }, 
    departureTravellerType: { x: 250, y: 597.3,backGround:COLORS.backGroundGrey,pageIndex:1, color:COLORS.grey, font: "regular", fontSize: 10, width: 20, height: 12 },

    returnTravellerName: { x: 50, y:225.2,backGround:COLORS.backGroundGrey,pageIndex:1, font: "regular", fontSize: 10, width: 230, height: 10 }, 
    returnTravellerType: { x: 250, y:225.2,backGround:COLORS.backGroundGrey,pageIndex:1, color:COLORS.grey, font: "regular", fontSize: 10, width: 20, height: 10 }, 

    departurePnr: { x: 108.5, y: 734,pageIndex:1, font: "regular", fontSize: 11,color:COLORS.darkGrey, width: 40, height: 12 },
    returnPnr: { x: 108.5, y: 358,pageIndex:1, font: "regular", fontSize: 11,color:COLORS.darkGrey, width: 40, height: 12 },

    departurePassengerName: { x: 50, y: 552, fontSize: 12.3, font: "regular",color:COLORS.darkGrey, width: 280, height: 13 },
    returnPassengerName: { x: 50, y: 288, fontSize: 12.3, font: "regular",color:COLORS.darkGrey, width: 280, height: 13 },

    departureBoardingDate: { x: 211.5, y: 754,pageIndex:1, fontSize: 8, font: "regular",color:COLORS.semiDarkerGrey, width: 50, height: 9.8 },
    departureLandingDate: { x: 490, y: 754,pageIndex:1, fontSize: 8, font: "regular",color:COLORS.semiDarkerGrey, width: 50, height: 9.8 },

    returnBoardingDate: { x: 211.5, y: 380,pageIndex:1, fontSize: 8, font: "regular",color:COLORS.semiDarkerGrey, width: 50, height: 9.5 },
    returnLandingDate: { x: 490, y: 380,pageIndex:1, fontSize: 8, font: "regular",color:COLORS.semiDarkerGrey, width: 50, height: 9.5 },
    
    departureDate: { x: 58, y: 126.1, fontSize: 8.8, font: "regular",color:COLORS.semiDarkerGrey, width: 69, height: 9 },
    returnDate: { x: 58, y: 469.8,pageIndex:1, fontSize: 8.8, font: "regular",color:COLORS.semiDarkerGrey, width: 72, height: 9 },
  },
  barcodes: {
    departure: { x: 361, y: 539, width: 150, height: 29 },
    return: { x: 361, y: 278, width: 150, height: 29 },
  },
};

export default mapping;

import { COLORS } from "../../utils/pdfColors";

// Move Malaysia Single mapping - coordinates copied from Move Thailand Single
const mapping = {
  fields: {
    // Booking Info
    bookingTimeString: { x: 482.5, y: 787.3, fontSize: 9, font: "regular", width: 100, height: 10 },
    pnr: { x: 39, y: 664, fontSize: 14, font: "regular", width: 85, height: 16 },
    
    departureBriefDate: { x: 134, y: 233.5, fontSize: 9.3, font: "regular",color:COLORS.semiDarkGrey, width: 146, height: 12 },
    returnBriefDate: { x: 321.5, y:232.7,fontSize: 9.3, font: "regular",color:COLORS.semiDarkGrey, width: 150, height: 12 },
    
    departureDate: { x: 94, y: 778.5, fontSize: 10.5,pageIndex: 1, font: "regular",color:COLORS.darkGrey, width: 180, height: 12 },
    returnDate: { x: 92.5, y:522.7, pageIndex: 1,fontSize: 10.5, font: "regular",color:COLORS.darkGrey, width: 180, height: 12 },
    
    // Journey Dates
    departureBoardingDate: { x: 50.5, y: 728, fontSize: 9, font: "regular",color:COLORS.semiDarkGrey,pageIndex:1, width: 40, height: 10 },
    departureLandingDate: { x: 50.5, y: 586, fontSize: 9, font: "regular",color:COLORS.semiDarkGrey, pageIndex:1, width: 40, height: 10 },
    returnBoardingDate: { x: 50.5, y: 472, fontSize: 9, font: "regular",color:COLORS.semiDarkGrey,pageIndex:1, width: 40, height: 10 },
    returnLandingDate: { x: 50.5, y: 330, fontSize: 9, font: "regular",color:COLORS.semiDarkGrey,pageIndex:1, width: 40, height: 10 },
    
    // Passenger Name
    passengerName: { x: 53, y: 444, fontSize: 11, font: "regular", width: 200, height: 12 },
    passengerType:{x:260,y:444,fontSize:11,font:"regular",color:COLORS.grey,width:60,height:16},

    boardingPassengerName: { x: 48, y: 214, fontSize: 10, font: "regular",pageIndex:1,color:COLORS.semiDarkGrey, width: 200, height: 12 },
    returningPassengerName: { x: 51, y: 102, fontSize: 10, font: "regular",pageIndex:1,color:COLORS.semiDarkGrey, width: 200, height: 12 },
  },
  barcodes: {
    departure: { x: 361, y: 431.5, width: 145, height: 34.7 },
  },
};

export default mapping;

import { COLORS } from "../../utils/pdfColors";

// Move Thailand Single mapping - coordinates need to be adjusted for the PDF template
const mapping = {
  fields: {
    // Booking Info
    bookingTimeString: { x: 499.5, y: 795.7, fontSize: 9, font: "regular", width: 100, height: 10 },
    pnr: { x: 40, y: 673, fontSize: 14, font: "regular", width: 60, height: 16 },
    
    departureBriefDate: { x: 141.5, y: 242, fontSize: 9, font: "regular",color:COLORS.grey, width: 140, height: 12 },
    returnBriefDate: { x: 332.5, y:241.5,fontSize: 9, font: "regular",color:COLORS.grey, width: 150, height: 12 },
    
    departureDate: { x: 91.5, y: 786, fontSize: 10.5,pageIndex: 1, font: "regular",color:COLORS.semiDarkerGrey, width: 150, height: 12 },
    returnDate: { x: 90.5, y:530.7, pageIndex: 1,fontSize: 10.5, font: "regular",color:COLORS.semiDarkerGrey, width: 150, height: 12 },
    
    // Journey Dates
    departureBoardingDate: { x: 50.5, y: 733, fontSize: 9, font: "regular",color:COLORS.semiDarkGrey,pageIndex:1, width: 40, height: 10 },
    departureLandingDate: { x: 50.5, y: 594, fontSize: 9, font: "regular",color:COLORS.semiDarkGrey, pageIndex:1, width: 40, height: 10 },
    returnBoardingDate: { x: 50.5, y: 475, fontSize: 9, font: "regular",color:COLORS.semiDarkGrey,pageIndex:1, width: 40, height: 10 },
    returnLandingDate: { x: 50.5, y: 343, fontSize: 9, font: "regular",color:COLORS.semiDarkGrey,pageIndex:1, width: 40, height: 10 },
    
    // Passenger Name
    passengerName: { x: 53, y: 451, fontSize: 11.5, font: "regular", width: 200, height: 12 },
    passengerType:{x:260,y:451,fontSize:11,font:"regular",color:COLORS.grey,width:60,height:16},

    boardingPassengerName: { x: 48, y: 220, fontSize: 10, font: "regular",color:COLORS.grey,pageIndex:1, width: 200, height: 12 },
    returningPassengerName: { x: 51, y: 112, fontSize: 10, font: "regular",color:COLORS.grey,pageIndex:1, width: 200, height: 12 },
  },
  barcodes: {
    departure: { x: 347, y: 442.5, width: 157, height: 25 },
  },
};

export default mapping;

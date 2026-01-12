import { COLORS } from "../../utils/pdfColors";

// Move Thailand Double mapping - coordinates need to be adjusted for the PDF template
const mapping = {
  fields: {
    bookingTimeString: { x: 470, y: 787.3, fontSize: 9, font: "regular", width: 100, height: 10 },
    pnr: { x: 40, y: 666, fontSize: 14, font: "regular", width: 80, height: 16 },

    passengerType:{x:270,y:444,fontSize:11,font:"regular",color:COLORS.grey,width:60,height:16},
    passengerType_2:{x:270,y:361,fontSize:11,font:"regular",color:COLORS.grey,width:60,height:16},

    departureBriefDate: { x: 134.5, y: 234, fontSize: 9.5, font: "regular",color:COLORS.grey, width: 60, height: 12 },
    returnBriefDate: { x: 251, y:234,fontSize: 9.5, font: "regular",color:COLORS.grey, width: 60, height: 12 },
    
    departureDate: { x: 96.5, y: 778.5, fontSize: 11,pageIndex: 1, font: "regular",color:COLORS.darkGrey, width: 180, height: 12 },
    returnDate: { x: 95.5, y:522, pageIndex: 1,fontSize: 11, font: "regular",color:COLORS.darkGrey, width: 180, height: 12 },
    
    departureBoardingDate: { x: 50.5, y: 727, fontSize: 9, font: "regular",color:COLORS.semiDarkGrey,pageIndex:1, width: 40, height: 10 },
    departureLandingDate: { x: 50.5, y: 587, fontSize: 9, font: "regular",color:COLORS.semiDarkGrey, pageIndex:1, width: 40, height: 10 },
    returnBoardingDate: { x: 50.5, y: 472, fontSize: 9, font: "regular",color:COLORS.semiDarkGrey,pageIndex:1, width: 40, height: 10 },
    returnLandingDate: { x: 50.5, y: 331.5, fontSize: 9, font: "regular",color:COLORS.semiDarkGrey,pageIndex:1, width: 40, height: 10 },
    
    passengerName: { x: 53, y: 444, fontSize: 11, font: "regular", width: 200, height: 12 },
    boardingPassengerName: { x: 54, y: 212, fontSize: 11, font: "regular",color:COLORS.grey, pageIndex:1, width: 200, height: 12 },
    returningPassengerName: { x: 54, y: 99, fontSize: 11, font: "regular",color:COLORS.grey,pageIndex:1, width: 200, height: 12 },
    
    passengerName_2: { x: 53, y: 361, fontSize: 11, font: "regular", width: 200, height: 12 },
    boardingPassengerName_2: { x: 296.5, y: 212, fontSize: 11, font: "regular",color:COLORS.grey,pageIndex:1, width: 200, height: 12 },
    returningPassengerName_2: { x: 296.5, y: 99, fontSize: 11, font: "regular",color:COLORS.grey,pageIndex:1, width: 200, height: 12 },
  },
  barcodes: {
    departure: { x: 413.5, y: 432.5, width: 105, height: 25 },
    departure_2: { x: 413.5, y: 350.5, width: 105, height: 25 },
  },
};

export default mapping;

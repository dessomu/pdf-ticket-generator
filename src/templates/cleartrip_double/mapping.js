import { COLORS } from "../../utils/pdfColors";
// Cleartrip Double mapping - coordinates copied from Move Thailand Double
const mapping = {
  fields: {
    tripId: { x: 133, y: 794.3, fontSize: 9.7, font: "bold", width: 100, height: 12 },
    
    departureDate: { x: 164, y: 772.5, fontSize: 7, font: "regular",color:COLORS.darkGrey, width: 70, height: 12 },
    returnDate: { x: 164, y:658,fontSize: 7, font: "regular",color:COLORS.darkGrey, width: 70, height: 12 },
    
    departureBoardingDate: { x: 210, y: 732, fontSize: 7, font: "regular",color:COLORS.darkGrey, width: 60, height: 10 },
    departureLandingDate: { x: 341, y: 732, fontSize: 7, font: "regular",color:COLORS.darkGrey, width: 60, height: 10 },
    returnBoardingDate: { x: 213, y: 625, fontSize: 7, font: "regular",color:COLORS.darkGrey, width: 60, height: 9},
    returnLandingDate: { x: 336, y: 626.5, fontSize: 7, font: "regular",color:COLORS.darkGrey, width: 65, height: 9 },
    
    passengerName: { x: 50, y: 517, fontSize: 9, font: "regular", width: 142, height: 12 },
    passengerName_2: { x: 50, y: 480, fontSize: 9, font: "regular", width: 142, height: 12 },

    airLinePnr:{ x: 332, y: 520, fontSize: 10, font: "regular", width: 60, height: 14 },
    airLinePnr_2:{ x: 332, y: 484, fontSize: 10, font: "regular", width: 60, height: 14 },

    ticketNumber:{ x: 475, y: 520, fontSize: 10, font: "regular", width: 60, height: 14 },
    ticketNumber_2:{ x: 475, y: 484, fontSize: 10, font: "regular", width: 60, height: 14 },
  },
  barcodes: {
    departure: { x: 189, y: 512, width: 84, height: 25 },
    departure_2: { x: 189, y: 474, width:84, height: 26 },
  },
};

export default mapping;

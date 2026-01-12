import { COLORS } from "../../utils/pdfColors";

// Cleartrip Single mapping - coordinates copied from Move Thailand Single
const mapping = {
  fields: {
    tripId: { x: 133, y: 794.7, fontSize: 9.7, font: "bold", width: 100, height: 12 },
    
    departureDate: { x: 164, y: 772.5, fontSize: 7, font: "regular",color:COLORS.darkGrey, width: 70, height: 12 },
    returnDate: { x: 164, y:658,fontSize: 7, font: "regular",color:COLORS.darkGrey, width: 70, height: 12 },
    
    departureBoardingDate: { x: 210, y: 732, fontSize: 7, font: "regular",color:COLORS.darkGrey, width: 60, height: 10 },
    departureLandingDate: { x: 341, y: 732, fontSize: 7, font: "regular",color:COLORS.darkGrey, width: 60, height: 10 },
    returnBoardingDate: { x: 213, y: 623, fontSize: 7, font: "regular",color:COLORS.darkGrey, width: 60, height: 8},
    returnLandingDate: { x: 336, y: 624.5, fontSize: 7, font: "regular",color:COLORS.darkGrey, width: 65, height: 8 },
    
    passengerName: { x: 50, y: 517, fontSize: 9, font: "regular", width: 142, height: 12 },

    airLinePnr:{ x: 332, y: 520, fontSize: 10, font: "regular", width: 60, height: 14 },
    ticketNumber:{ x: 475, y: 520, fontSize: 10, font: "regular", width: 60, height: 14 },
  },
  barcodes: {
    departure: { x: 151.5, y: 519.7, width: 75, height: 22.5 },
    return: { x: 152.5, y: 490, width: 74, height: 22 },
  },
};

export default mapping;

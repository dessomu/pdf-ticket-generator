import { COLORS } from "../../utils/pdfColors";
const mapping = {
  fields: {
    bookingId: { x: 486.5, y: 784.5, fontSize: 10, font: "regular",color:COLORS.lightBlue, width: 80, height: 12,underline:true },
    bookingReference: { x: 178.5, y: 697, fontSize: 10, font: "regular", width: 60, height: 12 },

    passengerName: { x: 50, y: 603, fontSize: 10.5, font: "regular", width: 145, height: 10.5 },
    ticketNumber: { x: 194.5, y: 603, fontSize: 10.5, font: "regular", width: 50, height: 10.5 },
    
    departureBoardingDate: { x: 60, y: 466, fontSize: 9, font: "regular", width: 90, height: 12 },
    departureLandingDate: { x: 60, y: 420, fontSize: 9, font: "regular", width: 90, height: 12 },

    returnBoardingDate: { x: 55.5, y: 289, fontSize: 9, font: "regular", width: 90, height: 12 },
    returnLandingDate: { x: 57, y: 249, fontSize: 9, font: "regular", width: 90, height: 12 },
  },
  barcodes: {},
};

export default mapping;

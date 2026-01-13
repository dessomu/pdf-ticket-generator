import { COLORS } from "../../utils/pdfColors";


const mapping = {
  fields: {
    bookingId: { x: 488.5, y: 792.5, fontSize: 10, font: "regular",color:COLORS.semiDarkGrey, width: 80, height: 12 },
    bookingReference: { x: 221.5, y: 705.8, fontSize: 11, font: "regular",color:COLORS.darkText, width: 65, height: 12 },

    passengerName: { x: 50, y: 610, fontSize: 8.7, font: "regular", width: 145, height: 10.5 },
    ticketNumber: { x: 190.5, y: 610, fontSize: 9, font: "regular", width: 50, height: 10.5 },

    passengerName_2: { x: 50, y: 595.5, fontSize: 8.7, font: "regular", width: 145, height: 10.5 },
    ticketNumber_2: { x: 190.5, y: 595.5, fontSize: 9, font: "regular", width: 50, height: 10.5 },
    
    departureBoardingDate: { x: 60, y: 473, fontSize: 9, font: "regular", width: 90, height: 12 },
    departureLandingDate: { x: 60, y: 420, fontSize: 9, font: "regular", width: 90, height: 12 },

    returnBoardingDate: { x: 57, y: 297, fontSize: 9, font: "regular", width: 90, height: 12 },
    returnLandingDate: { x: 57, y: 249, fontSize: 9, font: "regular", width: 90, height: 12 },
  },
  barcodes: {},
};

export default mapping;

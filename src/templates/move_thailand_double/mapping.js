import { COLORS } from "../../utils/pdfColors";

// Move Thailand Double mapping - coordinates need to be adjusted for the PDF template
const mapping = {
  fields: {
    // --- Common Fields (Page 0 & 1) ---
    // Page 0 (Summary)
    bookingTimeString: { x: 499.5, y: 795.7, fontSize: 9, font: "regular", width: 100, height: 10 },
    pnr: { x: 40, y: 673, fontSize: 14, font: "regular", width: 60, height: 16 },
    
    departureBriefDate: { x: 141.5, y: 242, fontSize: 9, font: "regular",color:COLORS.grey, width: 140, height: 12 },
    returnBriefDate: { x: 332.5, y:241.5,fontSize: 9, font: "regular",color:COLORS.grey, width: 150, height: 12 },
    
    // Page 1 (BP)
    departureDate: { x: 91.5, y: 786, fontSize: 10.5,pageIndex: 1, font: "regular",color:COLORS.semiDarkerGrey, width: 150, height: 12 },
    returnDate: { x: 90.5, y:530.7, pageIndex: 1,fontSize: 10.5, font: "regular",color:COLORS.semiDarkerGrey, width: 150, height: 12 },
    
    // Journey Dates (Page 1)
    departureBoardingDate: { x: 50.5, y: 733, fontSize: 9, font: "regular",color:COLORS.semiDarkGrey,pageIndex:1, width: 40, height: 10 },
    departureLandingDate: { x: 50.5, y: 594, fontSize: 9, font: "regular",color:COLORS.semiDarkGrey, pageIndex:1, width: 40, height: 10 },
    returnBoardingDate: { x: 50.5, y: 475, fontSize: 9, font: "regular",color:COLORS.semiDarkGrey,pageIndex:1, width: 40, height: 10 },
    returnLandingDate: { x: 50.5, y: 343, fontSize: 9, font: "regular",color:COLORS.semiDarkGrey,pageIndex:1, width: 40, height: 10 },
    
    // --- Passenger 1 ---
    // Page 0
    passengerName: { x: 53, y: 452, fontSize: 10, font: "regular", width: 200, height: 12 },
    // Page 1
    boardingPassengerName: { x: 48, y: 220, fontSize: 10, font: "regular",pageIndex:1, width: 200, height: 12 },
    returningPassengerName: { x: 51, y: 112, fontSize: 10, font: "regular",pageIndex:1, width: 200, height: 12 },
    
    // --- Passenger 2 ---
    // Page 0
    passengerName_2: { x: 0, y: 0, fontSize: 10, font: "regular", width: 200, height: 12 },
    // Page 1
    boardingPassengerName_2: { x: 0, y: 0, fontSize: 10, font: "regular",pageIndex:1, width: 200, height: 12 },
    returningPassengerName_2: { x: 0, y: 0, fontSize: 10, font: "regular",pageIndex:1, width: 200, height: 12 },
  },
  barcodes: {
    // Passenger 1
    departure: { x: 347, y: 442.5, width: 157, height: 25 },
    
    // Passenger 2
    departure_2: { x: 0, y: 0, width: 157, height: 25 },
  },
};

export default mapping;

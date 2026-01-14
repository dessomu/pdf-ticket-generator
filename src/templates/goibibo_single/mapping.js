import { COLORS } from "../../utils/pdfColors";

const mapping = {
  fields: {
    bookingId: { x: 449, y: 754, fontSize: 8, font: "regular",color: COLORS.grey, width: 94.5, height: 8 },
    bookingDateString: { x: 454.5, y: 742, fontSize: 7.5, font: "regular",color: COLORS.lightGrey, width: 90, height: 10 },
    greetingJourneyDate: { x: 157, y: 677.5, fontSize: 12, font: "regular",backGround: COLORS.greenBackground, color: COLORS.lightText, width: 80, height: 12 },
    greetingWish: { x: 141, y: 665.5, fontSize: 9, font: "regular",backGround: COLORS.greenBackground, color: COLORS.lightText, width: 360, height: 10 },
    // Departure Section - PNR & Ticket
    departurePnr: { x: 140, y: 412, fontSize: 10, font: "regular",color: COLORS.darkGrey, width: 50, height: 12 },
    departurePnr_2: { x: 140, y: 48, fontSize: 10, font: "regular",color: COLORS.darkGrey, width: 50, height: 12 },
    departureTicketNumber: { x: 427, y: 275, fontSize: 8.5, font: "regular",color: COLORS.semiDarkGrey, width: 50, height: 12 ,backGround: COLORS.goibiboBackground},
    departureTicketNumber_2: { x: 427, y: 632, fontSize: 8.5, font: "regular",color: COLORS.semiDarkGrey, width: 50, height: 12,backGround: COLORS.goibiboBackground,pageIndex:1 },

    // Return Section - PNR & Ticket
    returnPnr: { x: 140, y: 434, fontSize: 10, font: "regular",color: COLORS.darkGrey, width: 50, height: 12,pageIndex:1 },
    returnPnr_2: { x: 137, y: 92, fontSize: 10, font: "regular",color: COLORS.darkGrey, width: 50, height: 12,pageIndex:1 },
    returnTicketNumber: { x: 427, y: 299, fontSize: 8.5, font: "regular",color: COLORS.semiDarkGrey, width: 50, height: 12,pageIndex:1,backGround: COLORS.goibiboBackground },
    returnTicketNumber_2: { x: 427, y: 666, fontSize: 8.5, font: "regular",color: COLORS.semiDarkGrey, width: 50, height: 12,pageIndex:2,backGround: COLORS.goibiboBackground },

    // Departure Section - Traveller
    departureTravellerName: { x: 101.5, y: 275, fontSize: 8.5, font: "regular", width: 150, height: 9,backGround: COLORS.goibiboBackground },
    departureTravellerType: { x: 255, y: 275, fontSize: 7.5, font: "regular",color: COLORS.semiDarkGrey, width: 50, height: 9,backGround: COLORS.goibiboBackground },
    departureTravellerName_2: { x: 101.5, y: 632, fontSize: 8.5, font: "regular", width: 150, height: 9,pageIndex:1,backGround: COLORS.goibiboBackground },
    departureTravellerType_2: { x: 255, y: 632, fontSize: 7.5, font: "regular",color: COLORS.semiDarkGrey, width: 50, height: 9,pageIndex:1,backGround: COLORS.goibiboBackground },

    // Return Section - Traveller
    returnTravellerName: { x: 101.5, y: 299, fontSize: 8.5, font: "regular", width: 150, height: 9,pageIndex:1,backGround: COLORS.goibiboBackground },
    returnTravellerType: { x: 255, y: 299, fontSize: 7.5, font: "regular",color: COLORS.semiDarkGrey, width: 50, height: 9,pageIndex:1,backGround: COLORS.goibiboBackground },
    returnTravellerName_2: { x: 101.5, y: 664, fontSize: 8.5, font: "regular", width: 150, height: 9,pageIndex:2,backGround: COLORS.goibiboBackground },
    returnTravellerType_2: { x: 255, y: 664, fontSize: 7.5, font: "regular",color: COLORS.semiDarkGrey, width: 50, height: 9,pageIndex:2,backGround: COLORS.goibiboBackground },

    // Flight Info
    departureDate: { x: 83, y: 525, fontSize: 9, font: "regular", width: 73, height: 9,color: COLORS.grey },
    returnDate: { x: 83, y: 546.2, fontSize: 9, font: "regular", width: 72, height: 9,color: COLORS.grey,pageIndex:1 },

    departureBoardingDate: { x: 230, y: 434, fontSize: 8, font: "regular",color: COLORS.semiDarkerGrey, width: 50, height: 12 },
    departureLandingDate: { x: 481, y: 433, fontSize: 8, font: "regular",color: COLORS.semiDarkerGrey, width: 50, height: 12 },
    departureBoardingDate_2: { x: 230, y: 90, fontSize: 8, font: "regular",color: COLORS.semiDarkerGrey, width: 50, height: 12 },
    departureLandingDate_2: { x: 477, y: 90, fontSize: 8, font: "regular",color: COLORS.semiDarkerGrey, width: 50, height: 12 },

    returnBoardingDate: { x: 231, y: 456.5, fontSize: 8, font: "regular",color: COLORS.semiDarkerGrey, width: 50, height: 12,pageIndex:1 },
    returnLandingDate: { x: 476, y: 456.5, fontSize: 8, font: "regular",color: COLORS.semiDarkerGrey, width: 50, height: 12,pageIndex:1 },
    returnBoardingDate_2: { x: 231, y: 113, fontSize: 8, font: "regular",color: COLORS.semiDarkerGrey, width: 50, height: 12,pageIndex:1 },
    returnLandingDate_2: { x: 476, y: 113, fontSize: 8, font: "regular",color: COLORS.semiDarkerGrey, width: 50, height: 12,pageIndex:1 },
  },
  barcodes: {},
};

export default mapping;

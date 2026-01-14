import { splitName,cleanName,formatToUpperCase } from "../utils/name";
import { formatDate, formatFlightDate, formatJourneyDate,formatMMTJourneyDate,formatMMTFlightDate,formatMoveDayMonth,formatMoveFlightDate,formatMoveBookingDate,formatMoveBookingDate2,formatMoveFlightBriefDate2,formatMoveMalaysiaFlightBriefDate,formatCleartripFlightDate,formatIndigoIndonesiaDate,getNextDate } from "../utils/date";
import { formatName,formatIndigoIndonesiaPassengerName,formatIataPassengerName, } from "../utils/name";

/**
 * Maps form data to PDF fields for Indigo templates.
 */
export function mapIndigoData(form, passengers, templateId = "") {
    const firstPax = passengers[0];
    const { surname, firstName } = splitName(firstPax.passengerName); // While not strictly used in fields, useful reference

    const nextDate = getNextDate(form.departureBoardingDate);
    // Base PDF Fields
    const pdfFields = {
        bookingTimeString: `* Date of Booking ${formatDate(form.bookingDate)}, ${form.bookingTime} `,
        pnr: form.pnr,
        passengerType:"Adult",
        
        // Flight Dates
        departureBoardingDate: `23:30 hrs, ${formatJourneyDate(form.departureBoardingDate)}`,
        departureLandingDate: `03:45 hrs, ${formatJourneyDate(nextDate)}`,
        returnBoardingDate: `06:45 hrs, ${formatJourneyDate(form.returnBoardingDate)}`,
        returnLandingDate: `08:00 hrs, ${formatJourneyDate(form.returnBoardingDate)}`,
        
        departureFlightNo: `${form.departureFlightNo}`,
        departureDate: formatFlightDate(form.departureBoardingDate),
        
        returnFlightNo: `${form.returnFlightNo}`,
        returnDate: formatFlightDate(form.returnBoardingDate),
        
        // Pax 1
        passengerName: formatToUpperCase(firstPax.passengerName), 
    };

    // Add additional passengers dynamically
    passengers.forEach((pax, i) => {
        if (i === 0) return; 
        
        // Name mapping
        pdfFields[`passengerName_${i + 1}`] = formatName(pax.passengerName);
    });

    return pdfFields;
}


// Maps form data to PDF fields for MMT Malaysia templates.
export function mapMMTData(form, passengers, templateId = "") {
    
    const pdfFields = {
        // MMT specific fields (Page 1 / Header)
        bookingInfoString:`Booking ID:${form.bookingId}, (Booked on ${formatDate(form.bookingDate)})`,
        bookingType: "Flight Ticket (Round trip)",
        
        // Common flight details (same for all passengers)
        departureBoardingDate: formatMMTJourneyDate(form.departureBoardingDate),
        departureLandingDate: formatMMTJourneyDate(form.departureBoardingDate),
        returnBoardingDate: formatMMTJourneyDate(form.returnBoardingDate),
        returnLandingDate: formatMMTJourneyDate(form.returnBoardingDate),
        
        departureDate: formatMMTFlightDate(form.departureBoardingDate),
        returnDate: formatMMTFlightDate(form.returnBoardingDate),
        
        departurePnr: form.pnr, 
        returnPnr: form.pnr, 
    };
    
    // Generate passenger-specific fields
    passengers.forEach((pax, i) => {
        const idx = i + 1;
        const suffix = i === 0 ? "" : `_${idx}`; // e.g., "", "_2", "_3"
        
        const cleanedName = cleanName(pax.passengerName);
        const type = "Adult";
        
        // Boarding Pass Details
        pdfFields[`departureTravellerName${suffix}`] = pax.passengerName.toUpperCase();
        pdfFields[`departureTravellerType${suffix}`] = type;
        pdfFields[`departureTicketNumber${suffix}`] = pax.eTicketNumber;
        
        pdfFields[`returnTravellerName${suffix}`] = pax.passengerName.toUpperCase();
        pdfFields[`returnTravellerType${suffix}`] = type;
        pdfFields[`returnTicketNumber${suffix}`] = pax.eTicketNumber;
        
        pdfFields[`departurePassengerName${suffix}`] = formatName(cleanedName);
        pdfFields[`returnPassengerName${suffix}`] = formatName(cleanedName);
    });

    return pdfFields;
}

// Maps form data to PDF fields for Move Thailand/Malaysia templates.
export function mapMoveData(form, passengers, templateId = "") {
    
    const isDouble = passengers.length > 1; // Or check specific logic
    const isMalaysia = templateId.includes('move_malaysia');
    
    const pdfFields = {
        // Booking info
        bookingTimeString: isDouble || isMalaysia ? formatMoveBookingDate2(form.bookingDate) : formatMoveBookingDate(form.bookingDate),
        pnr: form.pnr,
        
        // Flight details
        departureFlightNo: form.departureFlightNo,
        returnFlightNo: form.returnFlightNo,

        departureBriefDate:isDouble ? formatMoveFlightBriefDate2(form.departureBoardingDate) : formatMoveMalaysiaFlightBriefDate(form.departureBoardingDate),
        returnBriefDate: isDouble ? formatMoveFlightBriefDate2(form.returnBoardingDate) : formatMoveMalaysiaFlightBriefDate(form.returnBoardingDate),
        
        departureDate: formatMoveFlightDate(form.departureBoardingDate),
        returnDate: formatMoveFlightDate(form.returnBoardingDate),
        
        departureBoardingDate: formatMoveDayMonth(form.departureBoardingDate),
        departureLandingDate: formatMoveDayMonth(form.departureBoardingDate),
        returnBoardingDate: formatMoveDayMonth(form.returnBoardingDate),
        returnLandingDate: formatMoveDayMonth(form.returnBoardingDate),

    };
    
    // Generate passenger-specific fields
    passengers.forEach((pax, i) => {
        const idx = i + 1;
        const suffix = i === 0 ? "" : `_${idx}`; // e.g., "", "_2"
        
        const cleanedName = cleanName(pax.passengerName);
        pdfFields[`passengerName${suffix}`] = formatName(cleanedName);
        pdfFields[`passengerType${suffix}`] =isMalaysia ? "(Adult)" : "(adult)";
        pdfFields[`boardingPassengerName${suffix}`] = formatName(cleanedName);
        pdfFields[`returningPassengerName${suffix}`] = formatName(cleanedName);
    });

    return pdfFields;
}

// Maps form data to PDF fields for Cleartrip templates.
export function mapCleartripData(form, passengers, templateId = "") {
    
    const isDouble = passengers.length > 1;
    
    const pdfFields = {
        // Booking info
        tripId: form.tripId || "",    // Cleartrip-specific field
        
        departureDate: formatCleartripFlightDate(form.departureBoardingDate),
        returnDate: formatCleartripFlightDate(form.returnBoardingDate),
        
        departureBoardingDate: formatCleartripFlightDate(form.departureBoardingDate),
        departureLandingDate: formatCleartripFlightDate(form.departureBoardingDate),
        returnBoardingDate: formatCleartripFlightDate(form.returnBoardingDate),
        returnLandingDate: formatCleartripFlightDate(form.returnBoardingDate),

    };  
    
    // Generate passenger-specific fields
    passengers.forEach((pax, i) => {
        const idx = i + 1;
        const suffix = i === 0 ? "" : `_${idx}`; // e.g., "", "_2"
        
        pdfFields[`passengerName${suffix}`] = formatName(pax.passengerName);
        pdfFields[`airLinePnr${suffix}`] = form.pnr;
        pdfFields[`ticketNumber${suffix}`] = form.pnr;
    });

    return pdfFields;
}

// Maps form data to PDF fields for Indigo Indo (Break Journey) templates.
export function mapIndigoIndoData(form, passengers, templateId = "") {
    const firstPax = passengers[0];

    const nextDate = getNextDate(form.departureBoardingDate);
    const pdfFields = {
        pnr: form.pnr,
        passengerType:"Adult",
        
        // Flight Dates
        departureBoardingDate: `16:45 hrs, ${formatIndigoIndonesiaDate(form.departureBoardingDate)}`,
        departureSecondBoardingDate: `01:10 hrs, ${formatIndigoIndonesiaDate(nextDate)}`,
        departureLandingDate: `20:10 hrs, ${formatIndigoIndonesiaDate(form.departureBoardingDate)}`,
        departureSecondLandingDate: `10:15 hrs, ${formatIndigoIndonesiaDate(nextDate)}`,

        returnBoardingDate: `11:30 hrs, ${formatIndigoIndonesiaDate(form.returnBoardingDate)}`,
        returnSecondBoardingDate: `18:15 hrs, ${formatIndigoIndonesiaDate(form.returnBoardingDate)}`,
        returnLandingDate: `15:30 hrs, ${formatIndigoIndonesiaDate(form.returnBoardingDate)}`,
        returnSecondLandingDate: `21:15 hrs, ${formatIndigoIndonesiaDate(form.returnBoardingDate)}`,
        
        departureDate: formatIndigoIndonesiaDate(form.departureBoardingDate),
        departureSecondDate: formatIndigoIndonesiaDate(nextDate),
        
        returnDate: formatIndigoIndonesiaDate(form.returnBoardingDate),
        returnSecondDate: formatIndigoIndonesiaDate(form.returnBoardingDate),
        
        // Pax 1
        passengerName: formatIndigoIndonesiaPassengerName(firstPax.passengerName), 
    };

    return pdfFields;

}

// Maps form data to PDF fields for Trip IATA templates.
export function mapTripIataData(form, passengers, templateId = "") {
    const pdfFields = {
        bookingId: form.bookingId,
        bookingReference:`${form.pnr} )`,
       
        departureBoardingDate: `00:30 ${formatFlightDate(form.departureBoardingDate)}`,
        departureLandingDate: `04:30 ${formatFlightDate(form.departureBoardingDate)}`,
        returnBoardingDate: `22:45 ${formatFlightDate(form.returnBoardingDate)}`,
        returnLandingDate: `23:55 ${formatFlightDate(form.returnBoardingDate)}`,
    };
    
    passengers.forEach((pax, i) => {
         const suffix = i === 0 ? "" : `_${i + 1}`;
         pdfFields[`passengerName${suffix}`] = formatIataPassengerName(pax.passengerName);
         pdfFields[`ticketNumber${suffix}`] = form.pnr;
    });
    return pdfFields;
}

// Maps form data to PDF fields for Goibibo templates.
export function mapGoibiboData(form, passengers, templateId = "") {
    const firstPax = passengers[0];

    const nextDate = getNextDate(form.returnBoardingDate);

    const pdfFields = {
        bookingId: form.bookingId,
        bookingDateString: `Flight booked on ${formatMoveDayMonth(form.bookingDate)}`,

        greetingJourneyDate:formatMMTJourneyDate(form.departureBoardingDate),

        departurePnr: form.pnr,
        departurePnr_2: form.pnr,
        returnPnr: form.pnr,
        returnPnr_2: form.pnr,

        departureTicketNumber: form.pnr,
        departureTicketNumber_2: form.pnr,
        returnTicketNumber: form.pnr,
        returnTicketNumber_2: form.pnr,

        departureTravellerName: formatToUpperCase(firstPax.passengerName),
        departureTravellerType: "Adult",
        departureTravellerName_2: formatToUpperCase(firstPax.passengerName),
        departureTravellerType_2: "Adult",
        returnTravellerName: formatToUpperCase(firstPax.passengerName),
        returnTravellerType: "Adult",
        returnTravellerName_2: formatToUpperCase(firstPax.passengerName),
        returnTravellerType_2: "Adult",

        departureDate: formatMMTFlightDate(form.departureBoardingDate),
        returnDate: formatMMTFlightDate(form.returnBoardingDate),

        departureBoardingDate: formatMMTJourneyDate(form.departureBoardingDate),
        departureLandingDate: formatMMTJourneyDate(form.departureBoardingDate),
        departureBoardingDate_2: formatMMTJourneyDate(form.departureBoardingDate),
        departureLandingDate_2: formatMMTJourneyDate(form.departureBoardingDate),

        returnBoardingDate: formatMMTJourneyDate(form.returnBoardingDate),
        returnLandingDate: formatMMTJourneyDate(form.returnBoardingDate),
        returnBoardingDate_2: formatMMTJourneyDate(form.returnBoardingDate),
        returnLandingDate_2: formatMMTJourneyDate(nextDate),
    };
    

    return pdfFields;
}

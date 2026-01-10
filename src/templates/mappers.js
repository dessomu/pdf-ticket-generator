import { splitName,cleanName } from "../utils/name";
import { formatDate, formatFlightDate, formatJourneyDate,formatMMTJourneyDate,formatMMTFlightDate } from "../utils/date";
import { formatName } from "../utils/name";

/**
 * Maps form data to PDF fields for Indigo templates.
 */
export function mapIndigoData(form, passengers) {
    const firstPax = passengers[0];
    const { surname, firstName } = splitName(firstPax.passengerName); // While not strictly used in fields, useful reference

    // Base PDF Fields
    const pdfFields = {
        bookingTimeString: `* Date of Booking ${formatDate(form.bookingDate)}, ${form.bookingTime} `,
        pnr: form.pnr,
        passengerType:"Adult",
        
        // Flight Dates
        departureBoardingDate: `23:30 hrs, ${formatJourneyDate(form.departureBoardingDate)}`,
        departureLandingDate: `03:45 hrs, ${formatJourneyDate(form.departureLandingDate)}`,
        returnBoardingDate: `06:45 hrs, ${formatJourneyDate(form.returnBoardingDate)}`,
        returnLandingDate: `08:00 hrs, ${formatJourneyDate(form.returnLandingDate)}`,
        
        departureFlightNo: `${form.departureFlightNo}`,
        departureDate: formatFlightDate(form.departureBoardingDate),
        
        returnFlightNo: `${form.returnFlightNo}`,
        returnDate: formatFlightDate(form.returnBoardingDate),
        
        // Pax 1
        passengerName: formatName(firstPax.passengerName), 
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
export function mapMMTData(form, passengers) {
    
    const pdfFields = {
        // MMT specific fields (Page 1 / Header)
        bookingInfoString:`Booking ID:${form.bookingId}, (Booked on ${formatDate(form.bookingDate)})`,
        bookingType: "Flight Ticket (Round trip)",
        
        // Common flight details (same for all passengers)
        departureBoardingDate: formatMMTJourneyDate(form.departureBoardingDate),
        departureLandingDate: formatMMTJourneyDate(form.departureLandingDate),
        returnBoardingDate: formatMMTJourneyDate(form.returnBoardingDate),
        returnLandingDate: formatMMTJourneyDate(form.returnLandingDate),
        
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

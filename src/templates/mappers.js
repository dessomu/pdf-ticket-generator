import { splitName,cleanName } from "../utils/name";
import { formatDate, formatFlightDate, formatJourneyDate,formatMMTJourneyDate,formatMMTFlightDate } from "../utils/date";

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
        
        // Flight Dates
        departureBoardingDate: `23:30 hrs, ${formatJourneyDate(form.departureBoardingDate)}`,
        departureLandingDate: `03:45 hrs, ${formatJourneyDate(form.departureLandingDate)}`,
        returnBoardingDate: `06:45 hrs, ${formatJourneyDate(form.returnBoardingDate)}`,
        returnLandingDate: `08:00 hrs, ${formatJourneyDate(form.returnLandingDate)}`,
        
        departureFlightNo: `${form.departureFlightNo} ( A320 )`,
        departureDate: formatFlightDate(form.departureBoardingDate),
        
        returnFlightNo: `${form.returnFlightNo} ( A320 )`,
        returnDate: formatFlightDate(form.returnBoardingDate),
        
        // Pax 1
        passengerName: firstPax.passengerName, 
    };

    // Add additional passengers dynamically
    passengers.forEach((pax, i) => {
        if (i === 0) return; 
        
        // Name mapping
        pdfFields[`passengerName_${i + 1}`] = pax.passengerName;
    });

    return pdfFields;
}

/**
 * Maps form data to PDF fields for MMT Malaysia templates.
 */
export function mapMMTData(form, passengers) {
    // Reuse Indigo logic for common fields? No, MMT has different field names/formats sometimes.
    // e.g. bookingId vs bookingTimeString usage.
    
    // MMT Base Fields
    const firstPax = passengers[0];
    const cleanedPaxName = cleanName(firstPax.passengerName);

    const age = firstPax.age;
    const type = age >= 12 ? "Adult" : "Child";
    
    const pdfFields = {
        // MMT specific fields
        bookingInfoString:`Booking ID:${form.bookingId} (Booked on ${formatDate(form.bookingDate)})`,
        // MMT maps bookingTime/bookingTimeString differently or not at all (hidden in form)
        departurePassengerName:cleanedPaxName,
        returnPassengerName:cleanedPaxName,

        departurePnr: form.pnr, 
        returnPnr: form.pnr, 
        // Flight Dates (Same format as Indigo for now?)
        departureBoardingDate: formatMMTJourneyDate(form.departureBoardingDate),
        departureLandingDate: formatMMTJourneyDate(form.departureLandingDate),
        returnBoardingDate: formatMMTJourneyDate(form.returnBoardingDate),
        returnLandingDate: formatMMTJourneyDate(form.returnLandingDate),
        
        departureDate: formatMMTFlightDate(form.departureBoardingDate),
        returnDate: formatMMTFlightDate(form.returnBoardingDate),
        
        departureTicketNumber: firstPax.eTicketNumber,
        returnTicketNumber: firstPax.eTicketNumber,

        departureTravellerName:firstPax.passengerName.toUpperCase(),
        departureTravellerType:type,
        returnTravellerName:firstPax.passengerName.toUpperCase(),
        returnTravellerType:type,
    };
    
    const mapNameWithAge = (pax) => {
         if (pax.age) {
             const ageNum = parseInt(pax.age);
             const type = ageNum >= 12 ? "Adult" : "Child";
             return `${pax.passengerName} (${type})`;
         }
         return pax.passengerName;
    };

    // Pax 1
    pdfFields.passengerName = mapNameWithAge(firstPax);

    // Add additional passengers dynamically
    passengers.forEach((pax, i) => {
        if (i === 0) return; // handled above
        
        pdfFields[`passengerName_${i + 1}`] = mapNameWithAge(pax);
        pdfFields[`eTicketNumber_${i + 1}`] = pax.eTicketNumber;
    });

    return pdfFields;
}

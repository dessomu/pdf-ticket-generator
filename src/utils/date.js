// src/utils/date.js

export function getDayFromDate(dateStr) {
  if (!dateStr) return "";

  return new Date(dateStr).toLocaleDateString("en-IN", {
    weekday: "long",
  });
}

export function getNextDate(dateStr) {
  if (!dateStr) return "";

  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  date.setUTCDate(date.getUTCDate() + 1);

  return date.toISOString().split("T")[0];
}


export function formatDate(dateInput) {
    if(!dateInput) return "";
    const date = new Date(dateInput);
    return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "long", year: "numeric" }).format(date);
}

export function formatFlightDate(dateInput) {
    if(!dateInput) return "";
    const date = new Date(dateInput);
    const day = new Intl.DateTimeFormat("en-GB", { day: "2-digit" }).format(date);
    const month = new Intl.DateTimeFormat("en-GB", { month: "short" }).format(date);
    return `${month} ${day} ${date.getFullYear()}`;
}

export function formatJourneyDate(dateInput) {
    if(!dateInput) return "";
    const date = new Date(dateInput);
    const day = new Intl.DateTimeFormat("en-GB", { day: "2-digit" }).format(date);
    const month = new Intl.DateTimeFormat("en-GB", { month: "short" }).format(date);
    return `${day}-${month}-${date.getFullYear()}`;
}

export function formatMMTJourneyDate(dateInput) {
  const date = new Date(dateInput);

  const weekday = new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
  }).format(date);

  const day = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
  }).format(date);

  const month = new Intl.DateTimeFormat("en-GB", {
    month: "short",
  }).format(date);

  return `${weekday},${day} ${month}`;
}
export function formatMMTFlightDate(dateInput) {
  const date = new Date(dateInput);

  const weekday = new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
  }).format(date);

  const day = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
  }).format(date);

  const month = new Intl.DateTimeFormat("en-GB", {
    month: "short",
  }).format(date);
  const year = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
  }).format(date);

  return `${weekday},${day} ${month} ${year}`;
}

// Returns date in format "19 Sep"
export function formatMoveDayMonth(dateInput) {
  if (!dateInput) return "";
  const date = new Date(dateInput);
  
  const day = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
  }).format(date);
  
  const month = new Intl.DateTimeFormat("en-GB", {
    month: "short",
  }).format(date);
  
  return `${day} ${month}`;
}

export function formatMoveFlightDate(dateInput) {
    if(!dateInput) return "";
    const date = new Date(dateInput);
    const weekday = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
  }).format(date);

    const month = new Intl.DateTimeFormat("en-GB", {
    month: "long",
  }).format(date);

    const day = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
  }).format(date);

  const year = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
  }).format(date);
    return `${weekday}, ${day} ${month} ${year}`;
}

export function formatMoveBookingDate(dateInput) {
    if(!dateInput) return "";
    const date = new Date(dateInput);
    const day = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
  }).format(date);
  
  const month = new Intl.DateTimeFormat("en-GB", {
    month: "short",
  }).format(date);
  
  const year = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
  }).format(date);
    return `${day} ${month}, ${year}`;
}

export function formatMoveBookingDate2(dateInput) {
    if(!dateInput) return "";
    const date = new Date(dateInput);
    const day = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
  }).format(date);
  
  const month = new Intl.DateTimeFormat("en-GB", {
    month: "long",
  }).format(date);
  
  const year = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
  }).format(date);
    return `${day} ${month}, ${year}`;
}

export function formatMoveFlightBriefDate2(dateInput) {
    if(!dateInput) return "";
    const date = new Date(dateInput);
    const weekday = new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
  }).format(date);

    const month = new Intl.DateTimeFormat("en-GB", {
    month: "short",
  }).format(date);

    const day = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
  }).format(date);
    return `${weekday}, ${month} ${day}`;
}

export function formatMoveMalaysiaFlightBriefDate(dateInput) {
    if(!dateInput) return "";
    const date = new Date(dateInput);
    const weekday = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
  }).format(date);

    const month = new Intl.DateTimeFormat("en-GB", {
    month: "long",
  }).format(date);

    const day = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
  }).format(date);

  const year = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
  }).format(date);
    return `${weekday}, ${month} ${day}, ${year}`;
}

export function formatCleartripBarcodeDate(dateInput) {
  const date = new Date(dateInput);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");

  const year = String(date.getFullYear()).slice(-3);

  return `${day}${month}${year}`;
}

export function formatCleartripFlightDate(dateInput) {
  const date = new Date(dateInput);

  const weekday = new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
  }).format(date);

  const day = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
  }).format(date);

  const month = new Intl.DateTimeFormat("en-GB", {
    month: "short",
  }).format(date);
  const year = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
  }).format(date);

  return `${weekday}, ${day} ${month} ${year}`;
}

export function formatIndigoIndonesiaDate(dateInput) {
    if(!dateInput) return "";
    const date = new Date(dateInput);
    return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(date);
}
// src/utils/date.js

export function getDayFromDate(dateStr) {
  if (!dateStr) return "";

  return new Date(dateStr).toLocaleDateString("en-IN", {
    weekday: "long",
  });
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

  return `${weekday}, ${day} ${month} ${year}`;
}

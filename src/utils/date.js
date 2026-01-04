// src/utils/date.js

export function getDayFromDate(dateStr) {
  if (!dateStr) return "";

  return new Date(dateStr).toLocaleDateString("en-IN", {
    weekday: "long",
  });
}

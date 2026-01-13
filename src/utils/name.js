// src/utils/name.js

export function splitName(fullName) {
  if (!fullName) {
    return { firstName: "", surname: "" };
  }

  // 1️⃣ Normalize & remove common titles (case-insensitive)
  const cleaned = fullName.trim().replace(/^(mr|mrs|ms|miss|dr)\.?\s+/i, "");

  // 2️⃣ Split by spaces
  const parts = cleaned.split(/\s+/);

  // 3️⃣ Extract names
  const firstName = (parts[0] || "").toUpperCase();
  const surname = (parts.length > 1 ? parts.slice(1).join(" ") : "").toUpperCase();

  return { firstName, surname };
}

export function cleanName(fullName) {
   const cleaned = fullName.trim().replace(/^(mr|mrs|ms|miss|dr)\.?\s+/i, "");
   return cleaned;
}

export function formatName(fullName) {
  return fullName
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const TITLE_MAP = {
  "MR.": "Mr.",
  "MS.": "Ms.",
  "mr.": "Mr.",
  "ms.": "Ms.",
  "MRS.": "Mrs.",
  "MSTR.": "Mstr.",
  "MR": "Mr.",
  "MS": "Ms.",

};

export function formatIndigoIndonesiaPassengerName(name) {
  if (!name) return "";

  const trimmed = name.trim().toUpperCase();

  for (const key in TITLE_MAP) {
    if (trimmed.startsWith(key)) {
      return TITLE_MAP[key] + trimmed.slice(key.length);
    }
  }

  return trimmed;
}

export function formatIataPassengerName(name) {
   const cleaned = name.trim().replace(/^(mr|mrs|ms|miss|dr)\.?\s+/i, "");
    return cleaned.toUpperCase();
}

export function formatToUpperCase(name) {
    return name.toUpperCase();
}
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
  const firstName = parts[0] || "";
  const surname = parts.length > 1 ? parts.slice(1).join(" ") : "";

  return { firstName, surname };
}

export function cleanName(fullName) {
   const cleaned = fullName.trim().replace(/^(mr|mrs|ms|miss|dr)\.?\s+/i, "");
   return cleaned;
}
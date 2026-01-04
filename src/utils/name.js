// src/utils/name.js

export function splitName(fullName = "") {
  const parts = fullName.trim().split(/\s+/);

  if (parts.length === 1) {
    return {
      firstName: parts[0],
      surname: parts[0],
    };
  }

  return {
    surname: parts[parts.length - 1],
    firstName: parts.slice(0, -1).join(" "),
  };
}

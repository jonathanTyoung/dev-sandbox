export const filterByEmailDomain = (contacts, domain) => {
  return contacts.filter((contact) => {
    return contact.email.toLowerCase().includes(domain.toLowerCase());
  });
};

export const filterByFirstletter = (contacts, firstLetter) => {
  return contacts.filter((contact) => {
    return contact.name.toLowerCase().startsWith(firstLetter.toLowerCase());
  });
};

export const filterByMinimumNameLength = (contacts, minLength) => {
  return contacts.filter((contact) => {
    return contact.name.length >= minLength;
  });
};

// The “string splitting archetype”

// This is a universal pattern:

// const pieces = string.split(separator);
// const desiredPiece = pieces[index];

// You can use it to split:

// Full name
// const last = name.split(" ")[1];

// Email address
// const domain = email.split("@")[1];

// File name
// const extension = filename.split(".")[1];

// URL path
// const segments = url.split("/");
// const resource = segments[3];

// Dates
// const [year, month, day] = date.split("-");

// Once this pattern is in your brain, you’ll start seeing opportunities to use it everywhere.

export const filterByLastName = (contacts, lastName) => {
  return contacts.filter((contact) => {
    const last = contact.name.split(" ")[1];
    return last.toLowerCase() === lastName.toLowerCase();
  });
};

export const filterByEmailDomain = (contacts, domain) => {
  return contacts.filter((contact) => {
    const email = contact.email;
    return email.toLowerCase().endsWith(domain.toLowerCase());
  });
};

export const filterByWordCount = (contacts, wordCount) => {
  return contacts.filter((contact) => {
    const count = contact.name.split(" ").length;
    return count == wordCount;
  });
};

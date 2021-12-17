const fs = require("fs").promises;
const contactsPath = require("./contactPath");

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  const result = await JSON.parse(contacts);
  return result;
};

module.exports = listContacts;

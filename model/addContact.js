const listContacts = require("./listContacts");
const updateContact = require("./updateContacts");
const { v4 } = require("uuid");

const addContact = async (data) => {
  const newContact = { ...data, id: v4() };
  const contacts = await listContacts();
  contacts.push(newContact);
  await updateContact(contacts);
  console.log(newContact);
  return newContact;
};

module.exports = addContact;

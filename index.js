const contactsFunctions = require("./contacts");
const argv = require("yargs").argv;

async function invokeAction({ action, name, id, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactsFunctions.listContacts();
      return console.log("Example", contacts);
    case "get":
      const contact = await contactsFunctions.getContactById(id);
      return console.log("Example", contact);
    case "remove":
      const removeContact = await contactsFunctions.removeContact(id);
      return console.log("Example", removeContact);
    case "add":
      const newContact = await contactsFunctions.addContact(name, email, phone);
      return console.log("Example", newContact);
    default:
      return console.log("Example", "Uncnown action");
  }
}

invokeAction(argv);

//** TEST **//
// invokeContactsFunctions({ action: "list" });
// invokeContactsFunctions({action:"get", id:"9XHQLrPYmfkWaUjnO9U22"});
// invokeContactsFunctions({action:"remove", id:"9XHQLrPYmfkWaUjnO9U22"});

// invokeContactsFunctions({
//   action: "ad",
//   name: "Test Name",
//   email: "example@gmail.com",
//   phone: "0-000-000-000",
// });
//** TEST **//

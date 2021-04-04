// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
  this.currentId= 0
  this.excitementLevel = "!"
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  contact.excitementLevel = this.getExcited()
  this.contacts[contact.id] = contact;
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
}
AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false
  }
  delete this.contacts[id]
  return true
}
AddressBook.prototype.getExcited = function() {
  this.excitementLevel += "!"
  return this.excitementLevel
}
// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
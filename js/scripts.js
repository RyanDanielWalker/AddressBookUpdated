// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
  this.currentId= 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
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

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// Business Logic for PlacesIHaveBeen
function PlacesIHaveBeen() {
  this.destinations = {}
  this.currentId = 0
}
PlacesIHaveBeen.prototype.assignId = function() {
  this.currentId += 1
  return this.currentId
}
PlacesIHaveBeen.prototype.addDestination = function(destination) {
  destination.id = this.assignId()
  this.destinations[destination.id] = destination
}
PlacesIHaveBeen.prototype.findDestination = function(id) {
  if (this.destinations[id] != undefined) {
    return destinations[id]
  }
  return false
}
PlacesIHaveBeen.prototype.deleteDestination = function(id) {
  if (this.destinations[id] === undefined) {
    return false
  }
  delete this.destinations[id]
  return true
}
// Business Logic for Destination
function Destination(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}
Destination.prototype.showLocation = function() {
  return this.location
}

$(document).ready(function(){
  $("#id").click(event)
  event.preventDefault
  
})





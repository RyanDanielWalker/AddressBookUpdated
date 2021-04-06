// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
  this.currentId = 0
}

AddressBook.prototype.addContact = function (contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
}

AddressBook.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}
AddressBook.prototype.findContact = function (id) {
  if (this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
}
AddressBook.prototype.deleteContact = function (id) {
  if (this.contacts[id] === undefined) {
    return false
  }
  delete this.contacts[id]
  return true
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber, emailAddress) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.emailAddress = emailAddress;
  this.addressOptions = {}
}

Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
}

Contact.prototype.addAddressOption = function (addressOption) {
  this.addressOptions = addressOption
}






function AddressOption(workAddress, homeAddress, emailAddress) {
  this.workAddress = workAddress;
  this.homeAddress = homeAddress;
  this.emailAddress = emailAddress;

}

// Business Logic for PlacesIHaveBeen
function PlacesIHaveBeen() {
  this.destinations = {}
  this.currentId = 0
}
PlacesIHaveBeen.prototype.assignId = function () {
  this.currentId += 1
  return this.currentId
}
PlacesIHaveBeen.prototype.addDestination = function (destination) {
  destination.id = this.assignId()
  this.destinations[destination.id] = destination
}
PlacesIHaveBeen.prototype.findDestination = function (id) {
  if (this.destinations[id] != undefined) {
    return destinations[id]
  }
  return false
}
PlacesIHaveBeen.prototype.deleteDestination = function (id) {
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
Destination.prototype.showLocation = function () {
  return this.location
}

// User Interface Logic
let addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts")
  let htmlForContactInfo = ""
  Object.keys(addressBookToDisplay.contacts).forEach(function (key) {
    const contact = addressBookToDisplay.findContact(key)
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>"
  })
  contactsList.html(htmlForContactInfo)
}
function showContact(contactId) {
  const contact = addressBook.findContact(contactId)
  $("#show-contact").show()
  $(".first-name").html(contact.firstName)
  $(".last-name").html(contact.lastName)
  $(".phone-number").html(contact.phoneNumber)
  $(".work-address").html(contact.addressOptions.workAddress)
  $(".home-address").html(contact.addressOptions.homeAddress)
  $(".email-address").html(contact.addressOptions.emailAddress)

  let buttons = $("#buttons")
  buttons.empty()
  buttons.append("<button class='deleteButton' id=" + + contact.id + ">Delete</button>")
}
function attachContactListeners() {
  $("ul#contacts").on("click", "li", function () {
    showContact(this.id)
  })
  $("#buttons").on("click", ".deleteButton", function () {
    addressBook.deleteContact(this.id)
    $("#show-contact").hide()
    displayContactDetails(addressBook)
  })
}

$(document).ready(function () {
  attachContactListeners()
  $("form#new-contact").submit(function (event) {
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();
    const inputtedWorkAddress = $("input#new-work-address").val();
    const inputtedHomeAddress = $("input#new-home-address").val();
    const inputtedEmailAddress = $("input#new-email-address").val();
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    $("input#new-work-address").val("");
    $("input#new-home-address").val("");
    $("input#new-email-address").val("");
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    let newAddress = new AddressOption(inputtedWorkAddress, inputtedHomeAddress, inputtedEmailAddress)
    addressBook.addContact(newContact);
    newContact.addAddressOption(newAddress);
    displayContactDetails(addressBook);
  });
});
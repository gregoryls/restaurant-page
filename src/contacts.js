import { createElementWithId } from "./home";

function contact(name, role, phone, email) {
  // creates the elements with supplied info for a given contact

  const contactInfo = createElementWithId("div");
  contactInfo.classList.add("contact");

  const contactName = createElementWithId("h3");
  contactName.textContent = name;
  contactInfo.appendChild(contactName);

  const roleTitle = createElementWithId("p");
  roleTitle.textContent = role;
  contactInfo.appendChild(roleTitle);

  const phoneNumber = createElementWithId("p");
  phoneNumber.textContent = phone;
  contactInfo.appendChild(phoneNumber);

  const emailAddress = createElementWithId("p");
  emailAddress.textContent = email;
  contactInfo.appendChild(emailAddress);

  return contactInfo;
}

function wrapContacts() {
  const wrappedContacts = createElementWithId("section", "contactsWrapper");
  wrappedContacts.appendChild(
    contact("Jane", "Owner", "111-222-3333", "owner@restaurant.com")
  );
  wrappedContacts.appendChild(
    contact("John", "Chef", "888-777-6666", "chef@restaurant.com")
  );
  wrappedContacts.appendChild(
    contact("Sam", "Waiter", "444-555-6666", "waiter@restaurant.com")
  );
  return wrappedContacts;
}

export default function contactPage() {
  const content = document.getElementById("content");

  content.appendChild(wrapContacts());
}

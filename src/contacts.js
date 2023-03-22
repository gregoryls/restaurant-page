import { createElementWithId } from "./tab1";

function contact(name, role, phone, email) {
  const contactInfo = createElementWithId("div");
  const contactName = createElementWithId("h3");
  contactName.textContent = name;
  contactInfo.appendChild(contactName);

  return contactInfo;
}

export default function contactPage() {
  const content = document.getElementById("content");
  content.appendChild(contact("john"));
}

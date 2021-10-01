import { InputField } from './inputField';

export function contactSection() {
    // Create Elements
    let contactContainer = document.createElement('div');
    let contactSection = document.createElement('div');
    let contactHead = document.createElement('h2');
    let contactInfo = document.createElement('p');
    let contactPhone = document.createElement('a');
    let contactForm = document.createElement('form');
    let name = new InputField('name', 'text', 'First Name');
    let email = new InputField('email', 'email', 'Email');
    let textArea = document.createElement('textarea');
    let button = document.createElement('button');
    // Give Elements ID
    textArea.id = 'feedback';
    // Set Attributes
    textArea.setAttribute('cols', '30');
    textArea.setAttribute('rows', '10');
    textArea.setAttribute('placeholder', 'Give us your feedback!');
    // Give Elements Content
    contactHead.innerText = 'We are open everyday between 11am and 10pm';
    contactPhone.innerText = '555-555-5555';
    contactInfo.innerText =
        'You can reach us by phone 555-555-5555 or fill out the form below.';
    button.innerText = 'Submit';
    // Give Elements Classes
    contactContainer.classList.add('contact-container');
    contactSection.classList.add('contact');
    // Append Elements
    contactForm.appendChild(name.createElement);
    contactForm.appendChild(email.createElement);
    contactForm.appendChild(textArea);
    contactSection.appendChild(contactHead);
    contactSection.appendChild(contactInfo);
    contactSection.appendChild(contactForm);
    contactSection.appendChild(button);
    contactContainer.appendChild(contactSection);
    return contactContainer;
}
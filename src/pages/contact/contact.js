import './contact.css'

export default function displayContact() {
    const container = document.querySelector('#content');

    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phone = document.createElement('div');
    phone.textContent = "Phone: 036-568-891";
    const mail = document.createElement('div');
    const mailLink = document.createElement('a');
    mailLink.textContent = "louiskitchen@healthy.org";
    mailLink.href = "mailto:louiskitchen@healthy.org"
    mail.textContent = "Mail: ";
    mail.appendChild(mailLink);

    const social = document.createElement('div');
    const socialLink = document.createElement('a');
    socialLink.href = "http://instagram.com";
    socialLink.target = "_blank";
    socialLink.textContent = "Instagram";
    social.textContent = "Make sure to follow us on ";
    social.appendChild(socialLink);

    contact.appendChild(phone);
    contact.appendChild(mail);
    contact.appendChild(social);

    container.appendChild(contact);
}

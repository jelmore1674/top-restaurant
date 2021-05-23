/** @format */

import { footer } from './footer';
import { aboutSection } from './about';
import { header } from './header';
import { nav } from './nav';

function landingPage() {
    const home = document.getElementById('home');
    const menu = document.getElementById('menu');
    const contact = document.getElementById('contact');
    home.classList.add('active');
    menu.classList.remove('active');
    contact.classList.remove('active');
    about.appendChild(aboutSection());
    return content;
}

export { landingPage };
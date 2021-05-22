/** @format */

import { footer } from './footer';
import { aboutSection } from './about';
import { header } from './header';
import { nav } from './nav';

function landingPage() {
    let content = document.getElementById('content');
    content.appendChild(nav());
    let home = document.getElementById('home');
    home.classList.add('active');
    content.appendChild(header());
    content.appendChild(aboutSection());
    content.appendChild(footer());
    return content;
}

export { landingPage };
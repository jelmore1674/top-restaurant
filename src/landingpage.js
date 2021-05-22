/** @format */

import { footer } from './footer';
import { aboutSection } from './about';
import { header } from './header';

function landingPage() {
    let content = document.getElementById('content');
    content.appendChild(header());
    content.appendChild(aboutSection());
    content.appendChild(footer());
    return content;
}

export { landingPage };
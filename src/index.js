// Import functions
import { aboutSection } from './about';
import { menuSection } from './menu';
import { header } from './header';
import { footer } from './footer';
import { nav } from './nav';
import { contactSection } from './contact';

// Import Classes
import { MenuItem } from './menuItem';

// Nav Items Array of Objects
import { navItems } from './navItems';
import { menu } from './menuItem';

// Get containers
const content = document.getElementById('content');
const mainContent = document.createElement('main');
mainContent.id = 'mainContent';

// Append imported components to containers
content.appendChild(nav(navItems));
content.appendChild(header());
mainContent.appendChild(aboutSection());
content.appendChild(mainContent);
content.appendChild(footer());

// Select and Create Event Listeners
const home = document.getElementById('home');
const menuPage = document.getElementById('menu');
const contactPage = document.getElementById('contact');
home.addEventListener('click', homePage);
menuPage.addEventListener('click', menuFull);
contactPage.addEventListener('click', contactSwitch);

// Tab Switching
function homePage() {
    // Clear mainContent element
    document.getElementById('mainContent').innerHTML = '';
    // Append new section to it
    document.getElementById('mainContent').appendChild(aboutSection());
    // Create Selectors
    const home = document.getElementById('home');
    const menuPage = document.getElementById('menu');
    const contactTab = document.getElementById('contact');
    // Change Classes
    document.querySelector('.tagline').classList.remove('hidden');
    home.classList.add('active');
    menuPage.classList.remove('active');
    contactTab.classList.remove('active');
    contactTab.classList.remove('last-tab');
    // Event Listeners
    home.addEventListener('click', homePage);
    menuPage.addEventListener('click', menuFull);
    contactTab.addEventListener('click', contactSwitch);
}

function menuFull() {
    // Clear mainContent element
    document.getElementById('mainContent').innerHTML = '';
    // Append new section to it
    let content = document.getElementById('mainContent');
    content.appendChild(menuSection());
    // Create Selectors
    const home = document.getElementById('home');
    const menuPage = document.getElementById('menu');
    const contactTab = document.getElementById('contact');

    const chicken = new MenuItem(menu[0]);
    chicken.createElement();
    const porkchop = new MenuItem(menu[1]);
    porkchop.createElement();
    const dumplins = new MenuItem(menu[2]);
    dumplins.createElement();
    // Change Classes
    home.classList.remove('active');
    menuPage.classList.add('active');
    contactTab.classList.remove('active');
    contactTab.classList.remove('last-tab');
    document.querySelector('.tagline').classList.add('hidden');
    // Event Listeners
    home.addEventListener('click', homePage);
    menuPage.addEventListener('click', menuFull);
    contactTab.addEventListener('click', contactSwitch);
}

function contactSwitch() {
    // Clear mainContent element
    document.getElementById('mainContent').innerHTML = '';
    // Append new section to it
    let content = document.getElementById('mainContent');
    content.appendChild(contactSection());
    // Create Selectors
    const home = document.getElementById('home');
    const menuPage = document.getElementById('menu');
    const contactTab = document.getElementById('contact');
    // Change Classes
    home.classList.remove('active');
    menuPage.classList.remove('active');
    contactTab.classList.add('active');
    contactTab.classList.add('last-tab');
    document.querySelector('.tagline').classList.add('hidden');
    // Event Listeners
    home.addEventListener('click', homePage);
    menuPage.addEventListener('click', menuFull);
    contactTab.addEventListener('click', contactSwitch);
}
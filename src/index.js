/** @format */

// Import functions
import _ from 'lodash';
import { aboutSection } from './about';
import { menuSec } from './menu';
import { header } from './header';
import { footer } from './footer';
import { nav } from './nav';
import { contactSection } from './contact';

// Get containers
const content = document.getElementById('content');
const mainContent = document.createElement('main');
mainContent.id = 'mainContent';

// Append imported components to containers
content.appendChild(nav());
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
    content.appendChild(menuSec());
    // Create Selectors
    const home = document.getElementById('home');
    const menuPage = document.getElementById('menu');
    const contactTab = document.getElementById('contact');
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
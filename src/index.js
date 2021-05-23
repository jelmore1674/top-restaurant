/** @format */
import _ from 'lodash';
import { aboutSection } from './about';
import { menuSec } from './menu';
import { header } from './header';
import { footer } from './footer';
import { nav } from './nav';
import { contactSection } from './contact';

const content = document.getElementById('content');
const mainContent = document.createElement('main');
mainContent.id = 'mainContent';

content.appendChild(nav());
content.appendChild(header());
mainContent.appendChild(aboutSection());
content.appendChild(mainContent);
content.appendChild(footer());

const home = document.getElementById('home');
home.addEventListener('click', homePage);
const menuPage = document.getElementById('menu');
menuPage.addEventListener('click', menuFull);
const contactPage = document.getElementById('contact');
contactPage.addEventListener('click', contactSwitch);

function homePage() {
    document.getElementById('mainContent').innerHTML = '';
    document.getElementById('mainContent').appendChild(aboutSection());
    const home = document.getElementById('home');
    const menuPage = document.getElementById('menu');
    const contactTab = document.getElementById('contact');
    document.querySelector('.tagline').classList.remove('hidden');
    home.classList.add('active');
    menuPage.classList.remove('active');
    contactTab.classList.remove('active');
    home.addEventListener('click', homePage);
    menuPage.addEventListener('click', menuFull);
    contactTab.addEventListener('click', contactSwitch);
}

function menuFull() {
    document.getElementById('mainContent').innerHTML = '';
    let content = document.getElementById('mainContent');
    content.appendChild(menuSec());
    const home = document.getElementById('home');
    const menuPage = document.getElementById('menu');
    const contactTab = document.getElementById('contact');
    home.classList.remove('active');
    menuPage.classList.add('active');
    contactTab.classList.remove('active');
    document.querySelector('.tagline').classList.add('hidden');
    home.addEventListener('click', homePage);
    menuPage.addEventListener('click', menuFull);
    contactTab.addEventListener('click', contactSwitch);
}

function contactSwitch() {
    document.getElementById('mainContent').innerHTML = '';
    let content = document.getElementById('mainContent');
    content.appendChild(contactSection());
    const home = document.getElementById('home');
    const menuPage = document.getElementById('menu');
    const contactTab = document.getElementById('contact');
    home.classList.remove('active');
    menuPage.classList.remove('active');
    contactTab.classList.add('active');
    document.querySelector('.tagline').classList.add('hidden');
    home.addEventListener('click', homePage);
    menuPage.addEventListener('click', menuFull);
    contactTab.addEventListener('click', contactSwitch);
}
/** @format */
import _ from 'lodash';
import { aboutSection } from './about';
import { menuSec } from './menu';
import { header } from './header';
import { footer } from './footer';
import { nav } from './nav';

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

function homePage() {
    document.getElementById('mainContent').innerHTML = '';
    document.getElementById('mainContent').appendChild(aboutSection());
    const home = document.getElementById('home');
    const menuPage = document.getElementById('menu');
    document.querySelector('.tagline').classList.remove('hidden');
    home.classList.add('active');
    menuPage.classList.remove('active');
    home.addEventListener('click', homePage);
    menuPage.addEventListener('click', menuFull);
}

function menuFull() {
    document.getElementById('mainContent').innerHTML = '';
    let content = document.getElementById('mainContent');
    content.appendChild(menuSec());
    const home = document.getElementById('home');
    const menuPage = document.getElementById('menu');
    home.classList.remove('active');
    menuPage.classList.add('active');
    document.querySelector('.tagline').classList.add('hidden');
    home.addEventListener('click', homePage);
    menuPage.addEventListener('click', menuFull);
}
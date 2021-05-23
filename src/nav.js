/** @format */
// const home = document.getElementById('home');
// home.addEventListener('click', homePage);
// const menuPage = document.getElementById('menu');
// menuPage.addEventListener('click', menuFull);
// const main = document.getElementById('main');

// function homePage() {
//     content.innerHTML = '';
//     content.appendChild(landingPage());
// }

// function menuFull() {
//     main.innerText = '';
//     main.appendChild(menuSec());
// }

function nav() {
    let nav = document.createElement('nav');
    let home = document.createElement('div');
    let menu = document.createElement('div');
    let contact = document.createElement('div');
    contact.classList.add('tabs');
    contact.id = 'contact';
    contact.innerText = 'Contact';
    menu.classList.add('tabs');
    menu.id = 'menu';
    menu.innerText = 'Menu';
    home.classList.add('tabs');
    home.id = 'home';
    home.innerText = 'Home';
    nav.id = 'nav';
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    return nav;
}

export { nav };
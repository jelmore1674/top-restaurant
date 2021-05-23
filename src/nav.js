/** @format */

function nav() {
    // Create Elements
    let nav = document.createElement('nav');
    let home = document.createElement('div');
    let menu = document.createElement('div');
    let contact = document.createElement('div');
    // Give Elements ID
    contact.id = 'contact';
    menu.id = 'menu';
    home.id = 'home';
    nav.id = 'nav';
    // Give Elements Content
    contact.innerText = 'Contact';
    menu.innerText = 'Menu';
    home.innerText = 'Home';
    // Give Elements Classes
    contact.classList.add('tabs');
    menu.classList.add('tabs');
    home.classList.add('tabs');
    // Append Elements
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    return nav;
}

export { nav };
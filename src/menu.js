export function menuSection() {
    // Create All Elements
    let menuContainer = document.createElement('div');
    let menuSection = document.createElement('div');
    menuSection.id = 'menu-item-container';
    let menuFooter = document.createElement('div');
    menuFooter.id = 'menu-footer';
    let menuBottom = document.createElement('div');
    let menuFine = document.createElement('p');
    // Give Elements Classes
    menuSection.classList.add('menu');
    menuContainer.classList.add('menu-container');
    // Give Element Content
    menuFine.innerText =
        'All plates come with a choice of cornbread and biscuits';
    // Appen Elements
    menuBottom.appendChild(menuFine);
    menuFooter.appendChild(menuBottom);
    menuContainer.appendChild(menuSection);
    menuContainer.appendChild(menuFooter);
    return menuContainer;
}
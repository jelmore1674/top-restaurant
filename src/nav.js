import { createNavItem } from './navItems';

export function nav(navItems) {
    // Create Nav Element
    let nav = document.createElement('nav');
    nav.id = 'nav';
    // Create Nav Items
    navItems.forEach((item) => {
        let newElement = createNavItem(item);
        nav.appendChild(newElement);
    });
    return nav;
}
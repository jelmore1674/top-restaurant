export const navItems = [{
        id: 'home',
        title: 'Home',
    },
    {
        id: 'menu',
        title: 'Menu',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

export function createNavItem(item) {
    const { id, title } = item;
    let el = document.createElement('div');
    el.id = id;
    el.innerText = title;
    el.classList.add('tabs');
    return el;
}
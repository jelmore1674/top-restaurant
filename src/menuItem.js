export const menu = [{
        name: 'Fried Chicken Plate',
        description: "Our Famous Fried Chicken Plate comes with fried chicken breast, homemade mashed potatoes, fried squash, and homemade mac n' cheese.",
        price: 14.99,
    },
    {
        name: 'Porkchop Plate',
        description: "Our Porkchop Plate comes with BBQ Porkchop, homemade mashed potates, fried tomatoes, and homemade mac n' cheese",
        price: 12.99,
    },
    {
        name: 'Homemade Chicken and Dumplins',
        description: 'Our Chicken and Dumplings Plate comes with hashbrown casserole, fried sqaush and green beans',
        price: 10.99,
    },
];

export class MenuItem {
    constructor(menuItem) {
        this.menuItem = menuItem;
    }

    get logItem() {
        console.log({
            name: this.name,
            description: this.description,
            price: this.price,
        });
    }

    createElement() {
        let menuItem = document.createElement('div');
        let menuItemHead = document.createElement('h3');
        let menuInfo = document.createElement('p');
        let menuPrice = document.createElement('h4');
        // Build Out the Menu Item
        menuItemHead.innerText = this.menuItem.name;
        menuInfo.innerText = this.menuItem.description;
        menuPrice.innerText = `$${this.menuItem.price}`;
        menuItem.classList.add('menu-item');
        // Append All Items to Menu-Item Card
        menuItem.appendChild(menuItemHead);
        menuItem.appendChild(menuInfo);
        menuItem.appendChild(menuPrice);
        document.getElementById('menu-item-container').appendChild(menuItem);
        return menuItem;
    }
}
/** @format */

function menuSec() {
    // Fried Chicken Plate Card

    // Create All Elements
    let menuSection = document.createElement('div');
    let menuItem = document.createElement('div');
    let menuItemHead = document.createElement('h3');
    let menuInfo = document.createElement('p');
    let menuPrice = document.createElement('h4');
    let menuBottom = document.createElement('div');
    let menuFine = document.createElement('p');
    // Build Out the Menu Item
    menuItemHead.innerText = 'Fried Chicken Plate';
    menuInfo.innerText =
        "Our Famous Fried Chicken Plate comes with fried chicken breast, homemade mashed potatoes, fried squash, and homemade mac n' cheese.";
    menuPrice.innerText = '$14.99';
    menuItem.classList.add('menu-item');
    menuFine.innerText =
        'All plates come with a choice of cornbread and biscuits';
    // Append All Items to Menu-Item Card
    menuItem.appendChild(menuItemHead);
    menuItem.appendChild(menuInfo);
    menuItem.appendChild(menuPrice);
    menuBottom.appendChild(menuFine);

    // Porkchops

    // Create the Elements
    let menuItem1 = document.createElement('div');
    let menuItemHead1 = document.createElement('h3');
    let menuInfo1 = document.createElement('p');
    let menuPrice1 = document.createElement('h4');
    // Build out the menu item
    menuItemHead1.innerText = 'Porkchop Plate';
    menuInfo1.innerText =
        "Our Porkchop Plate comes with BBQ Porkchop, homemade mashed potates, fried tomatoes, and homemade mac n' cheese";
    menuPrice1.innerText = '$12.99';
    menuItem1.classList.add('menu-item');
    // Append to Menu-Item Card
    menuItem1.appendChild(menuItemHead1);
    menuItem1.appendChild(menuInfo1);
    menuItem1.appendChild(menuPrice1);

    // Chicken and Dumplins

    // Create the Elements
    let menuItem2 = document.createElement('div');
    let menuItemHead2 = document.createElement('h3');
    let menuInfo2 = document.createElement('p');
    let menuPrice2 = document.createElement('h4');
    // Build out the menu item
    menuItemHead2.innerText = 'Homemade Chicken and Dumplins';
    menuInfo2.innerText =
        'Our Chicken and Dumplings Plate comes with hashbrown casserole, fried sqaush and green beans';
    menuPrice2.innerText = '$10.99';
    menuItem2.classList.add('menu-item');
    menuSection.classList.add('menu');
    // Append to Menu-Item Card
    menuItem2.appendChild(menuItemHead2);
    menuItem2.appendChild(menuInfo2);
    menuItem2.appendChild(menuPrice2);

    // Append All Menu-Items to Menu Div
    menuSection.appendChild(menuItem);
    menuSection.appendChild(menuItem1);
    menuSection.appendChild(menuItem2);
    menuSection.appendChild(menuBottom);
    return menuSection;
}

export { menuSec };
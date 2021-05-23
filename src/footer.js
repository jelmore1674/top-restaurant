/** @format */

function footer() {
    // Create Elements
    let footer = document.createElement('footer');
    let footerText = document.createElement('p');
    let footerCon = document.createElement('div');
    // Give Elements Content
    footerText.innerText =
        "This is not a real place, because my wife can't really cook. LOL!";
    // Give Element Class
    footer.classList.add('footer');
    // Append Elements
    footerCon.appendChild(footerText);
    footer.appendChild(footerCon);
    return footer;
}

export { footer };
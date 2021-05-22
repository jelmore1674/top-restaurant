/** @format */

function footer() {
    let footer = document.createElement('div');
    let footerText = document.createElement('p');
    let footerCon = document.createElement('footer');

    footer.classList.add('footer');
    footerText.innerText =
        "This is not a real place, because my wife can't really cook. LOL!";
    footerCon.appendChild(footerText);
    footer.appendChild(footerCon);
    return footer;
}

export { footer };
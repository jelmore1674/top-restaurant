/** @format */

function header() {
    let landing = document.createElement('section');
    let title = document.createElement('div');
    let heading = document.createElement('h1');
    let tagline = document.createElement('div');
    let taglineTxt = document.createElement('p');
    taglineTxt.innerText = 'Food so good, you thought your grandmother made it';
    tagline.classList.add('tagline');
    tagline.appendChild(taglineTxt);
    heading.innerText = "Reanne's Southern Kitchen";
    title.appendChild(heading);
    title.classList.add('title');
    landing.classList.add('landing');
    landing.appendChild(title);
    landing.appendChild(tagline);
    return landing;
}

export { header };
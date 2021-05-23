/** @format */

function header() {
    // Create Elements
    let landing = document.createElement('section');
    let title = document.createElement('div');
    let heading = document.createElement('h1');
    let tagline = document.createElement('div');
    let taglineTxt = document.createElement('p');
    // Give Elements Content
    taglineTxt.innerText = 'Food so good, you thought your grandmother made it';
    heading.innerText = "Reanne's Southern Kitchen";
    // Give Elements Classes
    tagline.classList.add('tagline');

    title.classList.add('title');
    landing.classList.add('landing');
    tagline.appendChild(taglineTxt);
    title.appendChild(heading);
    landing.appendChild(title);
    landing.appendChild(tagline);
    return landing;
}

export { header };
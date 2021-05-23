/** @format */

function aboutSection() {
    const home = document.getElementById('home');
    const menu = document.getElementById('menu');
    const contact = document.getElementById('contact');
    let aboutCon = document.createElement('div');
    let about = document.createElement('div');
    let aboutHeading = document.createElement('h2');
    let aboutSec = document.createElement('div');
    let aboutTxt = document.createElement('p');
    let aboutImg = document.createElement('img');
    home.classList.add('active');
    menu.classList.remove('active');
    contact.classList.remove('active');
    aboutCon.classList.add('about-container');
    about.id = 'main';
    about.classList.add('about');
    aboutSec.classList.add('about-sect');
    aboutHeading.innerText = 'Nothing Beats Homestyle!';
    about.appendChild(aboutHeading);
    aboutImg.src = './images/southern-food.jpeg';
    aboutSec.appendChild(aboutImg);
    aboutTxt.innerText =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus facilis incidunt libero culpa assumenda reprehenderit eaque omnis corporis, molestiae hic, corrupti in laudantium quibusdam quo dolorum cupiditate, eveniet error? Recusandae? Eveniet,hic ? Necessitatibus mollitia aliquam, molestias facere autem blanditiis illo quas recusandae sed error minima rerum facilis.Veniam saepe dolorum corporis, sit impedit fuga.Aut est autem at enim sunt ? Modi assumenda nemo facilis quisquam odio sint suscipit pariatur.Veniam itaque voluptates repellendus reprehenderit enim ? At, rerum, ratione autem, nam ducimus velit tempore exercitationem totam officia nulla quia laborum!Ipsum ? ';
    aboutSec.appendChild(aboutTxt);
    about.appendChild(aboutSec);
    aboutCon.appendChild(about);
    return aboutCon;
}

export { aboutSection };
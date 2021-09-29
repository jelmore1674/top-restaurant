(()=>{"use strict";function e(){const e=document.getElementById("home"),t=document.getElementById("menu"),n=document.getElementById("contact");let i=document.createElement("div"),a=document.createElement("div"),d=document.createElement("h2"),c=document.createElement("div"),m=document.createElement("p"),o=document.createElement("img");return a.id="main",e.classList.add("active"),t.classList.remove("active"),n.classList.remove("active"),i.classList.add("about-container"),a.classList.add("about"),c.classList.add("about-sect"),d.innerText="Nothing Beats Homestyle!",o.src="./images/southern-food.jpeg",m.innerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus facilis incidunt libero culpa assumenda reprehenderit eaque omnis corporis, molestiae hic, corrupti in laudantium quibusdam quo dolorum cupiditate, eveniet error? Recusandae? Eveniet,hic ? Necessitatibus mollitia aliquam, molestias facere autem blanditiis illo quas recusandae sed error minima rerum facilis.Veniam saepe dolorum corporis, sit impedit fuga.Aut est autem at enim sunt ? Modi assumenda nemo facilis quisquam odio sint suscipit pariatur.Veniam itaque voluptates repellendus reprehenderit enim ? At, rerum, ratione autem, nam ducimus velit tempore exercitationem totam officia nulla quia laborum!Ipsum ? ",a.appendChild(d),c.appendChild(o),c.appendChild(m),a.appendChild(c),i.appendChild(a),i}class t{constructor(e,t,n){this.id=e,this.type=t,this.placeholder=n}get createElement(){let e=document.createElement("input");return e.id=this.id,e.setAttribute("type",this.type),e.setAttribute("placeholder",this.placeholder),console.log(e),e}}const n=[{name:"Fried Chicken Plate",description:"Our Famous Fried Chicken Plate comes with fried chicken breast, homemade mashed potatoes, fried squash, and homemade mac n' cheese.",price:14.99},{name:"Porkchop Plate",description:"Our Porkchop Plate comes with BBQ Porkchop, homemade mashed potates, fried tomatoes, and homemade mac n' cheese",price:12.99},{name:"Homemade Chicken and Dumplins",description:"Our Chicken and Dumplings Plate comes with hashbrown casserole, fried sqaush and green beans",price:10.99}];class i{constructor(e){this.menuItem=e}get logItem(){console.log({name:this.name,description:this.description,price:this.price})}createElement(){let e=document.createElement("div"),t=document.createElement("h3"),n=document.createElement("p"),i=document.createElement("h4");return t.innerText=this.menuItem.name,n.innerText=this.menuItem.description,i.innerText=`$${this.menuItem.price}`,e.classList.add("menu-item"),e.appendChild(t),e.appendChild(n),e.appendChild(i),document.getElementById("menu-item-container").appendChild(e),e}}const a=document.getElementById("content"),d=document.createElement("main");d.id="mainContent",a.appendChild(function(e){let t=document.createElement("nav");return t.id="nav",[{id:"home",title:"Home"},{id:"menu",title:"Menu"},{id:"contact",title:"Contact"}].forEach((e=>{let n=function(e){const{id:t,title:n}=e;let i=document.createElement("div");return i.id=t,i.innerText=n,i.classList.add("tabs"),i}(e);t.appendChild(n)})),t}()),a.appendChild(function(){let e=document.createElement("section"),t=document.createElement("div"),n=document.createElement("h1"),i=document.createElement("div"),a=document.createElement("p");return a.innerText="Food so good, you thought your grandmother made it",n.innerText="Reanne's Southern Kitchen",i.classList.add("tagline"),t.classList.add("title"),e.classList.add("landing"),i.appendChild(a),t.appendChild(n),e.appendChild(t),e.appendChild(i),e}()),d.appendChild(e()),a.appendChild(d),a.appendChild(function(){let e=document.createElement("footer"),t=document.createElement("p"),n=document.createElement("div");return t.innerText="This is not a real place, because my wife can't really cook. LOL!",e.classList.add("footer"),n.appendChild(t),e.appendChild(n),e}());const c=document.getElementById("home"),m=document.getElementById("menu"),o=document.getElementById("contact");function l(){document.getElementById("mainContent").innerHTML="",document.getElementById("mainContent").appendChild(e());const t=document.getElementById("home"),n=document.getElementById("menu"),i=document.getElementById("contact");document.querySelector(".tagline").classList.remove("hidden"),t.classList.add("active"),n.classList.remove("active"),i.classList.remove("active"),i.classList.remove("last-tab"),t.addEventListener("click",l),n.addEventListener("click",s),i.addEventListener("click",r)}function s(){document.getElementById("mainContent").innerHTML="",document.getElementById("mainContent").appendChild(function(){let e=document.createElement("div"),t=document.createElement("div");t.id="menu-item-container";let n=document.createElement("div");n.id="menu-footer";let i=document.createElement("div"),a=document.createElement("p");return t.classList.add("menu"),e.classList.add("menu-container"),a.innerText="All plates come with a choice of cornbread and biscuits",i.appendChild(a),n.appendChild(i),e.appendChild(t),e.appendChild(n),e}());const e=document.getElementById("home"),t=document.getElementById("menu"),a=document.getElementById("contact");new i(n[0]).createElement(),new i(n[1]).createElement(),new i(n[2]).createElement(),e.classList.remove("active"),t.classList.add("active"),a.classList.remove("active"),a.classList.remove("last-tab"),document.querySelector(".tagline").classList.add("hidden"),e.addEventListener("click",l),t.addEventListener("click",s),a.addEventListener("click",r)}function r(){document.getElementById("mainContent").innerHTML="",document.getElementById("mainContent").appendChild(function(){let e=document.createElement("div"),n=document.createElement("div"),i=document.createElement("h2"),a=document.createElement("p"),d=document.createElement("a"),c=document.createElement("form"),m=new t("name","text","First Name"),o=new t("email","email","Email"),l=document.createElement("textarea"),s=document.createElement("button");return l.id="feedback",l.setAttribute("cols","30"),l.setAttribute("rows","10"),l.setAttribute("placeholder","Give us your feedback!"),i.innerText="We are open everyday between 11am and 10pm",d.innerText="555-555-5555",a.innerText="You can reach us by phone 555-555-5555 or fill out the form below.",s.innerText="Submit",e.classList.add("contact-container"),n.classList.add("contact"),c.appendChild(m.createElement),c.appendChild(o.createElement),c.appendChild(l),n.appendChild(i),n.appendChild(a),n.appendChild(c),n.appendChild(s),e.appendChild(n),e}());const e=document.getElementById("home"),n=document.getElementById("menu"),i=document.getElementById("contact");e.classList.remove("active"),n.classList.remove("active"),i.classList.add("active"),i.classList.add("last-tab"),document.querySelector(".tagline").classList.add("hidden"),e.addEventListener("click",l),n.addEventListener("click",s),i.addEventListener("click",r)}c.addEventListener("click",l),m.addEventListener("click",s),o.addEventListener("click",r)})();
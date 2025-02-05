// slå dig løs her... 
/*   <div class="wrapper">
        <header class="header"></header>
        <main>
            <section class="hero"></section>
            <section class="services"></section>
            <section class="facilities"></section>
            <section class="sites"></section>
            <section class="advantages"></section>
        </main>
        <footer class="footer"></footer>
    </div> */

const wrapperElm = document.querySelector(".wrapper");
const headerElm = document.querySelector(".header");
const heroElm = document.querySelector(".hero");
const servicesElm = document.querySelector(".services");
const facilitiesElm = document.querySelector(".facilities");
const sitesElm = document.querySelector(".sites");
const advantagesElm = document.querySelector(".advantages");
const footerElm = document.querySelector(".footer");




let newArticle = document.createElement("article");
newArticle.textContext = "dette er en ny <article>";
document.body.append(newArticle);
let serviceListDiv = document.querySelector(".services");
services.forEach(function (service) {
    const serviceDiv = document.createElement("article");
    serviceDiv.textContent =
        `${service.headline} ${service.text} ${service.linktext}`;

    console.log(serviceDiv);

})



/* console.log(hero.copy) */

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))



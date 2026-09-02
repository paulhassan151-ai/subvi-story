```javascript
/* =====================================================
   SUB^VI — THE STORY
   Interactive JavaScript
===================================================== */

/* ================= MOBILE MENU ================= */

function toggleMenu() {
    const nav = document.getElementById("navMenu");

    if (nav) {
        nav.classList.toggle("active");
    }
}


/* Close mobile menu after clicking a link */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        const nav = document.getElementById("navMenu");

        if (nav) {
            nav.classList.remove("active");
        }

    });

});


/* ================= SCROLL REVEAL ================= */

function revealElements() {

    const elements = document.querySelectorAll(".reveal");

    elements.forEach(element => {

        const position = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealElements);

window.addEventListener("load", revealElements);


/* ================= GALLERY LIGHTBOX ================= */

const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");


galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const image = item.querySelector("img");

        if (!image) return;

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


function closeLightbox() {

    if (!lightbox) return;

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


/* Close lightbox using Escape */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeLightbox();
    }

});


/* ================= NAVBAR EFFECT ================= */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(3, 4, 7, 0.95)";

    } else {

        navbar.style.background = "rgba(3, 4, 7, 0.75)";

    }

});


/* ================= TYPEWRITER EFFECT ================= */

const typewriterText =
    "Sometimes the coldest hearts are the ones carrying the deepest pain.";

const typewriterElement = document.querySelector(".quote");


let typeIndex = 0;


function typeWriter() {

    if (!typewriterElement) return;

    if (typeIndex < typewriterText.length) {

        typewriterElement.textContent =
            "“" + typewriterText.substring(0, typeIndex + 1) + "”";

        typeIndex++;

        setTimeout(typeWriter, 45);

    }

}


window.addEventListener("load", () => {

    setTimeout(typeWriter, 1000);

});


/* ================= FADE HERO ON SCROLL ================= */

const heroContent = document.querySelector(".hero-content");


window.addEventListener("scroll", () => {

    if (!heroContent) return;

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        const opacity =
            1 - scrollPosition / (window.innerHeight * 0.8);

        heroContent.style.opacity = Math.max(opacity, 0);

        heroContent.style.transform =
            `translateY(${scrollPosition * 0.25}px)`;

    }

});


/* ================= IMAGE LAZY LOADING ================= */

document.querySelectorAll("img").forEach(image => {

    image.loading = "lazy";

});


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "SUB^VI — A story of love, loss and healing."
);
```

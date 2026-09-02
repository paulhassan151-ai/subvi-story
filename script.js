```javascript
/* =====================================================
   SUB^VI — THE STORY
   Interactive JavaScript
===================================================== */

document.documentElement.classList.add("js-enabled");


/* ================= MOBILE MENU ================= */

function toggleMenu() {
    const nav = document.getElementById("navMenu");

    if (nav) {
        nav.classList.toggle("active");
    }
}


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

        if (position < window.innerHeight - 80) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealElements);

window.addEventListener("load", () => {
    revealElements();
});


/* ================= GALLERY LIGHTBOX ================= */

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");


galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const image = item.querySelector("img");

        if (!image || !lightbox || !lightboxImage) return;

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


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeLightbox();
    }

});


/* ================= NAVBAR ================= */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.style.background =
            "rgba(3, 4, 7, 0.95)";

    } else {

        navbar.style.background =
            "rgba(3, 4, 7, 0.75)";

    }

});


/* ================= TYPEWRITER ================= */

const typewriterElement =
    document.querySelector(".quote");

const typewriterText =
    "Sometimes the coldest hearts are the ones carrying the deepest pain.";

let typeIndex = 0;


function typeWriter() {

    if (!typewriterElement) return;

    if (typeIndex < typewriterText.length) {

        typewriterElement.textContent =
            "“" +
            typewriterText.substring(0, typeIndex + 1) +
            "”";

        typeIndex++;

        setTimeout(typeWriter, 40);

    }

}


window.addEventListener("load", () => {

    setTimeout(typeWriter, 1000);

});


/* ================= HERO FADE ================= */

const heroContent =
    document.querySelector(".hero-content");


window.addEventListener("scroll", () => {

    if (!heroContent) return;

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        const opacity =
            1 - scrollPosition /
            (window.innerHeight * 0.8);

        heroContent.style.opacity =
            Math.max(opacity, 0);

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

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* ================= LIGHTBOX BACKGROUND CLICK ================= */

if (lightbox) {

    lightbox.addEventListener("click", event => {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });

}


/* ================= CONSOLE ================= */

console.log(
    "SUB^VI — The Story is running successfully."
);
```

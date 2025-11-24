document.addEventListener("DOMContentLoaded", () => {

// MENU MOBILE
const menuBtn = document.getElementById("menuBtn");
const navList = document.getElementById("navList");

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
});

// ANIMAÇÃO DE SCROLL
const itens = document.querySelectorAll(".section, .estetica-card");

function revelar() {
    itens.forEach(el => {
        const topo = el.getBoundingClientRect().top;
        if (topo < window.innerHeight - 50) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revelar);
revelar();

/* ===== SLIDESHOW ===== */
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.classList.remove("show"));

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    if (slides.length > 0) {
        slides[slideIndex - 1].classList.add("show");
    }

    setTimeout(showSlides, 5000);

}

showSlides();

/* ===== PARTÍCULAS NO HERO ===== */
function generateParticles() {
    const container = document.querySelector(".particles");
    if (!container) return;

    for (let i = 0; i < 35; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.animationDuration = 4 + Math.random() * 4 + "s";

        const size = 3 + Math.random() * 6;
        particle.style.width = size + "px";
        particle.style.height = size + "px";

        container.appendChild(particle);
    }
}

generateParticles();

/* ===========================
      LIGHTBOX DE IMAGENS
=========================== */

// Pegar TODAS as imagens dos cards
const imagensCards = document.querySelectorAll(
    ".estetica-card img, .musica-card img, .diy-card img, .diversidade-card img"
);

console.log("IMAGENS ENCONTRADAS:", imagensCards.length);

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

// Se tiver imagens, adicionar evento
imagensCards.forEach(img => {
    img.style.cursor = "pointer";

    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

// Fecha no X
closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Fecha clicando fora
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

}); // FINAL DO DOMContentLoaded

// MENU MOBILE
const menuBtn = document.getElementById("menuBtn");
const navList = document.getElementById("navList");

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
});

// EFEITO DE FADE AO ROLAR
const sections = document.querySelectorAll(".section, .card");

const reveal = () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            sec.classList.add("show");
        }
    });
};

window.addEventListener("scroll", reveal);
reveal();
    
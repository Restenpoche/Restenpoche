// Menu mobile

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    // Change l'icône ☰ en ✖
    if (nav.classList.contains("active")) {
        menuToggle.innerHTML = "✖";
    } else {
        menuToggle.innerHTML = "☰";
    }
});

// Ferme le menu lorsqu'on clique sur un lien
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.innerHTML = "☰";
    });
});

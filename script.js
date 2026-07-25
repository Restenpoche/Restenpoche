// Défilement fluide des liens du menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
link.addEventListener("click", function (e) {
e.preventDefault();

const cible = document.querySelector(this.getAttribute("href"));

if (cible) {
cible.scrollIntoView({
behavior: "smooth"
});
}
});
});

// Apparition progressive des sections
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";
}
});
}, {
threshold: 0.15
});

sections.forEach(section => {
section.style.opacity = "0";
section.style.transform = "translateY(40px)";
section.style.transition = "all 0.8s ease";
observer.observe(section);
});
// ==========================
// MENU MOBILE COULISSANT
// ==========================

const menu = document.getElementById("menu");
const bouton = document.getElementById("menu-toggle");

// Création du fond sombre
const overlay = document.createElement("div");
overlay.id = "overlay";
document.body.appendChild(overlay);

overlay.style.cssText = position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,.5); display:none; z-index:1500;;

function fermerMenu() {
menu.classList.remove("active");
bouton.innerHTML = "☰";
overlay.style.display = "none";
}

bouton.addEventListener("click", () => {
menu.classList.toggle("active");

if (menu.classList.contains("active")) {
bouton.innerHTML = "✕";
overlay.style.display = "block";
} else {
fermerMenu();
}
});

overlay.addEventListener("click", fermerMenu);

document.querySelectorAll("#menu a").forEach(lien => {
lien.addEventListener("click", fermerMenu);
});

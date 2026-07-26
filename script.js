// Menu mobile
const bouton = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (bouton && menu) {
    bouton.addEventListener("click", function () {
        menu.classList.toggle("active");
        bouton.textContent = menu.classList.contains("active") ? "✕" : "☰";
    });

    document.querySelectorAll("#menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            bouton.textContent = "☰";
        });
    });
}

// Défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const cible = document.querySelector(this.getAttribute("href"));
        if (cible) {
            cible.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Apparition des sections
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});

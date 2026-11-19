const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    
    if (document.body.classList.contains("oscuro")) {
        btnTema.textContent = "☀️";
    } else {
        btnTema.textContent = "🌙";
    }
});

window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
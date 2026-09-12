// Navbar berubah saat halaman di-scroll

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(10, 10, 10, 0.97)";
    } else {
        navbar.style.background = "rgba(10, 10, 10, 0.9)";
    }

});
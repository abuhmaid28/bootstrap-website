// change navbar color
AOS.init({
  once: true,
});

function userScroll() {
  const navbar = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("bg-half");
    } else {
      navbar.classList.remove("bg-half");
    }
  });
}
document.addEventListener("DOMContentLoaded", userScroll);

document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const ancorLinks = document.querySelectorAll(".nav-link");
  ancorLinks.forEach((ancor) => {
    ancor.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    });
  });
});

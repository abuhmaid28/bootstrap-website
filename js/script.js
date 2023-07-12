// change navbar color
AOS.init();

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

// loading animation
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

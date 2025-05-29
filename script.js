const siteHeader = document.querySelector(".site-header");
const navToggleBtn = document.querySelector(".nav-toggle-button");
const mainNav = document.querySelector(".main-nav");
const tabButton = document.querySelectorAll(".tab-button");

document.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    siteHeader.classList.toggle("scroll");
  }
});

navToggleBtn.addEventListener("click", () => {
  navToggleBtn.classList.toggle("open");
  siteHeader.classList.toggle("nav-open");
});

tabButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButton.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

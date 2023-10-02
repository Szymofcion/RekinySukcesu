const nav = document.querySelector(".nav");
const burgerBtn = document.querySelector(".nav__burger");
const allNavLink = document.querySelectorAll(".nav__item");

const handleNav = () => {
  allNavLink.forEach((item) => {
    item.classList.toggle("show");
  });
};
burgerBtn.addEventListener("click", handleNav);

const nav = document.querySelector(".nav");
const burgerBtn = document.querySelector(".nav__burger");
const allNavLink = document.querySelectorAll(".nav__item");

const handleNav = () => {
  console.log("e");
  burgerBtn.classList.toggle("active");
  allNavLink.forEach((item) => {
    item.classList.toggle("show");
  });
};
burgerBtn.addEventListener("click", handleNav);

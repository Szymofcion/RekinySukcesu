const nav = document.querySelector(".nav");
const burgerBtn = document.querySelector(".nav__burger");
const allNavLink = document.querySelectorAll(".nav__item");

const handleNav = () => {
  console.log("e");
  burgerBtn.classList.toggle("active");
  allNavLink.forEach((item) => {
    console.log(item);

    item.classList.toggle("show");
  });
};
burgerBtn.addEventListener("click", handleNav);

const imageBoxes = document.querySelectorAll(".section2__box");

for (let i = 1; i <= 8; i++) {
  const imageUrl = `./assets/section2/image${i}.png`;

  imageBoxes[i - 1].style.backgroundImage = `url('${imageUrl}')`;
}

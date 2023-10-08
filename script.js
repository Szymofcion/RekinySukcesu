/// dropdown naw + show nav on mobile

const nav = document.querySelector(".nav");
const burgerBtn = document.querySelector(".nav__burger");
const allNavLink = document.querySelectorAll(".nav__item");

const handleNav = () => {
  burgerBtn.classList.toggle("active");
  allNavLink.forEach((item) => {
    item.classList.toggle("show");
    item.classList.toggle("nav-items-animation");
  });
};

const handleNavItemsAnimation = () => {
  let delayTime = 0;
  allNavLink.forEach((item) => {
    item.style.animationDelay = "." + (delayTime + 2) + "s";
    delayTime++;
  });
};

handleNavItemsAnimation ()
burgerBtn.addEventListener("click", handleNav);

/// add position fixed on nav when user scroll down

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  let isNavbarFixed = false;

  const handleScroll = () => {
    const scrollPos = window.scrollY;

    if (scrollPos > 100 && !isNavbarFixed) {
      navbar.classList.add("fixed"); // Dodaj klasę fixed, gdy użytkownik zjedzie trochę niżej
      isNavbarFixed = true;
    } else if (scrollPos <= 100 && isNavbarFixed) {
      navbar.classList.remove("fixed"); // Usuń klasę fixed, gdy użytkownik wjedzie na samą górę strony
      isNavbarFixed = false;
    }
  };

  window.addEventListener("scroll", handleScroll);
});

/// scrollSpy

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const navLinks = navbar.querySelectorAll(".nav__item");
  const sections = document.querySelectorAll("section");

  const changeNavOnScroll = () => {
    let fromTop = window.scrollY + navbar.offsetHeight + 1;

    sections.forEach((section) => {
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (section.id === link.getAttribute("href").substring(1)) {
            link.classList.add("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", changeNavOnScroll);
});

/// render image on section 2

const imageBoxes = document.querySelectorAll(".section2__box");

for (let i = 1; i <= 8; i++) {
  const imageUrl = `./assets/section2/image${i}.png`;

  imageBoxes[i - 1].style.backgroundImage = `url('${imageUrl}')`;
}

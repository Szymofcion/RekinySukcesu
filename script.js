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

handleNavItemsAnimation();
burgerBtn.addEventListener("click", handleNav);

/// add position fixed on nav when user scroll down

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  let isNavbarFixed = false;

  const handleScroll = () => {
    const scrollPos = window.scrollY;

    if (scrollPos > 50 && !isNavbarFixed) {
      navbar.classList.add("fixed");
      isNavbarFixed = true;
    } else if (scrollPos <= 50 && isNavbarFixed) {
      navbar.classList.remove("fixed");
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

/// animation section 2

const section2 = document.querySelector(".section2");

window.addEventListener("scroll", () => {
  const section2Top = section2.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (section2Top < windowHeight * 0.8) {
    section2.classList.add("visible");
  }
});

// animate counting number section 3

const startCounters = () => {
  const counters = document.querySelectorAll(".count");

  counters.forEach((counter) => {
    const targetCount = +counter.getAttribute("data-count");
    let currentCount = 0;
    const increment = targetCount / 170;

    const updateCount = () => {
      if (currentCount < targetCount) {
        currentCount += increment;
        counter.innerText = Math.ceil(currentCount);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = targetCount;
      }
    };

    updateCount();
  });
};

const checkVisible = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

const handleScroll = () => {
  const counters = document.querySelectorAll(".count");

  counters.forEach((counter) => {
    if (checkVisible(counter) && counter.innerText === "0") {
      startCounters();
    }
  });
};

window.addEventListener("scroll", handleScroll);

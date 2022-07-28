const heroSection = document.querySelector(".section-hero");

// ========================================
// creating a responsive navbar component
// ========================================

const mobile_nav = document.querySelector(".mobile-navbar-btns");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});

const hider = document.querySelector(".hide")
const hider2 = document.querySelector(".hide2")
const hider3 = document.querySelector(".hide3")
const hider4 = document.querySelector(".hide4")
const hider5 = document.querySelector(".hide5")
const btntochange = document.querySelector(".shobtn")
const hidethisbtn = document.querySelector(".hidebtn")

btntochange.addEventListener("click", () => {
  hider.classList.add("showthis")
  hider2.classList.add("showthis")
  hider3.classList.add("showthis")
  hider4.classList.add("showthis")  
  hider5.classList.add("showthis")  
  hider.classList.remove("hide")
  hider2.classList.remove("hide2")
  hider3.classList.remove("hide3")
  hider4.classList.remove("hide4")
  hider5.classList.remove("hide5")
})
hidethisbtn.addEventListener("click", () => {
  hider.classList.remove("showthis")
  hider2.classList.remove("showthis")
  hider3.classList.remove("showthis")
  hider4.classList.remove("showthis")
  hider5.classList.remove("showthis")
  hider.classList.add("hide")
  hider2.classList.add("hide2")
  hider3.classList.add("hide3")
  hider4.classList.add("hide4")
  hider5.classList.add("hide5")
})
// ========================================
// creating a sticky responsive navbar component
// ========================================

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);
    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
  }
);

observer.observe(heroSection);





// swiper js code

new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const myJsmedia = (widthSize) => {
  if (widthSize.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  } else {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  }
};

const widthSize = window.matchMedia("(max-width: 780px)");
// Call listener function at run time
myJsmedia(widthSize);
// Attach listener function on state changes
widthSize.addEventListener("change", myJsmedia);

// scrooll to top button

const footerElem = document.querySelector(".section-footer");

const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-style");

scroollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scroollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};

scroollElement.addEventListener("click", scrollTop);

// smooth scrolling effects

const portfolioSec = document.querySelector(".section-portfolio");
const contactSec = document.querySelector(".section-contact");

document.querySelector(".portfolio-link").addEventListener("click", () => {
  portfolioSec.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".hireme-btn").addEventListener("click", (e) => {
  e.preventDefault();
  contactSec.scrollIntoView({ behavior: "smooth" });
});

const workSection = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    // console.log(entry);

    // if (entry.isIntersecting == false)
    if (!entry.isIntersecting) return;

    // animate number counter

    const counterNum = document.querySelectorAll(".counter-numbers");

    const speed = 200;

    counterNum.forEach((curElem) => {
      const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
        // console.log(targetNumber);
        const initialNum = parseInt(curElem.innerText);
        // console.log(initialNum);

        const incrementNumber = Math.trunc(targetNumber / speed);
        // console.log(incrementNumber);

        if (initialNum < targetNumber) {
          curElem.innerText = `${initialNum + incrementNumber}+`;
          setTimeout(updateNumber, 10);
        }
      };

      updateNumber();
    });

    observer.unobserve(workSection);
  },
  {
    root: null,
    threshold: 0,
  }
);

workObserver.observe(workSection);

console.clear();
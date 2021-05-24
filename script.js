"use strict";

// window.addEventListener("resize", () => {
//   console.log("💩");
//   if (window.innerWidth < 600) {
//     navList.classList.remove("display-flex");
//     navList.classList.add("display-none");
//   } else {
//     navList.classList.remove("display-none");
//     navList.classList.add("display-flex");
//   }
// });

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-link-wrapper");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  if (navList.classList.contains("hide-nav")) {
    navList.classList.remove("hide-nav");
    navList.classList.add("show-nav");
  } else {
    navList.classList.remove("show-nav");
    navList.classList.add("hide-nav");
  }
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navList.classList.remove("show-nav");
    navList.classList.add("hide-nav");
  });
});

const contactItems = document.querySelectorAll(".contact-item");

contactItems.forEach((contactItem) => {
  contactItem.addEventListener("click", (event) => {
    const contactChildren = contactItem.children;
    const link = contactChildren[1].href;
    const target = contactChildren[1].target;
    console.log(link, target);
    if (!target) {
      window.open(link, "_self");
    } else {
      window.open(link, target);
    }
  });

  contactItem.addEventListener("mouseenter", (event) => {
    const contactChildren = contactItem.children;
    contactChildren[0].style.color = "rgb(64, 139, 243)";
    contactChildren[1].style.color = "rgb(64, 139, 243)";
  });

  contactItem.addEventListener("mouseleave", (event) => {
    const contactChildren = contactItem.children;
    contactChildren[0].style.color = "rgb(10, 48, 99)";
    contactChildren[1].style.color = "rgb(10, 48, 99)";
  });
});

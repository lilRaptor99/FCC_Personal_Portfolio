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

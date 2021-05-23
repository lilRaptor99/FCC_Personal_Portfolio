"use strict";

window.addEventListener("resize", () => {
  console.log("💩");
  if (window.innerWidth < 600) {
    navList.classList.remove("display-flex");
    navList.classList.add("display-none");
  } else {
    navList.classList.remove("display-none");
    navList.classList.add("display-flex");
  }
});

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav li a");

hamburger.addEventListener("click", () => {
  if (navList.classList.contains("display-none")) {
    navList.classList.remove("display-none");
    navList.classList.add("display-flex");
  } else {
    navList.classList.remove("display-flex");
    navList.classList.add("display-none");
  }
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navList.classList.remove("display-flex");
    navList.classList.add("display-none");
  });
});

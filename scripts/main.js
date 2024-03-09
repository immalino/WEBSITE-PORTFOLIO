// Toggle & Responsive Navigation
const burger = document.querySelector(".burger");
const navList = document.querySelector("nav");
const navLinks = navList.querySelectorAll("a");

const toggleNav = () => {
  navList.classList.toggle("nav-active");
  burger.classList.toggle("toggle-burger");
};

const closeNav = () => {
  navList.classList.remove("nav-active");
  burger.classList.remove("toggle-burger");
};

const navSlide = () => {
  burger.addEventListener("click", toggleNav);
  navLinks.forEach((link) => {
    link.addEventListener("click", closeNav);
  });
};

navSlide();


// Clear form before unloading

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// Load the page

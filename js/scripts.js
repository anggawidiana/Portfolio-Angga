const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "AGUNG ANGGA";
  }, 0);
  setTimeout(() => {
    text.textContent = "STUDENT";
  }, 4000);
};

textLoad();
setInterval(textLoad, 8000);

// navbar right start
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar-sec");
  const aboutSection = document.getElementById("about-me");

  // Check if the window width is 768px or above
  if (window.innerWidth >= 768) {
    const aboutSectionTop = aboutSection.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    if (scrollPosition >= aboutSectionTop) {
      navbar.classList.add("left");
    } else {
      navbar.classList.remove("left");
    }
  } else {
    // Ensure the class is removed if the window width is below 768px
    navbar.classList.remove("left");
  }
});

// Handle window resize events to ensure the class is updated appropriately
window.addEventListener("resize", () => {
  const navbar = document.getElementById("navbar-sec");

  // If the window width is below 768px, remove the "left" class
  if (window.innerWidth < 768) {
    navbar.classList.remove("left");
  }
});

// navbar right end

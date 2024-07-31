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

  const aboutSectionTop = aboutSection.offsetTop;
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  if (scrollPosition >= aboutSectionTop) {
    navbar.classList.add("left");
  } else {
    navbar.classList.remove("left");
  }
});
// navbar right end

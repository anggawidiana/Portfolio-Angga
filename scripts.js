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

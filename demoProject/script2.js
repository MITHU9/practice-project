window.addEventListener("scroll", function () {
  let nav = document.querySelector(".header");
  if (window.pageYOffset >= 50) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

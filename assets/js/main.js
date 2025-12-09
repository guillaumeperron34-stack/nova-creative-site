const burger = document.querySelector(".header-burger");
const nav = document.querySelector(".header-nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("is-active");
  nav.classList.toggle("is-open");

  const isExpanded = burger.classList.contains("is-active");
  burger.setAttribute("aria-expended", isExpanded);
});

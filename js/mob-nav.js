(() => {
  const refs = {
    openMenuBtn: document.querySelector(".mob-nav-open"),
    closeMenuBtn: document.querySelector(".mob-nav-close"),
    menu: document.querySelector(".mob-nav"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();
(() => {
  const menuRef = document.querySelector('[data-menu]');
  const openMenuBtn = document.querySelector('[data-menu-open]');
  const closeMenuBtn = document.querySelector('[data-menu-close]');
  const body = document.body;

  if (menuRef && openMenuBtn && closeMenuBtn) {
    const toggleMenu = () => {
      menuRef.classList.toggle('is-open');
      body.classList.toggle('is-menu-open');
    };

    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
  }
})();
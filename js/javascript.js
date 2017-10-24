  var navMain = document.querySelector('.main-nav__list');
  var logoWrap = document.querySelector('.main-nav__logo-wrapper');
  var close = document.querySelector('.main-nav__toggle-close');
  var open = document.querySelector('.main-nav__toggle-open');

  navMain.classList.remove('main-nav__list--nojs');
  logoWrap.classList.remove('main-nav__logo-wrapper--nojs');

  open.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav__list--close') && logoWrap.classList.contains('main-nav__logo-wrapper--close')) {
      navMain.classList.remove('main-nav__list--close');
      navMain.classList.add('main-nav__list--open');
      logoWrap.classList.remove('main-nav__logo-wrapper--close');
      logoWrap.classList.add('main-nav__logo-wrapper--open');
    }
  });

  close.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav__list--open') && logoWrap.classList.contains('main-nav__logo-wrapper--open')) {
      navMain.classList.add('main-nav__list--close');
      navMain.classList.remove('main-nav__list--open');
      logoWrap.classList.add('main-nav__logo-wrapper--close');
      logoWrap.classList.remove('main-nav__logo-wrapper--open');
    }
  });
  
const menuWrapper = document.querySelector(".header-menu-wrapper"); // присваиваем переменные
const menuScript = document.querySelector(".header-menu-wrapper--no-js");
const menuClose = document.querySelector(".header-menu-wrapper--close");
const menuOpen = document.querySelector(".header-menu-wrapper--open");
const menuButton = document.querySelector(".main-nav__toggle");

menuScript.classList.toggle("header-menu-wrapper--close"); // добавляем класс close, убираем класс no-js
menuScript.classList.remove("header-menu-wrapper--no-js");

menuButton.addEventListener("click", function (evt) {  //добавляем отслеживание собятия по константе - клик
    menuWrapper.classList.toggle("header-menu-wrapper--open");
    menuWrapper.classList.toggle("header-menu-wrapper--close");
  }
);

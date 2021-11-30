
const nav = document.getElementById("nav_js");
const header = document.getElementById("header_js");
const container = document.getElementById("container_js");
const icon_menu = document.getElementById("icon_menu_js");

let menu_on = false;
icon_menu.addEventListener('click', () => {
  if (menu_on == false) {
    nav.classList.add('move');
    nav.style.zIndex = '2';
    container.style.width = 'calc(100% - 240px)';
    container.classList.add('move');
    menu_on = true;
  } else {
    nav.style.zIndex = 'unset';
    nav.classList.remove('move');
    container.style.width = '100%';
    container.classList.remove('move');
    menu_on = false;
  }
})
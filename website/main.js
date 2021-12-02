//~ Función para abrir la barra de menú
const btn_menu = document.getElementById('btn_menuJS');
const nav = document.getElementById('navJS');
const btn_legal_info = document.getElementById('btn_legal_infoJS');
let menu_on = false;
function abrirMenu() {
  if (menu_on == false) {
    nav.style.width = '230px';
    btn_legal_info.style.transform = 'scaleY(0)';
    menu_on = true;
  } else {
    nav.style.width = '72px';
    btn_legal_info.style.transform = 'scaleY(1)';
    menu_on = false;
  }
}
btn_menu.addEventListener('click', abrirMenu);
btn_legal_info.addEventListener('click', abrirMenu);


//~ Función para abrir canasta de compras
const btn_basket = document.getElementById('btn_basketJS');
const content = document.getElementById('contentJS');
const basket = document.getElementById('basketJS');
let basket_on = false;
function abrirCanasta() {
  if (basket_on == false) {
    content.classList.add('content--move');
    basket.classList.add('basket--move');
    basket_on = true;
  } else {
    content.classList.remove('content--move');
    basket.classList.remove('basket--move');
    basket_on = false;
  }
}
btn_basket.addEventListener('click', abrirCanasta);
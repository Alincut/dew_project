
const menu_button = document.getElementById('menu_button_js');
const menu = document.getElementById('menu_js');
const main = document.getElementById('main_js');

menu_button.addEventListener('click', (e) => {
  menu.classList.add('show');
  console.log(e);
});

main.addEventListener('click', (e) => {
  if (e.target != menu) menu.classList.remove('show');;
})
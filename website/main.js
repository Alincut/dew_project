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




const btn_bakery_content = document.getElementById('btn_bakery_contentJS');
const box_products = document.getElementById('box_productsJS');
const figure = document.getElementById('figureJS');
const txt_local = document.getElementById('txt_localJS');
const box_local = document.getElementById('box_localJS');

let box_products_on = false;
function abrirContenidoCategoria() {
  if (box_products_on == false) {
    box_products.style.zIndex = '2';
    box_products.style.visibility = 'visible';
    figure.style.visibility = 'hidden';
    txt_local.style.visibility = 'hidden';
    box_local.style.visibility = 'hidden';
    box_products_on = true;
  }
}
btn_bakery_content.addEventListener('click', abrirContenidoCategoria);




const btn_get = document.getElementById('btn_getJS');
const basket_items = document.getElementById('basket_itemsJS');
const cantidad = document.getElementById('cantidad');
const subtotal = document.getElementById('subtotal');
const pagar = document.getElementById('pagar');
let can = 0;
let sub = 0;
function agregarEnCanasta() {
  can++
  sub+=3.5;
  let li = document.createElement('li');
  let img = document.createElement('img');
  let span_sum = document.createElement('span');
  let span_minus = document.createElement('span');
  let span_delete = document.createElement('span');
  let span_quantity = document.createElement('span');
  let span_name = document.createElement('span');
  let span_spec = document.createElement('span');
  let span_small_price = document.createElement('span');
  let span_price = document.createElement('span');

  img.src = 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  span_sum.innerHTML = '+';
  span_minus.innerHTML ='-';
  span_delete.innerHTML = 'X';
  span_quantity.innerHTML = '1';
  span_name.innerHTML = 'PACK 6 PAN FRANCES';
  span_spec.innerHTML = 'Bread - Paquete 6 und';
  span_small_price.innerHTML = 'S/. 3.50';
  span_price.innerHTML = 'S/. 3.50';
  cantidad.innerHTML = '' + can;
  subtotal.innerHTML = '' + sub;

  img.classList.add('photo');
  span_sum.classList.add('sum');
  span_minus.classList.add('minus');
  span_delete.classList.add('delete');
  span_quantity.classList.add('quantity');
  span_name.classList.add('name');
  span_spec.classList.add('spec');
  span_small_price.classList.add('small_price');
  span_price.classList.add('price');

  li.appendChild(img);
  li.appendChild(span_sum);
  li.appendChild(span_minus);
  li.appendChild(span_delete);
  li.appendChild(span_quantity);
  li.appendChild(span_name);
  li.appendChild(span_spec);
  li.appendChild(span_small_price);
  li.appendChild(span_price);

  basket_items.appendChild(li);
}

btn_get.addEventListener('click', agregarEnCanasta);
pagar.addEventListener('click', () => {
  swal(`Pedido realizado`, 'En breve llegará tu repartidor', 'success');
});
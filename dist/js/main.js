const cartInfo = document.getElementById("cart-info");
const menucart = document.getElementById("cart-info-btn");
const closeCart = document.getElementById("close-cart");
const mainHeader = document.getElementById('main-header');


function close_cart(){
  cartInfo.classList.remove("right-0");
  cartInfo.classList.add("right-[-150%]");
  deleteBgOverlay();
}

function addBgOverlay(){
  const bg_overlay = document.createElement('div');
  bg_overlay.className = "fixed top-0 left-0 right-0 bottom-0 bg-[#00000080] cursor-pointer z-40";
  bg_overlay.id = 'bg_overlay';
  document.body.prepend(bg_overlay);
  bg_overlay.addEventListener('click', close_cart);
}

function deleteBgOverlay(){
  document.getElementById('bg_overlay').remove();
}

menucart.addEventListener("click", () => {
  cartInfo.classList.remove("right-[-150%]");
  cartInfo.classList.add("right-0");
  addBgOverlay();
});

closeCart.addEventListener("click", close_cart);

window.addEventListener('scroll', () => {
  if(window.scrollY > 40){
    mainHeader.className = "fixed top-0 left-0 right-0 bg-blue-950 z-30";
  }else{
    mainHeader.className = "";
  }
});
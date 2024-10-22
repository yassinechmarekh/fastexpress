const cartInfo = document.getElementById("cart-info");
const menucart = document.getElementById("cart-info-btn");
const closeCart = document.getElementById("close-cart");
const mainHeader = document.getElementById("main-header");
const faq = document.querySelectorAll("#faq-list li");
const btnBackToTop = document.getElementById('back-to-top');

function close_cart() {
  cartInfo.classList.remove("right-0");
  cartInfo.classList.add("right-[-150%]");
  deleteBgOverlay();
}

function addBgOverlay() {
  const bg_overlay = document.createElement("div");
  bg_overlay.className =
    "fixed top-0 left-0 right-0 bottom-0 bg-[#00000080] cursor-pointer z-40";
  bg_overlay.id = "bg_overlay";
  document.body.prepend(bg_overlay);
  bg_overlay.addEventListener("click", close_cart);
}

function deleteBgOverlay() {
  document.getElementById("bg_overlay").remove();
}

menucart.addEventListener("click", () => {
  cartInfo.classList.remove("right-[-150%]");
  cartInfo.classList.add("right-0");
  addBgOverlay();
});

closeCart.addEventListener("click", close_cart);

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    mainHeader.className = "fixed top-0 left-0 right-0 bg-blue-950 z-30";
  } else {
    mainHeader.className = "";
  }
});


faq.forEach((item) => {
  item.addEventListener("click", (eo) => {
    const isActive = item.classList.contains("active");
    const title = item.querySelector("div");
    const parag = item.querySelector("p");
    const h3 = title.querySelector("h3");
    const plus = title.querySelector(".plus");
    const minus = title.querySelector(".minus");

    if (isActive) {
      item.classList.remove("active");

      title.classList.remove("bg-red-500");
      title.classList.add("bg-white");
      h3.classList.remove("text-white");
      h3.classList.add("text-blue-950");
      plus.classList.remove("hidden");
      minus.classList.add("hidden");
      parag.classList.remove("scale-y-1");
      parag.classList.add("hidden");
      parag.classList.add("scale-y-0");
    } else {
      item.classList.add("active");
    
      title.classList.remove("bg-white");
      title.classList.add("bg-red-500");
      h3.classList.remove("text-blue-950");
      h3.classList.add("text-white");
      plus.classList.add("hidden");
      minus.classList.remove("hidden");
      parag.classList.remove("hidden");
      parag.classList.remove("scale-y-0");
      parag.classList.add("scale-y-1");
    }

  });
});


btnBackToTop.addEventListener('click', (eo) => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll',(eo) => {
  if(window.scrollY === 0){
    btnBackToTop.classList.add("hidden");
  }else{
    btnBackToTop.classList.remove("hidden");
  }
});


function activateMenuItem(menuItemId) {
  document.querySelectorAll('#menu li').forEach(function(li) {
    li.classList.remove('text-red-500');
  });
  document.getElementById(menuItemId).classList.add('text-red-500');
}


window.addEventListener('scroll', (eo) => {
  const sections = document.querySelectorAll('section');
  let currentSection = '';

  sections.forEach(function(section) {
    if (window.scrollY >= section.offsetTop - 300) {
      currentSection = section.id;
    }
  });

  if (currentSection) {
    activateMenuItem(`menu-${currentSection}`);
  }
});

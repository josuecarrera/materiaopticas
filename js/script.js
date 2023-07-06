document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.querySelector(".menu").classList.toggle("mostrar_menu");
    
}

window.onscroll = function () {
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.getElementById("icon_heart");
    var elemento2 = document.getElementById("icon_fire");
    elemento1.style.bottom = posicion * 0.1 + "px";
    elemento2.style.top = posicion * 0.1 + "px";
}

window.onscroll = function() {
    showScrollTopButton();
  };
  
  function showScrollTopButton() {
    var button = document.getElementById("scrollTopButton");
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
      button.classList.add("show");
    } else {
      button.classList.remove("show");
    }
  }
  
  function scrollToTop() {
    document.documentElement.scrollTop = 0; // Para navegadores que soportan scrollTop
    document.body.scrollTop = 0; // Para navegadores que no soportan scrollTop
  }
  
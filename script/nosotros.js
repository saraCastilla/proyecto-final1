

document.addEventListener("DOMContentLoaded", function () {






    window.addEventListener("scroll",function () {
        let animacion = document.getElementById("animado");
        let animacionSegunda = document.getElementById("animadoSegundo");
        let posicionObjt = animacion.getBoundingClientRect().top;
         console.log(posicionObjt);
         let posicionObjtDos = animacionSegunda.getBoundingClientRect().top;
         console.log(posicionObjtDos);
         let tamañoDePantalla = window.innerHeight* 0.9;
         if (posicionObjt < tamañoDePantalla) {
             animacion.style.animation = "mover 2.3s ease-out"    
             
         }
         if (posicionObjtDos < tamañoDePantalla) {
            animacionSegunda.style.animation = "mover 2s ease-out"    
            
        }
         
     })


     let menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  menu.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);

    })
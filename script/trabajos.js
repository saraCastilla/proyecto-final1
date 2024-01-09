document.addEventListener("DOMContentLoaded", function () {


    let grande = document.querySelector(".grande")
    let punto = document.querySelectorAll(".punto")
    
    
    
    punto.forEach((cadaPunto , i) => {
        punto[i].addEventListener("click",()  =>{
            let posicion = i 
            let operacion = posicion * - 33.3
    
            grande.style.transform = `translateY(${operacion}%)`
    
            punto.forEach((cadaPunto , i) => {
                punto[i].classList.remove( "activo")
    
            })
            punto[i].classList.add("activo")
        })
        
        
    });
    
    
     let cards = [
         {
             img: "../img/galeria/3.jpg",
             h3: "SCHWEEPES"
         },{
             img: "../img/galeria/4.jpg",
             h3: "MASTER CARD"
         },{
             img: "../img/galeria/5.jpg",
             h3: "INVERSIS"
         },{
            img: "../img/galeria/5.jpg",
             h3: "INVERSIS"
         },{
            img: "../img/galeria/5.jpg",
            h3: "INVERSIS"
         },{
            img: "../img/galeria/3.jpg",
             h3: "SCHWEEPES"
         }
     ]
      let div = document.getElementById("galeria")
    
    
    
      const card = cards.map((card,index) =>{
         return(`<div class="trabajo__card">
         <div class="cardA__div">
             <img src="${card.img}" alt="" class="trabajo__img">
         </div>
         <div class="trabajo__carab">
             <h3 class="trabajo__h3">${card.h3}</h3>
             <a href="#openModal" class="trabajo__enlace">ver más</a>      
    
        </div>
     </div>`)
        
    
    
    
    
      });
      div.innerHTML = card.join(" ")


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
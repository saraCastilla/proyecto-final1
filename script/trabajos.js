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

    let fotos = document.querySelector(".fotos")
let puntoDos = document.querySelectorAll(".puntoDos")

puntoDos.forEach((cadaPuntoDos , i) => {
  puntoDos[i].addEventListener("click",()  =>{
      let posicion = i 
      let operacion = posicion * - 33.3

      fotos.style.transform = `translateY(${operacion}%)`

      puntoDos.forEach((cadaPuntoDos , i) => {
          puntoDos[i].classList.remove( "activo")

      })
      puntoDos[i].classList.add("activo")
  })
  
  
});
let fotosDos = document.querySelector(".fotos-dos")
let puntoTres = document.querySelectorAll(".punto-tres")

puntoTres.forEach((cadaPuntoDos , i) => {
  puntoTres[i].addEventListener("click",()  =>{
      let posicion = i 
      let operacion = posicion * - 33.3

      fotosDos.style.transform = `translateY(${operacion}%)`

      puntoTres.forEach((cadaPuntoTres , i) => {
          puntoTres[i].classList.remove( "activo")

      })
      puntoTres[i].classList.add("activo")
  })
  
  
});

let fotostres = document.querySelector(".fotos-tres")
let puntoCuatro = document.querySelectorAll(".punto-cuatro")

puntoCuatro.forEach((cadaPuntoCuatro , i) => {
  puntoCuatro[i].addEventListener("click",()  =>{
      let posicion = i 
      let operacion = posicion * - 33.3

      fotostres.style.transform = `translateY(${operacion}%)`

      puntoCuatro.forEach((cadaPuntoCuatro , i) => {
          puntoCuatro[i].classList.remove( "activo")

      })
      puntoCuatro[i].classList.add("activo")
  })
  
  
});
let fotosCuatro = document.querySelector(".fotos-cuatro")
let puntoCinco = document.querySelectorAll(".punto-cinco")

puntoCinco.forEach((cadaPuntoCinco , i) => {
  puntoCinco[i].addEventListener("click",()  =>{
      let posicion = i 
      let operacion = posicion * - 33.3

      fotosCuatro.style.transform = `translateY(${operacion}%)`

      puntoCinco.forEach((cadaPuntoCinco , i) => {
          puntoCinco[i].classList.remove( "activo")

      })
      puntoCinco[i].classList.add("activo")
  })
  
  
});
let fotosCinco = document.querySelector(".fotos-cinco")
let puntoSeis = document.querySelectorAll(".punto-seis")

puntoSeis.forEach((cadaPuntoSeis , i) => {
  puntoSeis[i].addEventListener("click",()  =>{
      let posicion = i 
      let operacion = posicion * - 33.3

      fotosCinco.style.transform = `translateY(${operacion}%)`

      puntoSeis.forEach((cadaPuntoSeis , i) => {
          puntoSeis[i].classList.remove( "activo")

      })
      puntoSeis[i].classList.add("activo")
  })
  
  
});
    
    
     // convirtiendo las card en una array de objetos para poder hacer un map más tarde
let cards = [
    {
        img: "https://live.staticflickr.com/65535/53465829161_ea3cc973c9_n.jpg",
        h3: "SICOL",
        modal:"#openModal"
    },{
        img: "https://live.staticflickr.com/65535/53465981963_59eb8af58d_n.jpg",
        h3: "MERCEDES",
        modal:"#openModal1"
    },{
        img: "https://live.staticflickr.com/65535/53466174229_03e4abce25_n.jpg",
        h3: "MASTER CARD",
        modal:"#openModal2"
    },{
        img: "https://live.staticflickr.com/65535/53466289865_4623d9c3ae_n.jpg",
        h3: "JUNTA ANDALUCIA",
        modal:"#openModal3"
    },{
        img: "https://live.staticflickr.com/65535/53466017528_a75710b93d_n.jpg",
        h3: "INVERSIS",
        modal:"#openModal4"
    },{
        img: "https://live.staticflickr.com/65535/53466027838_3f7a347204_n.jpg",
        h3: "TRANS MEDITERRANEA",
        modal:"#openModal5"
    },
]


// en este bloque estoy llamando al elemento galeria para insertar las fotos y los h3 a traves de un map
 let div = document.getElementById("galeria")



 const card = cards.map((card,index) =>{
    return(`<div class="proyectos__card">
    <div class="card__div">
        <img src="${card.img}" alt="" class="galeria__img">
    </div>
    <div class="proyectos__carab">
        <h3 class="carab__h3">${card.h3}</h3>
        <a href="${card.modal}" class="carab__enlace">ver más</a>      

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
document.addEventListener("DOMContentLoaded", function () {
//   hago este evento al documento para que se carge primero la pg antes de lanzar el resto de codigo de javascript





window.addEventListener("scroll",function () {   //este es un evento scroll que lanza una div con id = animado desde laizquierda de la pantalla a su posicion final
    let animacion = document.getElementById("animado");
   
    let posicionObjt = animacion.getBoundingClientRect().top;
     console.log(posicionObjt);
     let tamañoDePantalla = window.innerHeight *0.8;  // con este bloque divido la pantalla en cifras numericas cada vez más bajas a madedida que me desplazo con el scroll hacia abajo
     if (posicionObjt < tamañoDePantalla) {
         animacion.style.animation = "mover 2s ease-out " 
         
       // si la posicion del objeto es menor que el tamaño de la pantalla antes calculada, se lanza la animacion  
         
     }
 })

  // este bloque corresponde a la animación del objeto svg que he dividido en paht para poderlo animar
 let rectUno= document.getElementById("1")
 let rectDos= document.getElementById("2")
 let rectTres= document.getElementById("3")
 let rectCuatro= document.getElementById("4")
 let rectCinco= document.getElementById("5")
 let rectSeis= document.getElementById("6")
 let rectSiete= document.getElementById("7")
 let rectOcho= document.getElementById("8")
 let rectNueve= document.getElementById("9")
 let rectDiez= document.getElementById("10")
    // aqui ya he llamado a todos los paht por su id

 function intervalo() {
   
  // esta funcion intervalo no es más que un setInterval de 2 segundos y medio de duración donde cada elemento va apareciendo uno a uno cada medio segundo
  //que un setTimeout de medio segundo por elemento

    setInterval(() => {


        setTimeout(() => {
           rectUno.style.opacity =.8

        },0)
        setTimeout(() => {
            rectDos.style.opacity =.8

        }, 500)


        setTimeout(() => {

            rectTres.style.opacity =.8

        }, 1000)

        setTimeout(() => {
            rectCuatro.style.opacity =.8
 
         },1500)

         setTimeout(() => {

            rectCinco.style.opacity =.8

        }, 2000)

        setTimeout(() => {

            rectSeis.style.opacity =.8

        }, 2500)

        setTimeout(() => {

            rectSiete.style.opacity =.8

        }, 3000)

        setTimeout(() => {

            rectOcho.style.opacity =.8

        }, 3500)

        setTimeout(() => {

            rectNueve.style.opacity =.8

        }, 4000)

        setTimeout(() => {

            rectDiez.style.opacity =.8

        }, 4500)
        


    }, 2500) // debe ser un numero mayor

}
intervalo()  //aqui llamo a la funcion

// en este bloque vuelvo a proceder de la misma forma cambiando los tiempos y con los bloques de textos que aparecen en la landing pg
let we= document.getElementById("we")
let estamos= document.getElementById("estamos")
let ahora= document.getElementById("ahora")
let titulo= document.getElementById("titulo")



function aparicion() {

    setInterval(() => {

        setTimeout(() => {
           we.style.opacity =0

        },0)
        setTimeout(() => {
            estamos.style.opacity =0
        

        }, 1500)
        setTimeout(() => {

            ahora.style.opacity =0

        }, 3000)
        setTimeout(() => {

            titulo.style.opacity =1

        }, 4500)


       
    }, 1500) // debe ser un numero mayor
   

}
aparicion()  //llamo a la función



let slider = document.querySelector(".slider-contenedor")
let sliderSimple = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderSimple[0].clientWidth;
let tiempo = 3000;

window.addEventListener("resize", function(){
    width = sliderSimple[0].clientWidth;
})

setInterval(function(){
    slides();
},tiempo);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderSimple.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}




// convirtiendo las card en una array de objetos para poder hacer un map más tarde
const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -33.3

        // MOVEMOS el grand
        grande.style.transform = `translateY(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})
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


// convirtiendo las card en una array de objetos para poder hacer un map más tarde
let cards = [
    {
        img: "./img/galeria/retail/retail1.jpg",
        h3: "RETAIL",
        modal:"#openModal"
    },{
        img: "./img/galeria/eventos/evento.jpg",
        h3: "EVENTOS",
        modal:"#openModal1"
    },{
        img: "./img/galeria/digital/inversis(1).jpg",
        h3: "DIGITAL",
        modal:"#openModal2"
    }
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

//  let fotos = [
//     {
//         imgUna: "../img/galeria/RETAIL/RETAIL_11.jpg",
//         imgDos: "../img/galeria/RETAIL/RETAIL_31.jpg",
//         imgTres: "../img/galeria/RETAIL/RETAIL_33.jpg",
//     },{
//         imgUna: "../img/galeria/EVENTOS/EVENTO_21.jpg",
//         imgDos: "../img/galeria/EVENTOS/EVENTO_42.jpg",
//         imgTres: "../img/galeria/EVENTOS/EVENTO_8.jpg",
        
//     },{
//         imgUna: "../img/galeria/DIGITAL/ejemplo_api-01.jpg",
//         imgDos: "../img/galeria/DIGITAL/INVERSIS.jpg",
//         imgTres: "../img/galeria/DIGITAL/MERCEDES.jpg",
        
//     }
// ]
// let carrusel = document.getElementById("carrusel")

// const foto = fotos.map((foto,index) =>{
//     return(` 
//     <div class="grande">
//         <div class="img__div">
//             <img src="${foto.imgUna}" alt="img" class="img__carrusel">
//         </div>
//         <div class="img__div">
//             <img src="${foto.imgDos}" alt="img" class="img__carrusel">
//         </div>

//          <div class="img__div">
//             <img src="${foto.imgTres}" alt="img" class="img__carrusel">
//         </div>
//     </div>
//     <ul class="puntos">
//         <li class="punto activo">1</li>
//         <li class="punto">2</li>
//         <li class="punto">3</li>
//     </ul>

// `)
    




//  });
//  carrusel.innerHTML = foto.join(" ")



//  let fotos = [
//     {
//         imgUna: "../img/galeria/RETAIL/RETAIL_11.jpg",
//         imgDos: "../img/galeria/RETAIL/RETAIL_31.jpg",
//         imgTres: "../img/galeria/RETAIL/RETAIL_33.jpg",
//     },{
//         imgUna: "../img/galeria/EVENTOS/EVENTO_21.jpg",
//         imgDos: "../img/galeria/EVENTOS/EVENTO_42.jpg",
//         imgTres: "../img/galeria/EVENTOS/EVENTO_8.jpg",
        
//     },{
//         imgUna: "../img/galeria/DIGITAL/ejemplo_api-01.jpg",
//         imgDos: "../img/galeria/DIGITAL/INVERSIS.jpg",
//         imgTres: "../img/galeria/DIGITAL/MERCEDES.jpg",
        
//     }
// ]
// let carrusel = document.getElementById("carrusel")

// const foto = fotos.map((foto,index) =>{
//     return(` 
//     <div class="grande">
//         <div class="img__div">
//             <img src="${foto.imgUna}" alt="img" class="img__carrusel">
//         </div>
//         <div class="img__div">
//             <img src="${foto.imgDos}" alt="img" class="img__carrusel">
//         </div>

//          <div class="img__div">
//             <img src="${foto.imgTres}" alt="img" class="img__carrusel">
//         </div>
//     </div>
//     <ul class="puntos">
//         <li class="punto activo">1</li>
//         <li class="punto">2</li>
//         <li class="punto">3</li>
//     </ul>

// `)
    




//  });
//  carrusel.innerHTML = foto.join(" ")



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





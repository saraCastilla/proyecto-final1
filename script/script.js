document.addEventListener("DOMContentLoaded", function () {






window.addEventListener("scroll",function () {
    let animacion = document.getElementById("animado");
   
    let posicionObjt = animacion.getBoundingClientRect().top;
     console.log(posicionObjt);
     let tamañoDePantalla = window.innerHeight*0.8;
     if (posicionObjt < tamañoDePantalla) {
         animacion.style.animation = "mover 2s ease-out " 
         
         
         
     }
 })


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


 function intervalo() {
   


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
intervalo()


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
aparicion()



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
        img: "../img/galeria/RETAIL/RETAIL_11.jpg",
        h3: "RETAIL"
    },{
        img: "../img/galeria/4.jpg",
        h3: "EVENTOS"
    },{
        img: "../img/galeria/5.jpg",
        h3: "DIGITAL"
    }
]
 let div = document.getElementById("galeria")



 const card = cards.map((card,index) =>{
    return(`<div class="proyectos__card">
    <div class="card__div">
        <img src="${card.img}" alt="" class="galeria__img">
    </div>
    <div class="proyectos__carab">
        <h3 class="carab__h3">${card.h3}</h3>
        <a href="#openModal" class="carab__enlace">ver más</a>      

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





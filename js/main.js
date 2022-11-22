// Creare uno carousel con una serie di immagini generate da js

// Componenti DOM
const container = document.querySelector(".item");
const buttonUp = document.querySelector(".circle.up");
const buttonDown = document.querySelector(".circle.down");
const classImg = document.getElementsByClassName("img-carousel");

// Array di oggetti 
const images = [ { image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', }, { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', }, { image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", }, { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', }, { image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', } ];

// Stampare immagini con ciclo for each

    container.innerHTML += `<img src="${Element.image}" class="img-carousel">`;


// Aggiunta classe per rendere visibile la prima slide
classImg[0].classList.add("active")


// Dichirazione slide attuale
let nSlide = 0;

// Freccia giù
buttonDown.addEventListener("click",
    function(){
        console.log("ciao");
        nSlide++;
   
        classImg[nSlide].classList.add("active")
        classImg[(nSlide - 1)].classList.remove("active")

        if (nSlide === 1){
            buttonUp.classList.remove("hidden")

        } else if (nSlide === 4){
            buttonDown.classList.add("hidden")

        }
    }
)

// Freccia su
buttonUp.addEventListener("click",
    function(){
        nSlide--;

        classImg[nSlide].classList.add("active")
        classImg[(nSlide + 1)].classList.remove("active")
        
        if (nSlide === 0){
            buttonUp.classList.add("hidden")
            
        } else if (nSlide === 3){
            buttonDown.classList.remove("hidden")
        }
    }
)

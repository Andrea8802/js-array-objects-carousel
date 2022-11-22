// Creare un carousel infinito con una serie di immagini generate da js attraverso un array object

// Array di oggetti 
const images = [ { image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', }, { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', }, { image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", }, { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', }, { image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', } ];


// Stampare immagini con ciclo for each
images.forEach(element =>{
    document.getElementById("card").innerHTML += `<img src="${element.image}" class="img-carousel">`
});

// Stampiamo il testo
title.innerHTML = images[0].title;
text.innerHTML = images[0].text;

// Aggiunta classe per rendere visibile la prima slide
const classImg = document.getElementsByClassName("img-carousel");
classImg[0].classList.add("active");

// Numero Slide
let nSlide = 0;

// Freccia giù
document.querySelector(".circle.down").addEventListener("click",
    function(){
        if (nSlide === 4){
            classImg[nSlide].classList.remove("active")
            nSlide = 0;
        } else {
            nSlide++;
            classImg[(nSlide - 1)].classList.remove("active")
        }

        // if (nSlide ===)

        title.innerHTML = images[nSlide].title;
        text.innerHTML = images[nSlide].text;
        classImg[nSlide].classList.add("active")  
    }
)

// Freccia su
document.querySelector(".circle.up").addEventListener("click",
    function(){

        if (nSlide === 0){
            classImg[nSlide].classList.remove("active")
            nSlide = 4;
        } else {
            nSlide--;
            classImg[(nSlide + 1)].classList.remove("active")
        }

        // 
        title.innerHTML = images[nSlide].title;
        text.innerHTML = images[nSlide].text;
        classImg[nSlide].classList.add("active")
    }
)

// Inseriamo le immagini nella preview
images.forEach(element => document.getElementById("preview").innerHTML += `<div class="container-img"> <img class="img-preview" src="${element.image}"> </div>`);

// Selezioniamo tutti i container delle immagini e aggiungiamo la selezione sul primo
const containerImg = document.getElementsByClassName("container-img");
containerImg[0].classList.add("block-active")

// Ciclo fro per cambiare immagine durante il click
for (let i = 0; i < images.length; i++){
    containerImg[i].addEventListener("click", onClickImg);

    function onClickImg(){
        // Gestione focus su immagini
        document.getElementsByClassName("active")[0].classList.remove("active");
        classImg[i].classList.add("active");
        document.getElementsByClassName("block-active")[0].classList.remove("block-active")
        containerImg[i].classList.add("block-active")

        // Testo slide
        title.innerHTML = images[i].title;
        text.innerHTML = images[i].text;
    }
    
};


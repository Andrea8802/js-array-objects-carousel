// Creare un carousel infinito con una serie di immagini generate da js attraverso un array object e altre features

// Array di oggetti 
const images = [ 
    {
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
    },

    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    },

    {   
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    },

    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    }, 

    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    } 
];



// Stampare immagini le immagini nella card
images.forEach(element =>{
    document.getElementById("card").innerHTML += `<img src="${element.image}" class="img-carousel">`
});

// Stampare le immagini nella preview
images.forEach(element => document.getElementById("preview").innerHTML += `<div class="container-img"> <img class="img-preview" src="${element.image}"> </div>`);



// Stampiamo il testo
const title = document.getElementById("title");
const text = document.getElementById("text");
title.innerHTML = images[0].title;
text.innerHTML = images[0].text;

// Aggiunta classe per rendere visibile la prima slide
const classImg = document.getElementsByClassName("img-carousel");
classImg[0].classList.add("active");

// Numero Slide
let nSlide = 0;

// Aggiungere contorno stato attivo preview
const containerImg = document.getElementsByClassName("container-img");
containerImg[nSlide].classList.add("block-active");



// Pulsante freccia giù
const buttonDown = document.querySelector(".circle.down");
buttonDown.addEventListener("click",
    function(){
        stopSlide();
        switchAvanti();   
    }
)

// Pulsante freccia su
const buttonUp = document.querySelector(".circle.up");
buttonUp.addEventListener("click",
    function(){
        stopSlide();
        switchReverse();
    }
)

// Ciclo for per cambiare immagine durante il click
for (let i = 0; i < images.length; i++){
    containerImg[i].addEventListener("click", onClickImg);
    function onClickImg(){

        stopSlide();

        // Gestione focus su immagini
        classImg[nSlide].classList.remove("active");
        containerImg[nSlide].classList.remove("block-active");
        classImg[i].classList.add("active");
        containerImg[i].classList.add("block-active");
        nSlide = i;

        // Testo slide
        title.innerHTML = images[i].title;
        text.innerHTML = images[i].text;
    }
    
};

    // Switch Automatico al caricamento della pagina
let time = setInterval(switchAvanti, 3000);

// Dichiarazione variabile per switch temporale inverso
let timeReverse;

// Stato Slide
let started = true;
let reversed = false;

// Pulsante per startare o stoppare lo switch automatico delle slide
const startStop = document.getElementById("startStop");
startStop.addEventListener("click", onClickStartStop);

// Pulsante per far scorrere le slide al contrario
document.getElementById("reverse").addEventListener("click", onClickReverse);

// Funzione per switchare in avanti le slide
function switchAvanti(){
    classImg[nSlide].classList.remove("active")
    containerImg[nSlide].classList.remove("block-active");

    if (nSlide === 0){
        nSlide++
    } else if (nSlide >= images.length - 1){
        containerImg[nSlide].classList.remove("block-active");
        nSlide = 0;
        containerImg[nSlide].classList.add("block-active");
    } else{
        nSlide++
    }

    title.innerHTML = images[nSlide].title;
    text.innerHTML = images[nSlide].text;
    classImg[nSlide].classList.add("active");
    containerImg[nSlide].classList.add("block-active")

};

// Funzione per switchare al contrario le slide
function switchReverse(){

    classImg[nSlide].classList.remove("active");
    containerImg[nSlide].classList.remove("block-active");

    if (nSlide >= images.length){
        nSlide--
    } else if (nSlide === 0){
        containerImg[nSlide].classList.remove("block-active");
        nSlide = images.length - 1;
        containerImg[nSlide].classList.add("block-active")
    } else{
        nSlide--
    }

    title.innerHTML = images[nSlide].title;
    text.innerHTML = images[nSlide].text;
    classImg[nSlide].classList.add("active");
    containerImg[nSlide].classList.add("block-active")
};

// Funzione per startare o stoppare lo scorrimento automatico delle slide
function onClickStartStop(){
    if (started === true){
        started = false;
        startStop.innerHTML = `<i class="fa-solid fa-play"></i>`;
        clearInterval(time);
        clearInterval(timeReverse);
        
    } else if (started === false) {
        started = true;
        startStop.innerHTML = `<i class="fa-solid fa-stop"></i>`;

        if (reversed === true){
            timeReverse = setInterval(switchReverse, 3000);

        } else {
            time = setInterval(switchAvanti, 3000);
        }
    }

};

// Funzione per poter invertire lo scorrimento delle slide
function onClickReverse(){
    if (reversed === false){
        reversed = true;
        clearInterval(time);
        timeReverse = setInterval(switchReverse, 3000);
        this.innerHTML = `<i class="fa-solid fa-forward"></i>`;

    } else{
        reversed = false;
        clearInterval(timeReverse);
        time = setInterval(switchAvanti, 3000);
        this.innerHTML = `<i class="fa-solid fa-backward"></i>`;
    }
};

// Funzione per far partire le slide
function startSlide(){
    if (started === false) {
        started = true;

        if (reversed === true){
            timeReverse = setInterval(switchReverse, 3000);

        } else {
            time = setInterval(switchAvanti, 3000);
        }
    }
};

// Funzione per stoppare le slide
function stopSlide(){
    if (started === true){
            started = false;
            startStop.innerHTML = `<i class="fa-solid fa-play"></i>`;
            clearInterval(time);
            clearInterval(timeReverse);
        }
};
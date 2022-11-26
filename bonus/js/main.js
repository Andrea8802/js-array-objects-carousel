// Creare un carousel infinito con una serie di immagini generate da js attraverso un array object

// Array di oggetti 
const images = [ 
    {
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', },
         { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', }, { image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", }, { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', }, { image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', } ];


// Stampare immagini con ciclo for each
images.forEach(element =>{
    document.getElementById("card").innerHTML += `<img src="${element.image}" class="img-carousel">`
});

// Stampiamo il testo
const title = document.getElementById("title").innerHTML = images[0].title;
const text = document.getElementById("text").innerHTML = images[0].text;

// Aggiunta classe per rendere visibile la prima slide
const classImg = document.getElementsByClassName("img-carousel");
classImg[0].classList.add("active");



// Numero Slide
let nSlide = 0;

// Inseriamo le immagini nella preview
images.forEach(element => document.getElementById("preview").innerHTML += `<div class="container-img"> <img class="img-preview" src="${element.image}"> </div>`);


// Freccia giù
const buttonDown = document.querySelector(".circle.down");
buttonDown.addEventListener("click",
    function(){

        // Stop switch automatico
        clearTimeout(time);
        clearInterval(timeReverse);

        if (nSlide === images.length){
            classImg[nSlide].classList.remove("active")
            nSlide = 0;
        } else {
            nSlide++;
            classImg[(nSlide - 1)].classList.remove("active")
        }

        // Inserimento testo
        title.innerHTML = images[nSlide].title;
        text.innerHTML = images[nSlide].text;
        classImg[nSlide].classList.add("active")  
    }
)


// Freccia su
const buttonUp = document.querySelector(".circle.up");
buttonUp.addEventListener("click",
    function(){

        // Stop switch automatico
        clearInterval(time);
        clearInterval(timeReverse);
        
        if (nSlide === 0){
            classImg[nSlide].classList.remove("active")
            nSlide = images.length;
        } else {
            nSlide--;
            classImg[(nSlide + 1)].classList.remove("active")
        }

        // Inserimento testo
        title.innerHTML = images[nSlide].title;
        text.innerHTML = images[nSlide].text;
        classImg[nSlide].classList.add("active");
    }
)

// Selezioniamo tutti i container delle immagini e aggiungiamo la selezione sul primo
const containerImg = document.getElementsByClassName("container-img");


// Switch Automatico
const time = setInterval(switchTime, 3000);
// Ciclo for per cambiare immagine durante il click
for (let i = 0; i < images.length; i++){
    containerImg[i].addEventListener("click", onClickImg);
    function onClickImg(){

        // Stop switch automatico
        clearInterval(time);
        
        // Rimozione tasti
        buttonDown.style.display = "none";
        buttonUp.style.display = "none";

        const blockActive = document.querySelector(".block-active");

        // Gestione focus su immagini
        document.getElementsByClassName("active")[0].classList.remove("active");
        classImg[i].classList.add("active");
        blockActive === null ? "" : blockActive.classList.remove("block-active")
        containerImg[i].classList.add("block-active")

        // Testo slide
        title.innerHTML = images[i].title;
        text.innerHTML = images[i].text;
    }
    
};

const active = document.querySelector(".active");


function switchTime(){
    if (nSlide === images.length){
        classImg[(nSlide - 1)].classList.remove("active");
        nSlide = 0;
        classImg[nSlide].classList.add("active");
        title.innerHTML = images[nSlide].title;
        text.innerHTML = images[nSlide].text;

    } else{
        nSlide++;
        active.classList.remove("active");
        classImg[(nSlide - 1)].classList.add("active");
        title.innerHTML = images[(nSlide - 1)].title;
        text.innerHTML = images[(nSlide - 1)].text;
    }
}

let started = true;

document.getElementById("start").addEventListener("click",
    function(){
        if (started) return;
        setInterval(switchTime, 3000);
        started = true;
    }
);

document.getElementById("stop").addEventListener("click",
    function(){
        clearTimeout(time)
        clearInterval(timeReverse);
        started = false
    }
)
const timeReverse = setInterval(switchTimeReverse, 3000);
clearInterval(timeReverse);

document.getElementById("reverse").addEventListener("click",
    function(){
        clearTimeout(time)
        nSlide = images.length - 1;
        setInterval(switchTimeReverse, 3000);

    }
)

function switchTimeReverse(){
    active.classList.remove("active");
    classImg[nSlide].classList.add("active");

    if (nSlide < images.length - 1 && nSlide != 0){
        nSlide--
    } else if (nSlide === images.length - 1){
        nSlide--
    } else if (nSlide === 0){
        nSlide = images.length - 1;
    }
}
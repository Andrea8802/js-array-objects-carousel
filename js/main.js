// Creare un carousel infinito con una serie di immagini generate da js attraverso un array object

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


// Stampare immagini con ciclo for each
images.forEach(element =>{
    document.getElementById("card").innerHTML += `<img src="${element.image}" class="img-carousel">`
});

// Stampiamo il testo
const title = document.getElementById("title").innerHTML = images[0].title;
document.getElementById("text").innerHTML = images[0].text;

// Aggiunta classe per rendere visibile la prima slide
const classImg = document.getElementsByClassName("img-carousel");
classImg[0].classList.add("active");


// Numero Slide
let nSlide = 0;

// Freccia giù
document.querySelector(".circle.down").addEventListener("click",
    function(){

        classImg[nSlide].classList.remove("active")
    
        if (nSlide === 0){
            nSlide++
        } else if (nSlide >= images.length - 1){
            nSlide = 0;
        } else{
            nSlide++
        }
    
        title.innerHTML = images[nSlide].title;
        text.innerHTML = images[nSlide].text;
        classImg[nSlide].classList.add("active");
    }
)

// Freccia su
document.querySelector(".circle.up").addEventListener("click",
    function(){

        classImg[nSlide].classList.remove("active");

        if (nSlide >= images.length){
            nSlide--
        } else if (nSlide === 0){
            nSlide = images.length - 1;
        } else{
            nSlide--
        }

        title.innerHTML = images[nSlide].title;
        text.innerHTML = images[nSlide].text;
        classImg[nSlide].classList.add("active");
    }
)

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


//Popolare la sezione con la sequenza di immagini
const imgWithText = document.querySelector('.imgWithText');
const imgSequence = document.querySelector('.imgSequence');
const country = document.querySelector('.country')


for(let i = 0; i < items.length; i++){

    country.innerHTML+=
    `<div class="nameCountry">${title[i]}</div>
    <div class="description">${text[i]}</div>`;

    imgWithText.innerHTML += 
    `<div class="box">
        <img src="${items[i]}" alt="">
    </div>`;

    imgSequence.innerHTML += 
    `<div class="boxList opacityon">
        <img src="${items[i]}" alt="">
    </div>`;
}


// Rendiamo attive le immagini centrali

const centralImg = document.getElementsByClassName('box');
const sequencelImg = document.getElementsByClassName('boxList');
const titleCountry = document.getElementsByClassName('nameCountry');
const textCountry = document.getElementsByClassName('description');

let activeObject = 0;
let activeOpacity = 0;
let activeTitle = 0;
let activeText = 0;

centralImg[activeObject].classList.add('active');
sequencelImg[activeOpacity].classList.remove('opacityon');
titleCountry[activeTitle].classList.add('active');
textCountry[activeText].classList.add('active');


const up = document.querySelector('.arrowUp');
const down = document.querySelector('.arrowDown');

down.addEventListener("click", function(){
    if(activeObject < centralImg.length - 1 && activeOpacity < centralImg.length - 1){
        //Movimento immagini verso il basso
        centralImg[activeObject].classList.remove('active');
        centralImg[++activeObject].classList.add('active');

        // Movimento titolo e testo verso il basso
        titleCountry[activeTitle].classList.remove('active');
        titleCountry[++activeTitle].classList.add('active');

        textCountry[activeText].classList.remove('active');
        textCountry[++activeText].classList.add('active');

        //Movimento opacità varso il basso
        sequencelImg[activeOpacity].classList.add('opacityon');
        sequencelImg[++activeOpacity].classList.remove('opacityon');

    } else{
        // Loop immagini verso il basso
        centralImg[activeObject].classList.remove('active');
        activeObject = 0;
        centralImg[activeObject].classList.add('active');

        // Loop titolo e testo verso il basso
        titleCountry[activeTitle].classList.remove('active');
        activeTitle = 0;
        titleCountry[activeTitle].classList.add('active');
        
        textCountry[activeText].classList.remove('active');
        activeText = 0;
        textCountry[activeText].classList.add('active');

        //Loop opacità verso il basso
        sequencelImg[activeOpacity].classList.add('opacityon');
        activeOpacity = 0;
        sequencelImg[activeOpacity].classList.remove('opacityon');
    }
});

up.addEventListener("click", function(){
    if(activeObject <= 0 && activeOpacity <=0){
        // Loop immagini verso l'alto
        centralImg[activeObject].classList.remove('active');
        activeObject = centralImg.length - 1;
        centralImg[activeObject].classList.add('active');

        // Loop titolo e testo verso l'alto
        titleCountry[activeTitle].classList.remove('active');
        activeTitle = centralImg.length - 1;
        titleCountry[activeTitle].classList.add('active');
        
        textCountry[activeText].classList.remove('active');
        activeText = centralImg.length - 1;
        textCountry[activeText].classList.add('active');

        // Loop opacità verso l'alto
        sequencelImg[activeOpacity].classList.add('opacityon');
        activeOpacity = centralImg.length - 1;
        sequencelImg[activeOpacity].classList.remove('opacityon');
    } else{
        //Movimento immagini verso l'alto
        centralImg[activeObject].classList.remove('active');
        centralImg[--activeObject].classList.add('active');

        // Movimento titolo e testo verso l'alto
        titleCountry[activeTitle].classList.remove('active');
        titleCountry[--activeTitle].classList.add('active');
        
        textCountry[activeText].classList.remove('active');
        textCountry[--activeText].classList.add('active');


        //Movimento opacità varso l'alto
        sequencelImg[activeOpacity].classList.add('opacityon');
        sequencelImg[--activeOpacity].classList.remove('opacityon')
    }
});
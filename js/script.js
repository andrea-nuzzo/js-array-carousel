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
const imgSequence = document.querySelector('.imgSequence');

for(let i = 0 ; i < items.length; i++){
    imgSequence.innerHTML += 
    `<div class="boxList opacityon">
        <img src="${items[i]}" alt="">
    </div>`
}

//Popolare la sezione con l'immagine centrale
const imgWithText = document.querySelector('.imgWithText');

for(let i = 0 ; i < items.length; i++){
    imgWithText.innerHTML += 
    `<div class="box">
    <img src="${items[i]}" alt="">
    </div>`
}

// Rendiamo attive le immagini centrali

const centralImg = document.getElementsByClassName('box');
const sequencelImg = document.getElementsByClassName('boxList');

let activeObject = 0;
let opacityObject = 0;

centralImg[activeObject].classList.add('active')
sequencelImg[opacityObject].classList.remove('opacityon')

const up = document.querySelector('.arrowUp');
const down = document.querySelector('.arrowDown');

down.addEventListener("click", function(){
    if(activeObject < centralImg.length - 1 && opacityObject < centralImg.length - 1){
        //Movimento immagini verso il basso
        centralImg[activeObject].classList.remove('active');
        centralImg[++activeObject].classList.add('active')

        //Movimento opacità varso il basso
        sequencelImg[opacityObject].classList.add('opacityon')
        sequencelImg[++opacityObject].classList.remove('opacityon')

    } else{
        // Loop immagini verso il basso
        centralImg[activeObject].classList.remove('active');
        activeObject = 0;
        centralImg[activeObject].classList.add('active')

        //Loop opacità verso il basso
        sequencelImg[opacityObject].classList.add('opacityon')
        opacityObject = 0;
        sequencelImg[opacityObject].classList.remove('opacityon')
    }
});

up.addEventListener("click", function(){
    if(activeObject <= 0 && opacityObject <=0){
        // Loop immagini verso l'alto
        centralImg[activeObject].classList.remove('active');
        activeObject = centralImg.length - 1;
        centralImg[activeObject].classList.add('active')

        // Loop opacità verso l'alto
        sequencelImg[opacityObject].classList.add('opacityon')
        opacityObject = centralImg.length - 1;
        sequencelImg[opacityObject].classList.remove('opacityon')
    } else{
        //Movimento immagini verso l'alto
        centralImg[activeObject].classList.remove('active');
        centralImg[--activeObject].classList.add('active')

        //Movimento opacità varso l'alto
        sequencelImg[opacityObject].classList.add('opacityon')
        sequencelImg[--opacityObject].classList.remove('opacityon')
    }
});
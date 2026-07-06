
// PAGE CHANGE

function openPage(pageNumber){

document.querySelectorAll(".page").forEach(page=>{
page.classList.remove("active");
});

document.getElementById("page"+pageNumber)
.classList.add("active");

}


// TYPING EFFECT

const text = "🎂 Happy Birthday Jaansa 🎂";
let i = 0;

function typeText(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typeText,120);

}

}

window.onload = () => {

typeText();

startSlideshow();

createHearts();

};


// MEMORIES SLIDESHOW

const images = [

"photo1.jpg.jpeg",
"photo2.jpg.jpeg",
"photo5.jpg.jpeg",
"photo6.jpg.jpeg",
"photo7.jpg.jpeg",
"photo8.jpg.jpeg",
"photo9.jpg.jpeg",
"photo10.jpg.jpeg",
"photo11.jpg.jpeg",
"photo12.jpg.jpeg",
"photo13.jpg.jpeg",
"photo14.jpg.jpeg",
"photo16.jpg.jpeg",
"photo17.jpg.jpeg",
"photo18.jpg.jpeg",
"photo19.jpg.jpeg",
"photo20.jpg.jpeg",
"photo21.jpg.jpeg",
"photo22.jpg.jpeg",
"photo24.jpg.jpeg",
"photo25.jpg.jpeg",
"photo26.jpg.jpeg",
"photo27.jpg.jpeg",
"photo28.jpg.jpeg",
"photo29.jpg.jpeg",
"photo30.jpg.jpeg",
"photo32.jpg.jpeg",
"photo34.jpg.jpeg",
"photo35.jpg.jpeg",
"photo36.jpg.jpeg",
"photo37.jpg.jpeg",
"photo38.jpg.jpeg",
"photo39.jpg.jpeg",



];

let current = 0;

function startSlideshow(){

setInterval(()=>{

current++;

if(current >= images.length){

current = 0;

}

document.getElementById("slideImage").src =
images[current];

},2000);

}


// ENVELOPE LETTER

function openEnvelope() {
    document.getElementById("envelope").classList.toggle("open");
    document.getElementById("letter").classList.toggle("show");
}



// GIFT SURPRISE

function openGift(){

document.getElementById("giftContent")
.style.display = "block";

}


// FLOATING HEARTS

function createHearts(){

const container =
document.getElementById("hearts-container");

setInterval(()=>{

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "💙";

heart.style.left =
Math.random()*100 + "vw";

heart.style.animationDuration =
(4 + Math.random()*4) + "s";

heart.style.fontSize =
(12 + Math.random()*20) + "px";

container.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},300);

}

const music = document.getElementById("bgMusic");

document.addEventListener("click", () => {
    music.play();
}, { once: true });
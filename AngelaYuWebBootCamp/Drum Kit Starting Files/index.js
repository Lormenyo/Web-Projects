var drums = document.querySelectorAll(".drum");

for (let index = 0; index < drums.length; index++) {
    const element = drums[index].addEventListener("click", playSound);  
}

function playSound() {
    let audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
}
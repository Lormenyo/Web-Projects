var drums = document.querySelectorAll(".drum");

for (let index = 0; index < drums.length; index++) {
    const element = drums[index].addEventListener("click", playSound);  
}

document.addEventListener("keydown", function (event) {
    getSound(event.key);
})

function playSound() {
    let drumInnerHTML = this.innerHTML;
    getSound(drumInnerHTML);
}

function playAudio(path) {
    let audio = new Audio(path);
    audio.play();
}

function getSound(drum) {
    switch (drum) {
        case "w":
            playAudio("./sounds/tom-1.mp3");
            break;
        case "a":
            playAudio("./sounds/tom-2.mp3");
            break; 
        case "s":
            playAudio("./sounds/tom-3.mp3");
            break;  
        case "d":
            playAudio("./sounds/tom-4.mp3");
            break;
        case "j":
            playAudio("./sounds/snare.mp3");
            break;
        case "k":
            playAudio("./sounds/kick-bass.mp3");       
            break;
        case "l":
            playAudio("./sounds/crash.mp3");
            break;
        default:
            break;
    }
}
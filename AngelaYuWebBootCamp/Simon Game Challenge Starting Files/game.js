let gamePattern = [];

let userClickedPattern = [];

let Colours = {
    red: "red",
    blue: "blue",
    green: "green",
    yellow: "yellow"
}

let buttonColours = [Colours.red, Colours.blue, Colours.green, Colours.yellow];


function nextSequence() {
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(randomChosenColour);

    let currentButton = $("#" + randomChosenColour);
    currentButton.addClass("black");
    setTimeout(() => {
        currentButton.removeClass("black");
    }, 100);

    playSound(randomChosenColour);
    
}

function triggerPlaySound(buttonColour) {
    switch (buttonColour) {
        case Colours.red:
            playSound(Colours.red)
            break;
        case Colours.blue:
            playSound(Colours.blue)
            break;
        case Colours.green:
            playSound(Colours.green)
            break; 
        case Colours.yellow:
            playSound(Colours.yellow)
            break;  
        default:
            break;
    }
}

function handleClick(event) {
    let userChosenColour = event.id;
    userClickedPattern.push(userChosenColour);
}

function playSound(buttonColour) {
    let audio = new Audio("./sounds/" + buttonColour + ".mp3");
    audio.play();
}

$(document).keydown(function () {
    nextSequence(); 
});


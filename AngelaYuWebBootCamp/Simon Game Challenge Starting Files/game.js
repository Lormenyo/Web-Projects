let gamePattern = [];

let userClickedPattern = [];

let level = 0;

let levelTitle = $("#level-title");

let started = false;

let Colours = {
    red: "red",
    blue: "blue",
    green: "green",
    yellow: "yellow"
}

let buttonColours = [Colours.red, Colours.blue, Colours.green, Colours.yellow];

// Evenrything starts here
$(document).keydown(function () {
    if (!started){
        nextSequence(); 
        started = true;
    }
});

$(".btn").click(handleClick);


function nextSequence() {
    userClickedPattern = [];
    level += 1;
    levelTitle.text("Level " + level);
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    let currentButton = $("#" + randomChosenColour);
    currentButton.addClass("black");
    setTimeout(() => {
        currentButton.removeClass("black");
    }, 100);

    playSound(randomChosenColour);
    
}


function handleClick(event) {
    let userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
}

function playSound(buttonColour) {
    let audio = new Audio("./sounds/" + buttonColour + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    let currentButton = $("#" + currentColour);
    currentButton.addClass("pressed");
    setTimeout(() => {
        currentButton.removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if (gamePattern.length === userClickedPattern.length){
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        levelTitle.text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    gamePattern = [];
    level = 0;
    started = false;
}




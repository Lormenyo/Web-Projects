console.log("Dice challenge");


let player1Dice = document.querySelector('.img1');
let player2Dice = document.querySelector('.img2');
let title = document.querySelector(".container h1");


function getRandom(){
    return Math.floor(Math.random()*6)+1;
}

function getDiceImage(randomNumber){
    return  imgPath = "images/dice" + randomNumber +".png";
}


function rollDice(){
    let randomNumber1 = getRandom();
    let randomNumber2 = getRandom();

    let imgPath1 = getDiceImage(randomNumber1);
    let imgPath2 = getDiceImage(randomNumber2);

    player1Dice.setAttribute("src", imgPath1);
    player2Dice.setAttribute("src", imgPath2);

    if (randomNumber1 > randomNumber2){
        title.textContent = "Player 1 Wins!"
    }else if (randomNumber1 < randomNumber2){
        title.textContent = "Player 2 Wins!"
    }else{
        title.textContent = "Draw!"
    }
}

rollDice();

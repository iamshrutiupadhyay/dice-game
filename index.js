// var randomNumber1 = 4;
// console.log(randomNumber1);

function updateSrcOfImage(imgClass, newSrc){
    document.querySelector(imgClass).src = newSrc;
}

// updateSrcOfImage(".img2", "./images/dice3.png");

function getNewSrcForImage(number){
    var newSrc = "./images/dice"+ number +".png";
    return newSrc;
}


// var imgSrc = getNewSrcForImage(2);
// console.log(imgSrc);

function generateRandomNumberBetween1To6(){
    return Math.floor(Math.random() * (6 - 1 + 1) + 1)
}

// console.log(generateRandomNumberBetween1To6())
// document.querySelector(".img1").src = "./images/dice4.png"

function updateDice(className){
    var newDiceNumber = generateRandomNumberBetween1To6();
    var newImgSrc = getNewSrcForImage(newDiceNumber);
    updateSrcOfImage(className, newImgSrc);
    return newDiceNumber;
}

function updatePageHeader(newHeader) {
    // find a selector for h1
    var heading = document.querySelector("h1");
    // updated innerText of h1 to newHeader
    heading.innerText = newHeader;
}

var player1Score = updateDice(".img1");
var player2Score = updateDice(".img2");

if(player1Score === player2Score){
    // update page header to draw
    updatePageHeader('Draw');
} else if (player1Score > player2Score) {
    // update page header to player 1 wins
    updatePageHeader('Player 1 wins');
} else {
    // update page header to player 2 wins
    updatePageHeader('Player 2 wins');
}
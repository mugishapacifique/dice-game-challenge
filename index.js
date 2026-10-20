
var choosenNumber = Math.floor((Math.random() * 6)+1);
var choosenNumber2 = Math.floor((Math.random() * 6)+1);

if (choosenNumber == 1){
    document.querySelector("img.img1").src = "./images/dice1.png";
}

else if (choosenNumber == 2){
    document.querySelector("img.img1").src = "./images/dice2.png";
}

else if (choosenNumber == 3){
    document.querySelector("img.img1").src = "./images/dice3.png";
}

else if (choosenNumber == 4){
    document.querySelector("img.img1").src = "./images/dice4.png";
}

else if (choosenNumber == 5){
    document.querySelector("img.img1").src = "./images/dice5.png";
}   

else{
    document.querySelector("img.img1").src = "./images/dice6.png";
}


if (choosenNumber2 == 1){
    document.querySelector("img.img2").src = "./images/dice1.png";
}

else if (choosenNumber2 == 2){
    document.querySelector("img.img2").src = "./images/dice2.png";
}       

else if (choosenNumber2 == 3){
    document.querySelector("img.img2").src = "./images/dice3.png";
}

else if (choosenNumber2 == 4){
    document.querySelector("img.img2").src = "./images/dice4.png";
}

else if (choosenNumber2 == 5){
    document.querySelector("img.img2").src = "./images/dice5.png";
}

else {
    document.querySelector("img.img2").src = "./images/dice6.png";
}


if (choosenNumber > choosenNumber2){

    document.querySelector("h1").innerHTML = "winner is player 1";
}

else if (choosenNumber < choosenNumber2){

    document.querySelector("h1").innerHTML = "winner is player 2";
}
else {

    document.querySelector("h1").innerHTML = "It's a draw!";
}
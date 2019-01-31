
let start = document.querySelector(".startGame");
let letterVal = document.getElementById("leterCheck");
let numberHolder = document.getElementById('numberHolder');
let easy = document.getElementById("easy");
let medium = document.getElementById("medium");
let hard = document.getElementById("hard");
let newLetter = "";
let exists = [];
let hit = 0;
let missed = 0;
let left = 26;
let newExists = [];
let numsToShow = [];
let numToShow;
let i = 0;
let time;
let numShower;
let giveNum;

start.addEventListener("click", startGame, false);

function startGame() {
    numToShow = undefined;
    hit = 0;
    missed = 0;
    left = 26;
    start.innerHTML ="Stop"
    if(easy.checked){
        time = 5000;
    }else if(medium.checked){
        time = 3500;
    }else{
        time = 2000;
    }
    generateRan();
    newExists = exists.splice(0,exists.length)
    numsToShow = newExists.slice();
    play();
    let radio = document.getElementsByName("difficultie");
    let len = radio.length;
    for(let j = 0; j < len; j++) {
       radio[j].disabled = true;
    }
    inputLet();
    start.removeEventListener("click", startGame, false);
    start.addEventListener("click", reset, false);
}
function reset() {
     start.innerHTML ="Start"
     hit = 0;
     missed = 0;
     left = 26;
     exists = [];
     newExists = [];
     numsToShow = [];
     newLetter = "";
     numToShow = undefined;
     time;
     i = 0;
     let radio = document.getElementsByName("difficultie");
     let len = radio.length;
     for(let k = 0; k < len; k++) {
       radio[k].disabled = false;
    }
    numberHolder.innerHTML = "Wait!"
    window.clearInterval(numShower);
    window.clearInterval(giveNum);
    changeColor();
    letterVal.value = "";
    document.getElementById("hit").innerHTML = hit;
    document.getElementById("missed").innerHTML = missed;
    document.getElementById("left").innerHTML = left;
    start.removeEventListener("click", reset, false);
    start.addEventListener("click", startGame, false)
}


function letterValue(val){
    let letnum={
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
        l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }
    if(val.length == 1) return letnum[val] || " ";
    return val.split('').map(letterValue);
}

function generateRan(){
    let max = 26;  
    for(let i = 0;i<max ; i++){
        let randomNumber = Math.floor(Math.random()*max +1);
        if(exists.indexOf(randomNumber) == -1){
            exists.push(randomNumber);
        }
        else
         i--;
    }  
}

function play(){
     numShower = setInterval (function () {
        numberHolder.innerHTML = newExists[i++];
        letterVal.focus();
        if(letterVal.value == "" || letterVal.value == null) {
            document.getElementById(numToShow).style.color = "red"
            missed ++;
            left --
            document.getElementById("missed").innerHTML = missed;
            document.getElementById("left").innerHTML = left;
        }
        letterVal.value = "";
        if(i == newExists.length+1){
            numberHolder.innerHTML = "GameOver"
            letterVal.value = "";
            clearInterval(numShower);}
    }, time);
    
     giveNum = setInterval (function(){
        numToShow = numsToShow.shift();
        if(numsToShow.length == 0){
            clearInterval(giveNum);
        }
    },time);
}

function inputLet() {
    document.oninput = function() {
        let letter = letterVal.value.toLowerCase();
         newLetter = letter;  
        if (letterValue(newLetter) === numToShow) {
            hit++;  
            left --;
            document.getElementById(numToShow).style.color = "green";
            
        } else if (letterValue(newLetter) !== numToShow){
            missed++;
            left --;
            document.getElementById(numToShow).style.color = "red";
        }   
        document.getElementById("hit").innerHTML = hit;
        document.getElementById("missed").innerHTML = missed;
        document.getElementById("left").innerHTML = left;       
}
}

function changeColor() {
    let elements = document.getElementsByClassName("oneLetter");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color="#a9a8a8";
    }
}


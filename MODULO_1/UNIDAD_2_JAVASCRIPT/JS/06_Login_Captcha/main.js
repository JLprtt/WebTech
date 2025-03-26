const firstNum = Math.floor(Math.random()*100)+1;
const secondNum = Math.floor(Math.random()*100)+1;

const solution = firstNum + secondNum;

document.querySelector("#operation").innerHTML = `${firstNum} + ${secondNum}`;

let button = document.querySelector("#button");

//var campoAnswer = document.querySelector("#captcha");

var answer

button.onclick=function (){
    answer = document.querySelector("#captcha").value;
    /*if (solution == answer) {
        window.location.href = 'logging.html';
    } else if (isNaN(answer)){
        alert("Debe introducir un número.");
        window.location.reload();
    } else {
        alert("MrDestructoid Clap");
        window.location.reload();}*/
}

console.log(answer)
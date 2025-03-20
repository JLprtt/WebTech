const firstNum = Math.floor(Math.random()*100)+1;
const secondNum = Math.floor(Math.random()*100)+1;

const solution = firstNum + secondNum;

var answer = document.querySelector("#captcha").value;

let boton = document.querySelector("#button");

boton.addEventListener("click", function() {
    var answer = document.querySelector("#captcha").value;
    alert(answer);
});

console.log(answer)


/*if (solution == answer) {
    alert("Accediendo a su cuenta...");
} else if (isNaN(answer)){
    alert("Debe introducir un número.")
    window.location.reload();
} else {
    alert("MrDestructoid Clap");
    window.location.reload();
}*/
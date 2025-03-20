let numUno = prompt("Introduzca un número:")

let numDos = prompt("Vuelva a introducir un número:")

let num1 = parseInt(numUno)
let num2 = parseInt(numDos)

console.log(typeof num1, typeof num2)

let suma = num1+num2

document.write(`${numUno} + ${numDos} = ${suma}`);
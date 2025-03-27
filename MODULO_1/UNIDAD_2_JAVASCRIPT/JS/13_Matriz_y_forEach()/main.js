let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
   ];
let imprimirMatriz = '';
//Mostrar '3' y '5' (en la consola)
console.log(matriz[0][2],matriz[1][1])

//Mostrar la matriz completa
matriz.forEach(subArray => {
    subArray.forEach( element => {
        if (element % 3 === 0) {
            element = 'm'
        }
        imprimirMatriz += element;
    });
    imprimirMatriz += '<br>';
});

document.querySelector('#imprimirMatriz').innerHTML = imprimirMatriz;
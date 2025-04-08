let numeroDelCurso = 1;
let conjuntoDeNotas = [];
let notas = 0;
//let mediaDeNotas = notas / conjuntoDeNotas.length;

for (numeroDelCurso; numeroDelCurso <= 3; numeroDelCurso++) {
    let notaIntroducida = parseInt(prompt("Nota del curso:"));
    
    notas += notaIntroducida;

    conjuntoDeNotas.push(notaIntroducida);
    
}
document.querySelector("h1").innerHTML = `La media de tus notas es un ${notas / conjuntoDeNotas.length}`;
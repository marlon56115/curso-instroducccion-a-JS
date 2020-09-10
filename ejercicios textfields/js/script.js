
//para el control de calcular las raices con la formula cuadratica

function cuadratica() {
    let a = document.querySelector('#a').value;
    let b = document.querySelector('#b').value;
    let c = document.querySelector('#c').value;
    let x1, x2;

    if (Math.pow(b, 2) - 4 * a * c >= 0) {
        x1 = (b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        x2 = (b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        document.querySelector('#respuesta').value = 'x1=' + x1 + '      x2=' + x2;
    } else {
        document.querySelector('#respuesta').value = 'da numero imaginario';
    }
}



//para el control del juego de adivinar el numero
let nRandom;
function generarNumeronRandom() {
    nRandom = Math.round(Math.random() * 10);
    document.querySelector('#resultado').value = '';

}

function adivinarNumero() {

    let numero = document.querySelector('#numero').value;
    if (numero == nRandom) {
        document.querySelector('#resultado').value = 'felicidades adivino el numero era ' + nRandom;
    } else if (numero > nRandom) {
        document.querySelector('#resultado').value = 'muy alto';
    } else {
        document.querySelector('#resultado').value = 'muy bajo';
    }
}
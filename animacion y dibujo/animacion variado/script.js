window.onload = init;

var canvas, contexto;
var posicionX = 0;
var colores = ['red', 'green', 'black', 'blue', 'orange'];
var colorActual = 0;
var recorrido = 1;
var velocidad = 2

function init() {
    //obtengo el canvas
    canvas = document.querySelector('#miCanvas');
    //obtengo el contexto para dibujar
    contexto = canvas.getContext('2d');

    //setInterval(animar, 1000); //ejecuta la funcion animar cada 1000 segundos
    //setTimeout(animar, 100);   //ejecuta 
    requestAnimationFrame(animar);
    setInterval(cambiarColor, 500);
}

function dibujarAlgo(x, y) {
    contexto.save();
    contexto.translate(x, y);
    contexto.fillRect(posicionX, 0, 50, 50); //cabeza del robot
    contexto.restore();
    posicionX += recorrido;
}

function cambiarColor() {
    contexto.fillStyle = colores[colorActual];
    colorActual += 1;
}

function animar() {
    //limpiando el canvas
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    //dibujando algo
    dibujarAlgo(0, 0);
    //setTimeout(animar, 100);
    requestAnimationFrame(animar);
    if (posicionX > 150 || posicionX < 0) {
        recorrido = -recorrido;
    }
}
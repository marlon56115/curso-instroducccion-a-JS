var canvas, contexto;

window.onload = init;

function init() {
    //obtengo el canvas
    canvas = document.querySelector('#miCanvas');
    //obtengo el contexto para dibujar
    contexto = canvas.getContext('2d');
    w = canvas.width;
    h = canvas.height;

    dibujarRectangulo(10, 10, 50, 50, 'red');
    dibujarCirculo(50, 50, 30, 'blue');
    escribirTexto(55, 55, 'marlon', 'green');
}

function dibujarRectangulo(x, y, ancho, alto, color) {
    contexto.save(); //salvamos el contecto
    contexto.translate(x, y); //coordenadas relativas desde donde se va dibujar
    contexto.fillStyle = color;
    contexto.fillRect(0, 0, ancho, alto); //0,0 es el x,y relativo que indicamos
    contexto.restore(); //restauramos el contexto
}

function dibujarCirculo(x, y, radio, color) {
    contexto.save();
    contexto.translate(x, y);
    contexto.fillStyle = color;
    contexto.beginPath();
    contexto.arc(x, y, radio, 0, 2 * Math.PI);
    contexto.fill();
    contexto.restore();
}

function escribirTexto(x, y, texto, color) {
    contexto.save();
    contexto.fillStyle = color;
    contexto.font = '20px Arial';
    contexto.fillText(texto, x, y);
}
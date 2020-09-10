var canvas, contexto;

window.onload = init;

function init() {
    //obtengo el canvas
    canvas = document.querySelector('#miCanvas');
    //obtengo el contexto para dibujar
    contexto = canvas.getContext('2d');
    dibujarDosRectangulos();
    rectanguloVacio();
    circulo();

}

function dibujarDosRectangulos() {
    //dibujo un rentangulo relleno de color rojo
    contexto.fillStyle = 'red';
    contexto.fillRect(10, 10, 100, 100);
    //dibujo un rentangulo relleno de color azul
    contexto.fillStyle = 'blue';
    contexto.fillRect(25, 25, 100, 100);
}

function rectanguloVacio() {
    contexto.strokeStyle = 'green';
    contexto.lineWidth = 4;
    contexto.strokeRect(30, 30, 50, 50)
}

function circulo() {
    contexto.fillStyle = 'purple';
    contexto.beginPath();
    contexto.arc(50, 50, 20, 0, 2 * Math.PI);
    contexto.fill(); //o ctx.stroke () para un círculo de estructura metálica
}
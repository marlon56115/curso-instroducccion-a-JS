var canvas, contexto;

window.onload = init;

function init() {
    //obtengo el canvas
    canvas = document.querySelector('#miCanvas');
    //obtengo el contexto para dibujar
    contexto = canvas.getContext('2d');

    dibujarMounstruo(10, 10);
}


function dibujarMounstruo(x, y) {
    contexto.save();
    contexto.translate(x, y);
    contexto.strokeRect(0, 0, 100, 100); //cabeza del robot
    //dubujamos los ojos
    contexto.fillRect(20, 20, 10, 10);
    contexto.fillRect(65, 20, 10, 10);
    //la nariz
    contexto.strokeRect(45, 40, 10, 40);
    //boca
    contexto.strokeRect(35, 84, 30, 10);
    //dientes
    contexto.fillRect(38, 84, 10, 10);
    contexto.fillRect(52, 84, 10, 10);

    contexto.restore();

}
var canvas, contexto, mousePos, mouseBoton, w, h;
var jugador = {
    x: 10,
    y: 10,
    ancho: 20,
    alto: 20,
    color: 'blue'
}

window.onload = function init() {
    canvas = document.querySelector("#miCanvas");
    w = canvas.width;
    h = canvas.height;
    contexto = canvas.getContext('2d');
    //si sucedde evento que se mueve el mouse, hace callbak a mouseMoved
    canvas.addEventListener('mousemove', mouseMoved);
    loop();
};

//actualiza la posicion del mouse
function mouseMoved(evt) {
    mousePos = getMousePos(canvas, evt);
}

//devuelve la posicion del mouse como un objeto
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(); //para obtener el tamaño y la posicion del canvas
    //devuelve un objeto con las posiciones
    return {
        x: evt.clientX - rect.left, //se lo restamos para que sea la posiion real relativa del canvas
        y: evt.clientY - rect.top
    };
}

//cambia la posicion del jugador a la posicion del mouse
function moverConMouse() {
    if (mousePos !== undefined) {
        jugador.x = mousePos.x;
        jugador.y = mousePos.y;
    }
}

//para dibujar el rectangulo
function dibujarRectangulo(r) {
    contexto.save();
    contexto.translate(r.x, r.y);
    contexto.fillStyle = r.color;
    contexto.fillRect(0, 0, r.ancho, r.alto);
    contexto.restore();
}

//loop
function loop() {
    contexto.clearRect(0, 0, w, h);
    dibujarRectangulo(jugador);
    moverConMouse();
    requestAnimationFrame(loop);
}
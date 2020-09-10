var canvas, contexto, w, h;
var bola = {
    x: 100,
    y: 100,
    radio: 15,
    color: 'black',
    velocidadX: 5,
    velocidadY: 4
}

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
    loop();
};

function loop() {
    contexto.clearRect(0, 0, w, h);
    dibujarRectangulo(jugador);
    dibujarCirculo(bola);
    mover(bola);
    requestAnimationFrame(loop);
}

function mover(b) {
    b.x += b.velocidadX;
    b.y += b.velocidadY;
    evaluacionColision(b);
}

function evaluacionColision(b) {
    //evaluacion con muros verticales
    if ((b.x + b.radio) > w) { //muro derecho si sobrepasa el ancho sumandole el radio
        b.velocidadX = -b.velocidadX;
        //se pone la pelota en el punto de colision, junsto en el limite del muro
        b.x = w - b.radio;
    } else if ((b.x - b.radio) < 0) { //muro izquierdo si es menor a 0 restandole el radio
        b.velocidadX = -b.velocidadX;
        //se pone la pelota en el punto de colision, donde inicia el muro
        b.x = b.radio;
    }

    if ((b.y + b.radio) > h) { //choco arriba
        b.velocidadY = -b.velocidadY;
        b.y = h - b.radio;
    } else if ((b.y - b.radio < 0)) {
        b.velocidadY = -b.velocidadY;
        b.y = b.radio;
    }
}

function dibujarCirculo(c) {
    contexto.save();
    contexto.translate(c.x, c.y);
    contexto.fillStyle = c.color;
    contexto.beginPath();
    contexto.arc(0, 0, c.radio, 0, 2 * Math.PI);
    console.log(c.radio);
    contexto.fill();
    contexto.restore();
}

function dibujarRectangulo(r) {
    contexto.save();
    contexto.translate(r.x, r.y);
    contexto.fillStyle = r.color;
    contexto.fillRect(0, 0, r.ancho, r.alto);
    contexto.restore();
}
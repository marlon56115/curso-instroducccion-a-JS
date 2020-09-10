var canvas, contexto, w, h;
var bolas = [];
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
    bolas = crearBolas(20); //creo las bolas
    loop();
};

/**
 * se crea el rectangulo, dibujan y mueven las bolas
 */
function loop() {
    contexto.clearRect(0, 0, w, h);
    dibujarRectangulo(jugador);
    dibujarBolas(bolas);
    moverBolas(bolas);

    requestAnimationFrame(loop); //para la animacion
}
/**
 * 
 * @param {*} n 
 * crea todas las bolas
 */

function crearBolas(n) {
    var bolasArray = []; //array de bolas
    for (let index = 0; index < n; index++) {
        var bolaNueva = {
            x: w / 2, //que se generen en el centro
            y: h / 2,
            radio: 5 + 30 * Math.random(), //random
            color: getARandomColor(),
            velocidadX: -5 + 30 * Math.random(), //random
            velocidadY: -5 + 30 * Math.random()
        }
        bolasArray.push(bolaNueva); //agrego la bola al arrary
    }
    return bolasArray; //devuelvo el arrary
}

function getARandomColor() {
    var colors = ['red', 'blue', 'cyan', 'purple', 'pink', 'green', 'yellow'];
    // a value between 0 and color.length-1
    // Math.round = rounded value
    // Math.random() a value between 0 and 1
    var colorIndex = Math.round((colors.length - 1) * Math.random());
    var c = colors[colorIndex];
    // return the random color
    return c;
}

/**
 * 
 * @param {*} arrayBolas 
 * dibujo todas las bolas del array de bolas
 */
function dibujarBolas(arrayBolas) {
    arrayBolas.forEach(function(bola) {
        dibujarBola(bola);
    });
}

/**
 * 
 * @param {*} arrayBolas 
 * para mover todas las bolas del array de bolas
 */
function moverBolas(arrayBolas) {
    arrayBolas.forEach(function(bola) {
        bola.x += bola.velocidadX;
        bola.y += bola.velocidadY;
        evaluacionColision(bola);
    })
}

/*function mover(b) {
    b.x += b.velocidadX;
    b.y += b.velocidadY;
    evaluacionColision(b);
}*/

/**
 * 
 * @param {*} b 
 * para evaluar cuando ha chocado
 */
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

/**
 * 
 * @param {*} c 
 * dibuja una bola
 */

function dibujarBola(c) {
    contexto.save();
    contexto.translate(c.x, c.y);
    contexto.fillStyle = c.color;
    contexto.beginPath();
    contexto.arc(0, 0, c.radio, 0, 2 * Math.PI);
    console.log(c.radio);
    contexto.fill();
    contexto.restore();
}

/**
 * 
 * @param {*} r 
 * dibuja un rectangulo
 */
function dibujarRectangulo(r) {
    contexto.save();
    contexto.translate(r.x, r.y);
    contexto.fillStyle = r.color;
    contexto.fillRect(0, 0, r.ancho, r.alto);
    contexto.restore();
}
var canvas, contexto, w, h;
var xMonster = 10;
var yMonster = 10;
var monsterSpeed = 3;

window.onload = function init() {
    // called AFTER the page has been loaded
    canvas = document.querySelector("#miCanvas");

    // often useful
    w = canvas.width;
    h = canvas.height;

    // important, we will draw with this object
    contexto = canvas.getContext('2d');

    // ready to go !
    mainLoop();
}

function mainLoop() {
    contexto.clearRect(0, 0, w, h);
    //dibujamos
    dibujarMounstruo(xMonster, yMonster);
    //movemos
    xMonster += monsterSpeed;
    // 4 - test collisions with vertical boundaries
    if (((xMonster + 100) > w) || (xMonster < 0)) {
        // collision with left or right wall
        // change the direction of movement
        monsterSpeed = -monsterSpeed;
    }

    // 5 - request a new frame of animation in 1/60s
    requestAnimationFrame(mainLoop);
}

function dibujarMounstruo(x, y) {
    contexto.save();

    // translate the coordinate system, draw relative to it
    contexto.translate(x, y);

    // (0, 0) is the top left corner of the monster.
    contexto.strokeRect(0, 0, 100, 100);

    // eyes, x=20, y=20 is relative to the top left corner
    // of the previous rectangle
    contexto.fillRect(20, 20, 10, 10);
    contexto.fillRect(65, 20, 10, 10);

    // nose
    contexto.strokeRect(45, 40, 10, 40);

    // mouth
    contexto.strokeRect(35, 84, 30, 10);

    // teeth
    contexto.fillRect(38, 84, 10, 10);
    contexto.fillRect(52, 84, 10, 10);

    // GOOD practice: restore the context
    contexto.restore();
}
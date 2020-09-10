var canvas, contexto, mousePos, mouseBoton, w, h;

window.onload = function init() {
    //canvas
    canvas = document.querySelector("#miCanvas");
    w = canvas.width;
    h = canvas.height;
    contexto = canvas.getContext('2d');

    //cuando mueve el mouse, escribe la posicion
    canvas.addEventListener('mousemove', function(evt) {
        mousePos = getMousePos(canvas, evt); //solo aqui calcula la posicion
        var mensaje = 'posicion del mouse: ' + mousePos.x + ',' + mousePos.y;
        EscribirMensaje(canvas, mensaje);
    }, false);

    //cuando hace click dice que boton fue y da las ccoordenadas
    canvas.addEventListener('mousedown', function(evt) {
        mouseBoton = evt.button;
        var mensaje = 'boton del mouse: ' + evt.button + ' posicion del mouse: ' + mousePos.x + ',' + mousePos.y;
        EscribirMensaje(canvas, mensaje);
    }, false);

    //cuando se suelta el click
    canvas.addEventListener('mouseup', function(evt) {
        var mensaje = 'posicion del mouse: ' + mousePos.x + ',' + mousePos.y;
        EscribirMensaje(canvas, mensaje);
    }, false);
};


//escribir mensaje en el canvas
function EscribirMensaje(canvas, mensaje) {
    contexto.save();
    contexto.clearRect(0, 0, w, h);
    contexto.font = '12pt Calibri';
    contexto.fillStyle = 'black';
    contexto.fillText(mensaje, 10, 25);
    contexto.restore();
}

//devuelve la posicion del cursor
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(); //para obtener el tamaño y la posicion del canvas

    //devuelve un objeto con las posiciones
    return {
        x: evt.clientX - rect.left, //se lo restamos para que sea la posiion real relativa del canvas
        y: evt.clientY - rect.top
    };
}
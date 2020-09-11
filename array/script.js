let lista = document.querySelector('#lista');
let ordenarNombre = document.querySelector('#ordenarNombre');
let ordenarEdad = document.querySelector('#ordenarEdad');
let ordenarFeo = document.querySelector('#ordenarFeo');


let personas = [{
    nombre: 'marlon',
    edad: 25,
    feo: 'si'
}, {
    nombre: 'wil',
    edad: 5,
    feo: 'no'
}, {
    nombre: 'guerra',
    edad: 25,
    feo: 'talvez'
}];

window.onload = function init() {
    personas.forEach(function recorrer(persona) {
        imprimir(persona);
    })
};


function imprimir(persona) {
    var li = document.createElement('li');
    li.textContent = 'nombre: ' + persona.nombre + ' edad: ' + persona.edad + ' feo: ' + persona.feo
    lista.append(li);
    // lista.innerHTML += '<li> nombre: ' + persona.nombre + ' edad: ' + persona.edad + ' feo: ' + persona.feo + '</li>'; //esta es otra forma

}

function ordenarPorNombre(personas) {

}
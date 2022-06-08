/**
 * Se ejecuta la funcion al sacar el mouse de los links, cambiando la imagaen del canvas
 * @method cambiarCanvas
 */
function cambiarCanvas() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var aux = new Image();
    canvas.width = canvas.width;
    aux.src = "images/icon/insta.png";
    aux.onload = function () {
        context.drawImage(aux, 0, 0, 200, 200);
    }
}
/**
 * Muestra u oculta un div con los links a los perfiles de instagram de los autores
 *@method mostrar
 */
function mostrar() {
    let info = document.getElementById("ocultar");
    if (info.style.display === "block") {
        info.style.display = "none";
    } else {
        info.style.display = "block";
    }
}
/**
 * Se ejecuta la funcion al posar el mouse sobre el link Victoria Elliott
 * @method cambiarViki
 */
function cambiarViki() {

    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var aux = new Image();
    canvas.width=canvas.width;
    aux.src = "images/icon/viki_cuenta.jpg";
    aux.onload = function () {
        context.drawImage(aux, 0, 0, 200, 200);
    }
}
/**
 * Se ejecuta la funcion al posar el mouse sobre el link Leonardo Morabito
 * @method cambiarLeo
 */
function cambiarLeo() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var aux = new Image();
    canvas.width=canvas.width;
    aux.src = "images/icon/leo_cuenta.jpg";
    aux.onload = function () {
        context.drawImage(aux, 0, 0, 200, 200);
    }
}
/**
 * carga la pagina correcta según la elegida en el select
 * @method cargar_pagina
 */
function cargar_pagina() {
    const opcion = document.getElementById('camaras').value;
    switch (opcion) {
        case "seleccion":
            alert("Seleccione una opción");
            break;
        case "retrato":
            window.open('tipo_camara_1.html');
            break;
        case "publicitaria" :
            window.open('tipo_camara_2.html');
            break;
        case "arquitectura":
            window.open('tipo_camara_3.html');
            break;
        case "paisaje":
            window.open('tipo_camara_4.html');
            break;
        case "deportes":
            window.open('tipo_camara_5.html');
            break;
        case "macro":
            window.open('tipo_camara_6.html');
            break;
        case "viajes":
            window.open('tipo_camara_7.html');
            break;
        case "gastronomia":
            window.open('tipo_camara_8.html');
            break;
        case "byn":
            window.open('tipo_camara_9.html');
            break;
    }
}

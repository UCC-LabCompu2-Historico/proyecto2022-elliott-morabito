/**
 * carga la pagina correcta según la que necesite el usario
 * @method Nombre de la función
 * @const {string} opcion - almacena el nombre del estilo de fotografia que le gusta al usuario
 */
function cargar_pagina() {
    const opcion = document.getElementById('camaras').value;
    switch (opcion) {
        case "seleccion":
            alert("Sleccione una opción");
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
/*
var canvas1 = document.getElementById("lienzo1");
if (canvas1 && canvas1.getContext) {
    var ctx1 = canvas1.getContext("2d");
    if (ctx1) {
        ctx1.lineWidth = 2;
        ctx1.strokeStyle = "#00f";
        ctx1.fillStyle = "#ff0";
        ctx1.rect(60, 60, 150, 100);
        ctx1.fill();
        ctx1.stroke();
    }
}
*/
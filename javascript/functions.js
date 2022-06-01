/**
 * carga la pagina correcta según la que necesite el usario
 * @method Nombre de la función
 * @const {string} opcion - almacena el nombre del estilo de fotografia que le gusta al usuario
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

function dibujar(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

//cuadrados
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(24, 20, 150, 150);
    ctx.clearRect(42.9, 40, 110, 110);
    ctx.fillRect(57, 55, 80, 80);

    //circulo
    ctx.arc(96, 95, 25, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#004c96";
    ctx.fill();
}

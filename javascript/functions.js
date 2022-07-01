/**
 * Se ejecuta la funcion al sacar el mouse de los links, cambiando la imagen del canvas
 * @method cambiarCanvas
 */
function cambiarCanvas() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var aux = new Image();
    canvas.width = canvas.width;
    aux.src = "images/icon/insta.png";
    aux.onload = function () {
        context.drawImage(aux, 0, 0, 300, 300);
    }
}
//Canvas sistemas solar

const sun = new Image();
const moon = new Image();
const earth = new Image();
function init() {
    sun.src = "images/canvas/sun.jpg";
    moon.src = 'images/canvas/moon.png';
    earth.src = 'images/canvas/earth.png';
    window.requestAnimationFrame(draw);
}

function draw() {
    const ctx = document.getElementById('canvas').getContext('2d');
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 300, 300); // clear canvas

    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
    ctx.save();
    ctx.translate(150, 150);

    // Earth
    const time = new Date();
    ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    ctx.translate(105, 0);
    ctx.drawImage(earth, -12, -12);

    // Moon
    ctx.save();
    ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
    ctx.translate(0, 28.5);
    ctx.drawImage(moon, -3.5, -3.5);
    ctx.restore();

    ctx.restore();

    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();

    ctx.drawImage(sun, 0, 0, 300, 300);

    window.requestAnimationFrame(draw);
}

init();

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
    canvas.width = canvas.width;
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
    canvas.width = canvas.width;
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
            window.open('tipo_camara_1.html', "_self");
            break;
        case "publicitaria" :
            window.open('tipo_camara_2.html', "_self");
            break;
        case "arquitectura":
            window.open('tipo_camara_3.html', "_self");
            break;
        case "paisaje":
            window.open('tipo_camara_4.html', "_self");
            break;
        case "deportes":
            window.open('tipo_camara_5.html', "_self");
            break;
        case "macro":
            window.open('tipo_camara_6.html', "_self");
            break;
        case "viajes":
            window.open('tipo_camara_7.html', "_self");
            break;
        case "gastronomia":
            window.open('tipo_camara_8.html', "_self");
            break;
        case "byn":
            window.open('tipo_camara_9.html', "_self");
            break;
    }
}
/**
 * muestra una imagen en el canvas y la desplaza hacia la derecha
 * @method draw
 */

var img = new Image();
img.src = 'images/canvas/perfiles_3.jpg';
var CanvasXSize = 800;
var CanvasYSize = 200;
var speed = 10;
var scale = 1;
var y = -4.5;


var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function() {
    imgW = img.width * scale;
    imgH = img.height * scale;

    // si la imagen más grande que canvas
    if (imgW > CanvasXSize) {

        x = CanvasXSize - imgW;
    }
    if (imgW > CanvasXSize) {
        // si el ancho de imagen más grande que canvas
        clearX = imgW;
    } else {
        clearX = CanvasXSize;
    }
    // si la altura de la imagen más grande que canvas
    if (imgH > CanvasYSize) {

        clearY = imgH;
    } else {
        clearY = CanvasYSize;
    }

    // establecer frecuencia de actualización
    return setInterval(draw, speed);
}

function draw() {
    ctx = document.getElementById('canvas').getContext('2d');
    ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

    // si la imagen es <= tamaño de Canvas
    if (imgW <= CanvasXSize) {
        // reiniciar, comenzar desde el principio
        if (x > CanvasXSize) {
            x = -imgW + x;
        }
        // dibujar image1 adicional
        if (x > 0) {
            ctx.drawImage(img, -imgW + x, y, imgW, imgH);
        }
        // dibujar image2 adicional
        if (x - imgW > 0) {
            ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
        }
    }

    // la imagen es > tamaño de Canvas
    else {
        // reiniciar, comenzar desde el principio
        if (x > (CanvasXSize)) {
            x = CanvasXSize - imgW;
        }
        // dibujar imagen adicional
        if (x > (CanvasXSize-imgW)) {
            ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
        }
    }
    ctx.drawImage(img, x, y,imgW, imgH);
    // cantidad para moverse
    x += dx;
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
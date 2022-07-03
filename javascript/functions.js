var fondo = new Image();
var brillo = new Image();
function init() {
    fondo.src ="images/canvas/fondo.png";
    brillo.src = "images/canvas/brillo.png";
    window.requestAnimationFrame(draw);
}
function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');

    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0,0,300,300); // limpiar canvas

    ctx.fillStyle = "#00000066";
    ctx.strokeStyle = "#0099FF66";
    ctx.save();
    ctx.translate(150,150);

    // brillo
    var time = new Date();
    ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
    ctx.translate(105,0);
    ctx.fillRect(0,-12,50,24); // Sombra
    ctx.drawImage(brillo,-12,-12);
    ctx.save();

    ctx.restore();
    ctx.restore();

    ctx.beginPath();
    ctx.arc(150,150,105,0,Math.PI*2,false); // Órbita briullo
    ctx.stroke();

    ctx.drawImage(fondo,0,0,300,300);

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
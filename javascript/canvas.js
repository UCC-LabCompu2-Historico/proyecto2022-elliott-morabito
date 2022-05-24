
<canvas id="lienzo1" width="250" height="200">Su navegador no soporta canvas :( </canvas>

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

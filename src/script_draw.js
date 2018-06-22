
let canvas = document.getElementById('risovalka');
let ctx = canvas.getContext('2d');
ctx.lineWidth = 1;

canvas.onmousedown = function () {
 let x = event.offsetX;
 let y = event.offsetY;
 ctx.moveTo(x, y);

 canvas.onmousemove = function () {
     let x = event.offsetX;
     let y = event.offsetY;
     ctx.lineTo(x, y);
     ctx.stroke();

     canvas.onmouseup = function () {
         canvas.onmousemove = null;
     }

 }

}


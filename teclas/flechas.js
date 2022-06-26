let teclas ={
    UP: 38,
    DOWN: 40,
    LETF: 37,
    RIGTH:39
}
document.addEventListener('keyup',dibujarTeclado);

let d = document.getElementById('dibujo');
let lienzo = d.getContext('2d');

let x = 300;
let y = 300;

const dibujolienzo = (color, firstx,firsty,secondx,secondy) =>{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3
    lienzo.moveTo(firstx,firsty);
    lienzo.lineTo(secondx,secondy)
    lienzo.stroke();
    lienzo.closePath
    }

    dibujolienzo('black',0,0,600,0);
    dibujolienzo('black',0,0,0,600);
    dibujolienzo('black',600,0,600,600);
    dibujolienzo('black',0,600,600,600);

function dibujarTeclado(evento){

    let movimiento = 10;

switch(evento.keyCode){
    case teclas.UP:
      dibujolienzo('negro',x,y,x,y - movimiento)
      y = y - movimiento
        break;
    case teclas.DOWN:
        dibujolienzo('negro',x,y,x,y + movimiento)
      y = y + movimiento
        break;
    case teclas.LETF:
        dibujolienzo('negro',x,y,x- movimiento,y)
        x = x - movimiento
        break;
    case teclas.RIGTH:
        dibujolienzo('negro',x,y,x + movimiento,y)
        x = x + movimiento
        break;

        default:
}
}
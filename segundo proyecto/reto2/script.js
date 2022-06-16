let dibujos = document.getElementById("dibujo");
let lienzo = dibujos.getContext("2d");
let linea = 0;
let yfirts ,xsecond;

const  dibujolinea = (color,xfirst,yfirts,xsecond,ysecond) =>{    
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xfirst,yfirts);
    lienzo.lineTo(xsecond,ysecond);
    lienzo.stroke();
    lienzo.closePath;
}
dibujolinea('black',1,1,400,10)
dibujolinea('black',1,1,400,1);
dibujolinea('balck',1,1,1,400)
dibujolinea('balck',1,400,400,400);
dibujolinea('balck',400,1,400,400);


while (linea < 40){
yfirts = 10 * linea ;
xsecond = 10 * (linea + 1)
dibujolinea('black',0,yfirts,xsecond,400)
linea++
}



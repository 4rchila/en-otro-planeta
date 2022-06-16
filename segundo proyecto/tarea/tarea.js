let dibujo = document.getElementById('dibujaso')
let lienzo = dibujo.getContext('2d');
let linea = 0
let xprimera, yultima;
let yprimera , xultima;
let xresta, ysuma
let l = 60

function dibujolienzo(color, xfirst , yfirts, xsecond, ysecond){
    lienzo.beginPath();
    lienzo.strokeStle = color;
    lienzo.moveTo(xfirst,yfirts);
    lienzo.lineTo(xsecond,ysecond);
    lienzo.stroke();
    lienzo.closePath;
}
dibujolienzo('black',1,1,1,599);
dibujolienzo('black',1,1,600,1);
dibujolienzo('black',1,599,599,599);
dibujolienzo('black',599,1,599,599);


for(let i = 0;i < 60; i++){
     xprimera = 10 * linea
     yultima = 10 * (linea + 1)
    dibujolienzo('black',xprimera,1,600,yultima);
   linea++
    

   yprimera = 10 * linea;
   xultima = 10 * (linea + 1);
   dibujolienzo('black',1,yprimera,xultima,600);
   
   xresta = 600 / 60 * (l)
   ysuma = 10 * (linea + 1)
  dibujolienzo('black',xresta,1,1,ysuma)
  l = l - 1

  
  dibujolienzo('black',600,yprimera,xresta,600)
}



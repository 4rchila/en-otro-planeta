function cuantaslineasquieres(texto){
     texto = document.getElementById('cuantaslineas');
     let valor = parseInt(texto.value)
    let linea = 0
    let xprimera, yultima;
    let l = 60
    let espacio = ancho/valor

    for(let i = 0;i < 60; i++){
        xprimera = espacio * linea
        yultima = espacio * (linea + 1)
       dibujolienzo('black',xprimera,1,600,yultima);
      linea++   
   }

   dibujolienzo('black',1,1,1,599);
dibujolienzo('black',1,1,600,1);
dibujolienzo('black',1,599,599,599);
dibujolienzo('black',599,1,599,599);
}  

let dibujito = document.getElementById('dibujo')
let lienzo = dibujito.getContext('2d');
let ancho = dibujito.width;

function dibujolienzo(color, xfirst , yfirts, xsecond, ysecond){
    lienzo.beginPath();
    lienzo.strokeStle = color;
    lienzo.moveTo(xfirst,yfirts);
    lienzo.lineTo(xsecond,ysecond);
    lienzo.stroke();
    lienzo.closePath;
}



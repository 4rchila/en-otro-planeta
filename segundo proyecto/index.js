let dibujo = document.getElementById('dibujo');
let lienzo = dibujo.getContext("2d");


const dibujolienzo = (color, firstx,firsty,secondx,secondy) =>{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(firstx,firsty);
lienzo.lineTo(secondx,secondy)
lienzo.stroke();

}
// dibujolienzo('black',100,50,200,250)
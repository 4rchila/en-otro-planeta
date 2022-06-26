let d = document.getElementById('mouse');
let lienzo = d.getContext('2d');

d.addEventListener('mousedown', lineainicial);
d.addEventListener('mousemove', dibujolinea)
d.addEventListener('mouseup', lineafin)



const dibujolienzo = (color, firstx,firsty,secondx,secondy) =>{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3
    lienzo.moveTo(firstx,firsty);
    lienzo.lineTo(secondx,secondy)
    lienzo.stroke();
    lienzo.closePath();
    }

    let mouse = false

    function lineainicial (){
       mouse = true
    }
    function lineafin(){
       mouse = false
    }

    function dibujolinea(evento){
      if(mouse == true){
          dibujolienzo('black',evento.layerX - 1,evento.layerY - 1, evento.layerX + 1,evento.layerY + 1 );
      }
    }
       



    
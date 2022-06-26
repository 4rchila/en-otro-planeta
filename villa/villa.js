//teclas
let d = document.getElementById('dibujito')
let lienzo = d.getContext('2d')

//0bjetos
let fondo ={
    url: './tile.png',
    cargaOk: false
}
let vaca ={
  url: './vaca.png',
  cargaOk: false 
}
let pollo ={
    url: './pollo.png',
    cargaOk: false
}
let cerdo ={
    url: './cerdo.png',
    cargaOk: false
}
let lobo ={
    url: './lobo-f2316508-2cc4-4793-a37d-5b7c367487be.webp',
    cargaOK: false
}

//implementacion
fondo.imagen = new Image()
fondo.imagen.src = fondo.url
fondo.imagen.addEventListener('load', cargarfondo);

 vaca.imagen = new Image()
 vaca.imagen.src = vaca.url
 vaca.imagen.addEventListener('load', cargarvaca)

 pollo.imagen = new Image()
 pollo.imagen.src = pollo.url
 pollo.imagen.addEventListener('load', cargarpollo)

 cerdo.imagen = new Image()
 cerdo.imagen.src = cerdo.url
 cerdo.imagen.addEventListener('load', cargarcerdo)
 
 lobo.imagen = new Image()
 lobo.imagen.src = lobo.url
 lobo.imagen.addEventListener('load', lobocarga)

 const aleatorio = (min, maxi) =>{
    let resultado =  Math.floor(Math.random() * (maxi - min))
      return resultado 
  }

let cantidad = aleatorio(1,20)
let cantidadpollos = aleatorio(1,15)
let cantidadcerdos = aleatorio(1,10)

//functions
function cargarfondo(){
    fondo.cargaOk = true
    movelobo()
}

function cargarvaca(){
    vaca.cargaOk = true
    movelobo()
}

function cargarpollo(){
    pollo.cargaOk = true
    movelobo()
}

function cargarcerdo(){
    cerdo.cargaOk = true
    movelobo()
}
//lobo 

//teclas
let teclas ={
    UP: 38,
    DOWN: 40,
    LETF: 37,
    RIGTH:39
}
document.addEventListener('keyup', lobocarga);

let x = 170;
let y = 170;


function movelobo(evento){

    if(fondo.cargaOk == true){
        lienzo.drawImage(fondo.imagen, 0,0)
    }

    if(vaca.cargaOk == true){
        for(let v = 0;v< cantidad;v++){
            let vx = aleatorio(0,420)
            let vy = aleatorio(0,420)
            lienzo.drawImage(vaca.imagen, vx,vy)
        }
    }

    if(pollo.cargaOk == true){
        for(let p = 0; p < cantidadpollos;p++){
          let px = aleatorio(0,420)
          let py = aleatorio(0,420)
       lienzo.drawImage(pollo.imagen, px,py)
        }
      }


      if(cerdo.cargaOk == true){
        for(let c = 0; c < cantidadcerdos;c++){
          let cx = aleatorio(0,420)
          let cy = aleatorio(0,420)
         lienzo.drawImage(cerdo.imagen, cx,cy)
        }
      }

    lobo.cargaOK = true
    if(lobo.cargaOK == true){
        let movimiento = 1;
         lienzo.drawImage(lobo.imagen, x, y)

        switch(evento.keyCode){
            case teclas.UP:
              lienzo.drawImage(lobo.imagen, x,y - movimiento)
              y = y - movimiento;
                break;
            case teclas.DOWN:
                y = y + movimiento;
                lienzo.drawImage(lobo.imagen, x,y)
                break;
            case teclas.LETF:
                x = x - movimiento;
                lienzo.drawImage(lobo.imagen, x,y)
                break;
            case teclas.RIGTH:
                x = x + movimiento;
                lienzo.drawImage(lobo.imagen, x,y)
                break;
        
                default:
        }
    //    lienzo.drawImage(lobo.imagen, 170,170)
    }
}

//teclas



// function lobocorre(evento){

//     let movimiento = 1;

// switch(evento.keyCode){
//     case teclas.UP:
//       y = y - movimiento;
//       lienzo.drawImage(lobo.imagen, x,y)
//         break;
//     case teclas.DOWN:
//         y = y + movimiento;
//         lienzo.drawImage(lobo.imagen, x,y)
//         break;
//     case teclas.LETF:
//         x = x - movimiento;
//         lienzo.drawImage(lobo.imagen, x,y)
//         break;
//     case teclas.RIGTH:
//         x = x + movimiento;
//         lienzo.drawImage(lobo.imagen, x,y)
//         break;

//         default:
// }
// }







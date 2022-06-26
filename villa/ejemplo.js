var campo = document.getElementById("campoDeSeñales");
var lienzo = campo.getContext("2d");

var teclas = { 
    UP: 38, 
    DOWN: 40, 
    LEFT: 37, 
    RIGTH: 39,
    CINCO: 101, 
    DOS: 98, 
    UNO: 97, 
    TRES: 99
};

document.addEventListener("keydown", moverNave);
console.log(teclas);

var fondo = {
    url: "tile.png",
    cargaOK: false
}

var ovni = {
    url: "ovni.png",
    cargaOK: false
}

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargaFondo);

ovni.imagen = new Image();
ovni.imagen.src = ovni.url;
ovni.imagen.addEventListener("load", cargaOvni);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargaVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargaCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargaPollo);


var x = 500;
var y = 0;
var xv = 150;
var yv = 300;
var xc = aleatorio(0, 400);
var yc = aleatorio(0, 400);
var xp = aleatorio(0, 400);
var yp = aleatorio(0, 400);

function cargaFondo()
{
    fondo.cargaOK = true;
    moverNave();
}

function cargaOvni()
{
    ovni.cargaOK = true;
    moverNave();
}

function cargaVaca()
{
    vaca.cargaOK = true;
    moverNave();
}

function cargaCerdo()
{
    cerdo.cargaOK = true;
    moverNave();
}

function cargaPollo()
{
    pollo.cargaOK = true;
    moverNave();
}


function moverNave(evento)
{
    var movimiento = 1;

    if(fondo.cargaOK == true)
    {
        lienzo.drawImage(fondo.imagen, 0, 0);
    }

    if(cerdo.cargaOK == true)
    {
        lienzo.drawImage(cerdo.imagen, xc, yc);
        lienzo.drawImage(cerdo.imagen, xc + 30, yc + 15);
        lienzo.drawImage(cerdo.imagen, xc + -50, yc + 50);
    }
    
    if(pollo.cargaOK == true)
    {
        lienzo.drawImage(pollo.imagen, xp, yp);
        lienzo.drawImage(pollo.imagen, xp + 10, yp + 20);
        lienzo.drawImage(pollo.imagen, xp + 60, yp + 25);
    }

    if(vaca.cargaOK == true)
    {
        lienzo.drawImage(vaca.imagen, xv, yv);

        switch(evento.keyCode)
        {
            case teclas.CINCO:
                lienzo.drawImage(vaca.imagen, xv, yv - movimiento);
                yv = yv - movimiento;
            break;
            case teclas.DOS:
                lienzo.drawImage(vaca.imagen, xv, yv + movimiento);
                yv = yv + movimiento;
            break;
            case teclas.UNO:
                lienzo.drawImage(vaca.imagen, xv - movimiento, yv);
                xv = xv - movimiento;
            break;
            case teclas.TRES:
                lienzo.drawImage(vaca.imagen, xv + movimiento, yv);
                xv = xv + movimiento;
            break;
            default: 
                lienzo.drawImage(vaca.imagen, xv, yv);
            break;
        }
    }

    if(ovni.cargaOK == true)
    {
        switch(evento.keyCode)
        {
            case teclas.UP:
                lienzo.drawImage(ovni.imagen, x, y - movimiento);
                y = y - movimiento;
            break;
            case teclas.DOWN:
                lienzo.drawImage(ovni.imagen, x, y + movimiento);
                y = y + movimiento;
            break;
            case teclas.LEFT:
                lienzo.drawImage(ovni.imagen, x - movimiento, y);
                x = x - movimiento;
            break;
            case teclas.RIGTH:
                lienzo.drawImage(ovni.imagen, x + movimiento, y);
                x = x + movimiento;
            break;
            default: 
                lienzo.drawImage(ovni.imagen, x, y);
            break;
            
        }
    }
}


function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random()*(max - min + 1)) + min;
    return resultado;
}s
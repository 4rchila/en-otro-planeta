let  d = document.getElementById("dibujo");
let  lienzo = d.getContext("2d");


const dibujolienzo = (color, firstx,firsty,secondx,secondy) =>{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(firstx,firsty);
lienzo.lineTo(secondx,secondy)
lienzo.stroke();
lienzo.closePath
}
//nariz
dibujolienzo('white',0,400,70,400);
dibujolienzo('white',70,400,70,425);
dibujolienzo('white',70,425,75,440);
dibujolienzo('white',75,440,85,450);
dibujolienzo('white',85,450,100,447);
dibujolienzo('white',100,447,110,440);
dibujolienzo('white',110,440,115,460);
dibujolienzo('white',115,460,118,480);
dibujolienzo('white',118,480,120,490);
dibujolienzo('white',120,490,115,520);
dibujolienzo('white',115,520,110,530);
dibujolienzo('white',110,530,100,535);
dibujolienzo('white',100,535,90,540);
dibujolienzo('white',90,540,85,545);
dibujolienzo('white',85,545,75,570);
dibujolienzo('white',75,570,70,600);
dibujolienzo('white',70,600,60,620);
dibujolienzo('white',60,620,45,640);


//ojo
dibujolienzo('white',150,165,170,80);
dibujolienzo('white',170,80,175,73);
dibujolienzo('white',175,73,200,50);
dibujolienzo('white',200,50,220,35);
dibujolienzo('white',220,35,260,28);
dibujolienzo('white',260,28,270,25);
dibujolienzo('white',270,25,295,15);
dibujolienzo('white',295,15,270,45);
dibujolienzo('white',270,45,260,90);
dibujolienzo('white',260,90,250,110);
dibujolienzo('white',250,110,240,120);
dibujolienzo('white',240,120,220,130);
dibujolienzo('white',220,130,200,135)
dibujolienzo('white',200,135,185,138);
dibujolienzo('white',185,138,175,140);
dibujolienzo('white',175,140,150,165);

//dentro ojo
dibujolienzo('white',175,75,175,90);
dibujolienzo('white',175,90,178,100);
dibujolienzo('white',178,100,184,105);
dibujolienzo('white',184,105,195,110);
dibujolienzo('white',195,110,210,112);
dibujolienzo('white',210,112,215,111);
dibujolienzo('white',215,111,220,110);
dibujolienzo('white',220,110,225,107);
dibujolienzo('white',225,107,230,103);
dibujolienzo('white',230,103,235,97);
dibujolienzo('white',235,97,240,85);
dibujolienzo('white',240,85,242,75);
dibujolienzo('white',242,75,243,70);
dibujolienzo('white',243,70,244,65);
dibujolienzo('white',244,65,243,62);
dibujolienzo('white',243,62,242,60);
dibujolienzo('white',242,60,241,55);
dibujolienzo('white',241,55,238,50);
dibujolienzo('while',238,50,235,45);
dibujolienzo('while',235,45,230,40);
dibujolienzo('while',230,40,225,35)

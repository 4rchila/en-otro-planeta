let tierra = 9.8;
let marte = 3.7;
let jupiter = 24.8;
let peso = parseFloat(prompt('cuanto es tu peso en la tierra'));
let planeta = parseInt(prompt('elige un planeta\n 1 para marte\n 2 para jupiter'));
let nombre;


const tupeso = () =>{
switch(planeta){
 case  1:
   let result = peso * marte / tierra
   nombre = 'marte'
  const text = document.getElementById("jstyle")
  text.innerText = 'tu peso en '+ nombre +' es de ' + result.toFixed(2) + ' kilos'

  break;

  case 2:
   let result2 = peso * jupiter / tierra
   nombre = 'jupiter'
   const text2 = document.getElementById("jstyle")
   text2.innerText = 'tu peso en '+ nombre +' es de ' + result2.toFixed(2) + ' kilos'

   break;

   default:
      nombre = 'crypton'
      const text3 = document.getElementById("jstyle")
      text3.innerText = 'tu peso en '+ nombre +' es de ' + 100000000000000000 + ' kilos'
      break;
}
}
tupeso();




// const tupeso = () =>{
// if (planeta === 1){
// let result = peso * marte / tierra
//  nombre = 'marte'
// // document.write('tu peso en '+ nombre +' es de ' + result.toFixed(2) + ' kilos')
// const text = document.getElementById("jstyle")
// text.innerText = 'tu peso en '+ nombre +' es de ' + result.toFixed(2) + ' kilos'
// }else if(planeta === 2){
// let result2 = peso * jupiter / tierra
// nombre = 'jupiter'
// const text = document.getElementById("jstyle")
// text.innerText = 'tu peso en '+ nombre +' es de ' + result2.toFixed(2) + ' kilos'
// }else{
//    nombre = 'crypton'
//    const text = document.getElementById("jstyle")
//    text.innerText = 'tu peso en '+ nombre +' es de ' + result2.toFixed(2) + ' kilos'
// }
// }

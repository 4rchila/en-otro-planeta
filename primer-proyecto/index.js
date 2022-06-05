let tierra = 9.8;
let marte = 3.7;
let jupiter = 24.8;
let saturno = 10.44;
let venus = 8.87;
let neptune = 11.15;
let mercurio = 3.7
let luna = 1.62;


let peso = parseFloat(prompt('cuanto es tu peso en la tierra'));
let planeta = parseInt(prompt('elige un planeta\n 1. para Marte 2. para Jupiter\n 3. para Saturno 4.Venus\n 5. Mercurio 6.Luna'));
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

   case 3:
    let result3 = peso * saturno / tierra
    nombre = 'Saturno'
    const text3 = document.getElementById("jstyle")
    text3.innerText = 'tu peso en '+ nombre +' es de ' + result3.toFixed(2) + ' kilos'

    break;

    case 4:
      let result4 = peso *venus / tierra
   nombre = 'Venus'
   const text4 = document.getElementById("jstyle")
   text4.innerText = 'tu peso en '+ nombre +' es de ' + result4.toFixed(2) + ' kilos'

   break;

   case 5:
    let result5 = peso * mercurio / tierra
    nombre = 'Mercurio'
    const text5 = document.getElementById("jstyle")
    text5.innerText = 'tu peso en '+ nombre +' es de ' + result5.toFixed(2) + ' kilos'

    break;

    case 6:
      let result6 = peso * luna / tierra
   nombre = 'Luna'
   const text6 = document.getElementById("jstyle")
   text6.innerText = 'tu peso en '+ nombre +' es de ' + result6.toFixed(2) + ' kilos'

   break;

   default:
      nombre = 'crypton'
      const text9 = document.getElementById("jstyle")
      text9.innerText = 'tu peso en '+ nombre +' es de ' + 100000000000000000 + ' kilos'
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

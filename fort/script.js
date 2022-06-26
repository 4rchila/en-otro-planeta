let numeros = 100;

for (let i = 1; i <= 100; i++){
let residuo3 = i % 3;
let residuo5 = i % 5;

if(residuo3 === 0 && residuo5 === 0){
    document.write('Fizz Bozz')
 }
else if(residuo3 === 0){

    document.write('Fizz')
}else if(residuo5 === 0){
   document.write('Bozz')
}
 else{
    document.write(i)
}
document.write('<br/>')
} 

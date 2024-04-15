// Laço de repetição While

let contadora = 1;
let numero;
let resultado;

numero = parseInt(prompt("Digite um número para saber sua tabuada"));

while(contadora < 11){
    resultado = numero * contadora;
    console.log(`${numero} X ${contadora} = ${resultado}`);
    contadora++; 

}

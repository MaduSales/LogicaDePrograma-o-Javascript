// Lê dois valores inteiros e apresenta a diferença do maior pelo menor

let valor3;
let valor1 = parseInt(prompt("Digite um valor"));
let valor2 = parseInt(prompt("Digite um outro valor"));

if (valor1 > valor2){
    valor3 = valor1 - valor2
} else{
    valor3 = valor2 - valor1
}
alert("O resultado é: " + valor3);
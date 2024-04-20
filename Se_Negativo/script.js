// Lê um valor inteiro e determina se é negativo ou positivo, e caso seja negativo, torna-o positivo
let valor2;
let valor1 = parseInt(prompt("Digite um valor inteiro positivo ou negativo"));


if (valor1 > 0){
    valor2 = valor1
    alert("O valor final será: " + valor2);
}else if (valor1 < 0){
    valor2 = valor1 * -1
    alert("O valor final será: " + valor2);
}else{
    alert("valor inválido!")
}



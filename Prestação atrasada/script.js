
let prestacao
let valor = parseFloat(prompt("Escreva o valor inicial da prestação"));
let taxa = parseFloat(prompt("Escreva o valor da taxa de juros com números inteiros"));
let tempo = parseFloat(prompt("Escreva em quantos meses está parcelado"));

prestacao = valor + (valor * taxa/100) * tempo
alert("O valor da prestação atualmente é de "+ prestacao +" reais");



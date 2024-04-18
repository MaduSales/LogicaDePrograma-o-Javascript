// Faz a conversão de dólares para reais
let real
let cotacao = parseFloat(prompt("Digite a cotação do dólar neste momento"));
let dolar = parseFloat(prompt("Escreva a quantidade de dólares que deseja converter"));

real = cotacao * dolar;

alert(`Este valor na moeda brasileira é R$${real}`)
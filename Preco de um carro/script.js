// Mostra o preço de um carro para um consumidor

let custoDeFabrica = parseFloat(prompt("digite o custo de fabrica"));
let percentualDistribuidor = 28 / 100
let percentualImpostos = 45 / 100
let custoConsumidor = (custoDeFabrica * percentualDistribuidor) + (custoDeFabrica * percentualImpostos);

alert("o custo de um carro para o consumidor é " + custoConsumidor);

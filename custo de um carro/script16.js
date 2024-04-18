var custoFabrica, taxaDistribuidor, taxaImposto;

alert("Vamos ler o custo de um veículo e exibi-lo para o consumidor");
custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro"));

taxaDistribuidor = (28 / 100);
taxaImposto = (45 / 100);

valorVeiculo = (custoFabrica * taxaDistribuidor * taxaImposto + custoFabrica);
alert("O custo do veículo será de: " + valorVeiculo);
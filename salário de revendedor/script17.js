var carrosVendidos, valorTotalVendas, salarioFixo, salarioTotal, porCarroVendido, comissaoFixa;

alert("Vamos calcular o salário de um revendedor de carro");
carrosVendidos = parseInt(prompt("Digite a quantidade de carros vendidos"));
valorTotalVendas = parseInt(prompt("Digite o valor total das vendas de carros que o funcionário vendeu"));
salarioFixo = parseInt(prompt("Digite o valor do salário bruto"));
comissaoFixa = parseFloat(prompt("Digite o valor da comissão fixa do funcionário"));


porCarroVendido = (valorTotalVendas * 5 / 100);
comissaoFixa = (comissaoFixa * carrosVendidos);

salarioTotal = salarioFixo * porCarroVendido * comissaoFixa


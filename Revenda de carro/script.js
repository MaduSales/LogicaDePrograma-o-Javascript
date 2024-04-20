// Calcula o salário de um revendedor de carros usados

let salarioTotal
let salarioFixo = parseFloat(prompt("Digite o salario fixo"));
let carrosVendidos = parseFloat(prompt("Digite quantos carros foram vendidos"));
let comissao = parseFloat(prompt("Digite o valor da comissao"));
let valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas efetuadas"));

salarioTotal = salarioFixo + (carrosVendidos * comissao) + (valorTotalVendas * 0.05 * 100)
alert("O salário total do funcionário é: " + salarioTotal)

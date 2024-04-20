// Mostra o salário mensal de atualizado de um funcionário

let novoSalario;
let salarioAtual = parseFloat(prompt("Escreva o seu salário atual"));
let ajuste = parseFloat(prompt("Digite o percentual de ajuste "));

novoSalario = salarioAtual * ajuste / 100 + salarioAtual
alert("Você receberá " + novoSalario);

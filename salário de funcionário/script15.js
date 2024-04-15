var salarioAtual, reajuste, totalSalario;

salarioAtual = parseFloat(prompt("Digite o salário atual"));
reajuste = parseFloat(prompt("Digite o  reajuste em porcentagem"));
totalSalario = parseFloat(salarioAtual * reajuste / 100) + salarioAtual;

alert("O salário atual, com o reajuste, será de " + totalSalario)

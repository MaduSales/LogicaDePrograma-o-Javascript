var quantidadeMacas, macas, duzia;

quantidadeMacas = parseInt(prompt("Digite a quantidade de maçãs compradas"));

macas = (1.30 * quantidadeMacas);
duzia = (1.00 * quantidadeMacas);
if (quantidadeMacas >= 12){
    alert("O custo da compra foi de R$" + duzia);
} else {
    alert("O custo da compra foi de R$" + macas)
}

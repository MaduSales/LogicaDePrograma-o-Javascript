var anos, meses, dias, idade;

alert("Vamos calcular a sua idade em anos, meses e dias");
anos = parseInt(prompt("Digite a sua idade em anos"));
meses = parseInt(prompt("Digite quantos meses se passaram desde o seu último aniversário"));
dias = parseInt(prompt("Digite a quantidade de dias que passou do seu último aniversário"));

idade = (anos * 365) + (meses * 30) + dias;
alert("Você completou " + idade + " dias de vida")
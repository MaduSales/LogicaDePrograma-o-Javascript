var numero = parseInt(prompt("Digite um número de 1 a 7"));
var diaDaSemana = numero ==2? "Segunda-Feira":numero ==3? "Terça-Feira":numero ==4? "Quarta-Feira":numero ==5? "Quinta-Feira":numero ==6? "Sexta-Feira":numero ==7? "Sábado-Feira":numero ==1? "Domingo":"Valor inválido";
alert(diaDaSemana);
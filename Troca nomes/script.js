// Troca os valores apresentados
let auxiliar;
let nome1 = String(prompt("Escreva o nome de A"));
let nome2 = String(prompt("Escreva o nome de B"));

auxiliar = nome1
nome1 = nome2
nome2 = auxiliar
alert("o nome de A agora é " + nome1);
alert("o nome de B agora é " + nome2);

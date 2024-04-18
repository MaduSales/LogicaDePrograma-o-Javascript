// Calcula a quantidadde de litros de combustível usados na viagem de um automóvel que faz 12km por litro

let tempo;
let velocidade;
let distancia;
let litros;

tempo = parseFloat(prompt("Escreva o tempo gasto em minutos na viagem"));
velocidade = parseFloat(prompt("Escreva a velocidade média percorrida em quilômetros por hora"));
distancia = tempo * velocidade;
litros = distancia / 12;
alert("a quantidade gasta de combustível foi de "+ litros +" litros");

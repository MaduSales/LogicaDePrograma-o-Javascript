// Realiza a leitura para determinar se os valores são divisíveis por 2 e 3

let valor1 = parseInt(prompt("Digite um valor"));
let valor2 = parseInt(prompt("Digite um segundo valor"));
let valor3 = parseInt(prompt("Digite um terceiro valor"));
let valor4 = parseInt(prompt("Digite um quarto valor"));

if (valor1 % 2 == 0 && valor1 % 3 == 0){
    alert(`${valor1} é divisível por 2 e 3`);
} else{
    alert(`${valor1} NÃO é divisível por 2 e 3`);
}

if (valor2 % 2 == 0 && valor2 % 3 == 0){
    alert(`${valor2} é divisível por 2 e 3`);
} else{
    alert(`${valor2} NÃO é divisível por 2 e 3`);
}

if (valor3 % 2 == 0 && valor3 % 3 == 0){
    alert(`${valor3} é divisível por 2 e 3`);
} else{
    alert(`${valor3} NÃO é divisível por 2 e 3`);
}

if (valor4 % 2 == 0 && valor4 % 3 == 0){
    alert(`${valor4} é divisível por 2 e 3`);
} else{
    alert(`${valor4} NÃO é divisível por 2 e 3`);
}
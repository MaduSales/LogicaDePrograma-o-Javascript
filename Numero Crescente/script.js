// Coloca 3 valores em ordem crescente
let numeroAuxiliar

let n1 = parseFloat(prompt("Digite um valor"));
let n2 = parseFloat(prompt("Digite um valor"));
let n3 = parseFloat(prompt("Digite um valor"));

if (n1 > n2){
numeroAuxiliar = n1;
n1 = n2;
n2 = numeroAuxiliar;
}

if (n2 > n3){
    numeroAuxiliar = n2;
    n2 = n3;
    n3 = numeroAuxiliar;
}

alert(`A ordem será ${n1}, ${n2} e ${n3} `);
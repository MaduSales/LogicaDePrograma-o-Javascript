let contadora = 0;
let soma = 1;

while(contadora < 501){
    if(contadora % 2 == 0){
        soma = soma + contadora;
        console.log(contadora);
    }
    contadora++;
}
console.log("A soma dos números pares até 500 é " + soma);
// Determina se o valor digitado está dentro da faixa determinada ou não

let numero = parseInt(prompt("Digite um valor entre 0 e 9"));

if (numero <= 9 && numero >= 0){
alert("Este número é válido!")
} else{
    alert("Este número não é válido!")
}
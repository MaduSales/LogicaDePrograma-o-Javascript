let valor;

valor = parseInt(prompt("Digite um valor ou positivo ou negativo"));

if (valor < 0){
    valor = valor * -1;
}

alert(`O valor será ${valor}`)
// Faz a saudação/cumrpimento de acordo com o gênero

let nome = String(prompt("Digite o seu nome"));
let sx = String(prompt("Digite o seu sexo (feminino ou masculino)"))

if (sx === "feminino"){
    alert(`Olá Sra. ${nome}! Esperto que esteja bem.`);

} else if (sx === "masculino"){
    alert(`Olá Sr. ${nome}! Esperto que esteja bem.`);
} else{
    alert("Não reconhecido");
}
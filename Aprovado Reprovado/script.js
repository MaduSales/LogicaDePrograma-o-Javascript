let lerNota1;
let lerNota2;
let lerNota3;
let lerNota4;

let lerMediaFinal;

lerNota1 = parseFloat(prompt("Digite a primeira nota do aluno"));
lerNota2 = parseFloat(prompt("Digite a segunda nota do aluno"));
lerNota3 = parseFloat(prompt("Digite a terceira nota do aluno"));
lerNota4 = parseFloat(prompt("Digite a última nota do aluno"));

lerMediaFinal = (lerNota1 + lerNota2 + lerNota3 + lerNota4) / 4;

if (lerMediaFinal >= 5){
    alert("O aluno foi aprovado pois a média final dele foi " + lerMediaFinal);
} else{
    alert("O aluno foi desaprovado pois a média final foi " + lerMediaFinal)
}

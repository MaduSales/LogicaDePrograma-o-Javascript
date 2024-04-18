// Diz a nota da media final dos alunos
let mediaFinal;
let nota1 = parseFloat(prompt("Digite a primeira nota do aluno"));
let nota2 = parseFloat(prompt("Digite a segunda nota do aluno"));
let nota3 = parseFloat(prompt("Digite a terceira nota do aluno"));

mediaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;
alert(`A média do aluno foi ${mediaFinal}`);
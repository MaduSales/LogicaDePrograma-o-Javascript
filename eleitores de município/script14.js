var totalEleitores, votosBrancos, votosNulos, votosValidos, percentualBrancos, percentualNulos, percentualValidos;
alert("Vamos calcular o total de eleitores e a porcentagem de cada um dos votos");

totalEleitores = Number(prompt("Digite o total de eleitores"));
votosBrancos = Number(prompt("Digite o total de votos brancos"));
votosNulos = Number(prompt("Digite o total de votos nulos"));
votosValidos = Number(prompt("Digite o total de votos válidos"));

percentualBrancos = (votosBrancos / totalEleitores * 100);
percentualNulos = (votosNulos / totalEleitores * 100);
percentualValidos = (votosValidos / totalEleitores * 100);

alert("O resultado, em porcentagem de votos brancos é " + percentualBrancos + "%");
alert("O resultado, em porcentagem de votos nulos é " + percentualNulos + "%");
alert("O resultado, em porcentagem de votos válidos é " + percentualValidos + "%");
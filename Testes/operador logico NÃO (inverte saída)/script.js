let idade 
let condicao

idade = parseInt(prompt("Digite uma idade"))
condicao = String(prompt("Digite se ele é habilitado ou não"))

if (!(idade >= 18 || condicao =="habilitado")){

	alert("Pode dirigir")

}else{

	alert("Não pode dirigir")

}
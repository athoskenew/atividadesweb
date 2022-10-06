function mostrarNome(){
	var produto = document.getElementById('valor').value

	var parcelas = 1

	while (true){

	if (produto%parcelas === 0){
		parcelas++
	} else {
		break }
	}

	document.getElementById('resposta').innerHTML = `O total será R$: ${produto} \n
	Dividido em até ${parcelas} de ${produto/parcelas}`
}

//adicionando o event listener para capturar click do botão
var mostrar = document.getElementById('mostrar')
mostrar.addEventListener("click", mostrarNome)


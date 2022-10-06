//questao5.js

function parcelasCompra(){
	var valor = document.getElementById('valor').value
	var parcelas = document.getElementById('parcelas').value
	var valor_restante = 0
	var parcelado = 0
	var parcelas_total = parcelado/parcelas

	if (valor%parcelas !== 0){
		valor_restante = valor%parcelas
		parcelado = valor - valor_restante

		parcelas_total = parcelado/parcelas
	} else{
		parcelas_total = valor/parcelas
	}


	document.getElementById('resposta').innerHTML = "O valor das parcelas será: " + parcelas+"x" +" de R$"+ parcelas_total + " e 1x de R$" + valor_restante
}

//adicionando o event listener para capturar click do botão
var mostrar = document.getElementById('mostrar')
mostrar.addEventListener("click", parcelasCompra)

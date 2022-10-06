//questao4.js

var ano = 1

while (ano === 1){

	ano = Number(prompt("Digite o ano e verifique se teve Copa do mundo \n ou (0) para sair: "))

	if (ano <= 1930 || ano === 1942 || ano === 1946 || ano%4 !== 2){
		alert(`Nesse ano não acontece copa: ${ano}`)
		if (ano === 0){ano = 0} else{ano = 1}
	} else if(ano%4 === 2){
		alert(`O ano de ${ano} é de copa!`)
		ano = 1
	}
}
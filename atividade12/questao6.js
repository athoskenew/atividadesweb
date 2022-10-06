function numeroPerfeito(){
    var numero = document.getElementById('numero').value;

    numero = parseFloat(numero);
    var soma = 0;
    var num_divisores = 0
    for (let index = numero-1; index > 0; index--) {
        if (numero % index === 0) {
            soma += index;
            num_divisores = index
        }
    }
    if (soma == numero) {
        document.getElementById('resposta').innerHTML = `A soma dos divisores será: ${soma}, a quantidade de divisores é: ${num_divisores}, o numero é perfeito`;
    }
    else {
        document.getElementById('resposta').innerHTML = `A soma dos divisores será: ${soma}, a quantidade de divisores é: ${num_divisores}, o numero não é perfeito`;
    }
}

var mostrar = document.getElementById('mostrar')
mostrar.addEventListener('click', numeroPerfeito)
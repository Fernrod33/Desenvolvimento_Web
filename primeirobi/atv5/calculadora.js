const valorConta = 100;
const percentualGorjeta = 15;

function calcularGorjeta() {
    const valorGorjeta = valorConta * percentualGorjeta / 100;
    const valorTotal = valorConta + valorGorjeta;
    return { valorGorjeta, valorTotal };
}

function exibirResultados(valorGorjeta, valorTotal) {
    console.log(`Valor da conta: R$ ${valorConta.toFixed(2)}, Valor da gorjeta (15%): R$ ${valorGorjeta.toFixed(2)}, Valor total a pagar: R$ ${valorTotal.toFixed(2)}`);
}

const resultado = calcularGorjeta();
exibirResultados(resultado.valorGorjeta, resultado.valorTotal);
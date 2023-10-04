function calcular() {
    const n = parseInt(document.getElementById('n').value);
    const p = parseInt(document.getElementById('p').value);

    const permutacaoResult = document.getElementById('permutacaoResult');
    const arranjoResult = document.getElementById('arranjoResult');
    const combinacaoResult = document.getElementById('combinacaoResult');

    const permutacao = calcularPermutacao(n, p);
    const arranjo = calcularArranjo(n, p);
    const combinacao = calcularCombinacao(n, p);

    permutacaoResult.textContent = permutacao;
    arranjoResult.textContent = arranjo;
    combinacaoResult.textContent = combinacao;
}

function calcularPermutacao(n, p) {
    if (n < p) {
        return "Erro: n deve ser maior ou igual a p.";
    }

    let resultado = 1;
    for (let i = n; i > n - p; i--) {
        resultado *= i;
    }

    return resultado;
}

function calcularArranjo(n, p) {
    if (n < p) {
        return "Erro: n deve ser maior ou igual a p.";
    }

    let resultado = 1;
    for (let i = n; i > n - p; i--) {
        resultado *= i;
    }

    return resultado;
}

function calcularCombinacao(n, p) {
    if (n < p) {
        return "Erro: n deve ser maior ou igual a p.";
    }

    const numerador = calcularPermutacao(n, p);
    const denominador = calcularPermutacao(p, p);

    return numerador / denominador;
}

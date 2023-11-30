function calcularTotal() {
    // Obter valores do usuário
    var codigo = document.getElementById('codigo').value;
    var quantidade = parseInt(document.getElementById('quantidade').value);

    // Definir os preços dos produtos
    var precoProdutoA = 5.0;
    var precoProdutoB = 10.0;
    var precoProdutoC = 15.0;

    // Inicializar o resultado
    var resultado = 0;

    // Calcular o total com base no código do produto
    switch (codigo) {
        case 'A':
        case 'a':
            resultado = precoProdutoA * quantidade;
            break;
        case 'B':
        case 'b':
            resultado = precoProdutoB * quantidade;
            break;
        case 'C':
        case 'c':
            resultado = precoProdutoC * quantidade;
            break;
        default:
            alert("Código de produto inválido.");
            return;
    }

    // Exibir o resultado na interface do usuário
    document.getElementById('result').innerText = "Total a pagar: R$ " + resultado.toFixed(2);
}

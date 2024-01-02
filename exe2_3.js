    function Promocao(){
        // cria referencia aos elementos da pagina
        var inVeiculo = document.getElementById('inVeiculo');
        var inPreco = document.getElementById('inPreco');
        var outVeiculo = document.getElementById('outVeiculo');
        var outEntrada = document.getElementById('outEntrada');
        var outParcelado = document.getElementById('outParcelado');
        // obtem conteudos dos campos de entrada
        var veiculo = inVeiculo.value;
        var preco = number(inPreco.value);
        // calcula os elementos da promocao
        var entrada = (preco / 0.5);
        var parcelado = entrada - preco;
        // altera o conteudo dos paragrafos da resposta
        outVeiculo.textContent = veiculo;
        outEntrada.textContent = 'Entrada de R$: ' + entrada;
        outParcelado.textContent = '+ 12x de R$: ' + parcelado;
        // cria uma referencia ao elemento mostrarPromocao

    }
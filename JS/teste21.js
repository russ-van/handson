function fazerContagem() {

    var exibirContador = document.getElementById("contador");
    var contador = 0;

    function atualizarContador() {
        exibirContador.textContent = contador;
    }
    atualizarContador();

    var intervalo = setInterval(function () {
        contador++;

        if (contador >= 10) {
            clearInterval(intervalo);
        }

        atualizarContador();
    }, 1000); // Atualização em 1000 milissegundos
};

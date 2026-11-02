// Aqui ficará nosso JavaScript
// referente as caixinhas dos animais
const botoes = document.querySelectorAll(".nome-animal");

botoes.forEach(function(botao) {

    botao.addEventListener("click", function() {

        // Localiza as informações da caixinha
        const id = botao.getAttribute("aria-controls");

        const informacoes = document.getElementById(id);

        // Verifica se está fechado
        const fechado = informacoes.hidden;

        // Abre ou fecha as informações
        informacoes.hidden = !fechado;

        // Atualiza o sinal de + e -
        botao.querySelector(".sinal").textContent =
            fechado ? "−" : "+";

        // Atualiza o estado do botão
        botao.setAttribute("aria-expanded", fechado);

    });

});

// Aqui ficará nosso JavaScript
// Referente as caixinhas dos animais
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

// Formulário
// Funcionalidade obrigatória: validação e confirmação simulada do formulário.

const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado-form");

if (formulario && resultado) {
  formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // Lê os campos e remove espaços extras.
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const email = document.getElementById("email").value.trim();
    const diasSelecionados = document.querySelectorAll('input[name="semana[]"]:checked'); // Lê apenas os checkboxes de dias da semana que estão marcados

    // Mensagens de erro.
    let erros = [];

    if (nome.length < 2) { // Nome deve ter pelo menos 3 caracteres
      erros.push("O nome deve ter pelo menos 2 caracteres."); // Mensagem de erro
    }

    if (sobrenome.length < 2) { // Sobrenome deve ter pelo menos 2 caracteres
      erros.push("O sobrenome deve ter pelo menos 2 caracteres.");
    }

    const campoEmail = document.getElementById("email");
    if (email === "" || !campoEmail.checkValidity()) { // Checa se o email é válido
      erros.push("Digite um e-mail válido.");
    } 

    // Verifica o tamanho da lista verificado pelo .query acima.
    if (diasSelecionados.length === 0) {
      erros.push("Por favor, selecione pelo menos um dia da semana.");
    }
    
    // Se o array de erros tiver algum item, barra o envio e exibe os alertas
    if (erros.length > 0) {
      resultado.textContent = erros.join(" ");
      resultado.className = "resultado erro";
    } else {
      resultado.textContent = "Mensagem validada! Esta é uma confirmação simulada: nenhum e-mail foi enviado e nenhum dado foi armazenado.";
      resultado.className = "resultado sucesso";
      formulario.reset();
    }
  });
  }
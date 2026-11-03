// Aqui ficará nosso JavaScript
// Referente às caixinhas dos animais
const botoes = document.querySelectorAll(".nome-animal");

botoes.forEach(function (botao) {
  botao.addEventListener("click", function () {
    // Localiza as informações da caixinha
    const id = botao.getAttribute("aria-controls");
    const informacoes = document.getElementById(id);

    // Verifica se está fechado
    const fechado = informacoes.hidden;

    // Abre ou fecha as informações
    informacoes.hidden = !fechado;

    // Atualiza o sinal de + e -
    botao.querySelector(".sinal").textContent = fechado ? "−" : "+";

    // Atualiza o estado do botão
    botao.setAttribute("aria-expanded", fechado);
  });
});


// -------------------------------------------------------
// Formulário
// Funcionalidade obrigatória: validação e confirmação simulada do formulário.
// -------------------------------------------------------
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado-form");


// -------------------------------------------------------
// Máscara automática para o campo de telefone
// Objetivo: formatar o valor enquanto o usuário digita.
// Exemplo: 11912345678 -> (11) 91234-5678
// -------------------------------------------------------
const phoneInput = document.getElementById("phone");

if (phoneInput) {
  phoneInput.addEventListener("input", function () {
    // 1) Pega o valor atual do campo e remove tudo que não for número
    //    Exemplo: "(11) 91234-5678" vira "11912345678"
    let digits = phoneInput.value.replace(/\D/g, "");

    // 2) Limita para 11 dígitos
    //    11 dígitos = 2 do DDD + 9 do número
    digits = digits.slice(0, 11);

    // 3) Cria uma variável vazia para montar o texto final
    let formatted = "";

    // 4) Se houver algum número, começa pelo DDD
    //    Exemplo: "11" vira "(11)"
    if (digits.length > 0) {
      formatted = "(" + digits.slice(0, 2);

      // 5) Se já tiver mais de 2 dígitos, fecha o parêntese e adiciona espaço
      if (digits.length > 2) {
        formatted += ") ";
      }
    }

    // 6) Se houver mais de 2 números, continua montando o restante
    if (digits.length > 2) {
      const restante = digits.slice(2);

      // 7) Se o restante tiver até 5 dígitos, coloca sem hífen
      //    Exemplo: "91234"
      // 8) Se tiver mais de 5, coloca hífen
      //    Exemplo: "91234-5678"
      if (restante.length <= 5) {
        formatted += restante;
      } else {
        formatted += restante.slice(0, 5) + "-" + restante.slice(5);
      }
    }

    // 9) Atualiza o campo com o valor já formatado
    phoneInput.value = formatted;
  });
}


// -------------------------------------------------------
// Validação do formulário
// -------------------------------------------------------


if (formulario && resultado) {
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Lê os campos e remove espaços extras.
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const diasSelecionados = document.querySelectorAll('input[name="semana[]"]:checked');

    // Mensagens de erro.
    let erros = [];

    if (nome.length < 2) {
      erros.push("O nome deve ter pelo menos 2 caracteres.");
    }

    if (sobrenome.length < 2) {
      erros.push("O sobrenome deve ter pelo menos 2 caracteres.");
    }

    const campoEmail = document.getElementById("email");
    if (email === "" || !campoEmail.checkValidity()) {
      erros.push("Digite um e-mail válido.");
    }

    const campoPhone = document.getElementById("phone");
    if (phone === "" || !campoPhone.checkValidity()) {
      erros.push("Digite um telefone válido.");
    }

    if (diasSelecionados.length === 0) {
      erros.push("Por favor, selecione pelo menos um dia da semana.");
    }

    // Se houver algum erro, mostra a mensagem
    if (erros.length > 0) {
      resultado.textContent = erros.join(" ");
      resultado.className = "resultado erro";
    } else {
      resultado.textContent =
        "Mensagem validada! Esta é uma confirmação simulada: nenhum e-mail foi enviado e nenhum dado foi armazenado.";
      resultado.className = "resultado sucesso";
      formulario.reset();
    }
  });
}
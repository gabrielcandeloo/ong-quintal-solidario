// Aqui ficará nosso JavaScript

// -------------------------------------------------------
// Caixinhas dos animais (abrir/fechar informações)
// -------------------------------------------------------
// Seleciona os botões dos animais para abrir/fechar a informação
const botoes = document.querySelectorAll(".nome-animal");

botoes.forEach(function (botao) {
  botao.addEventListener("click", function () {
    // Localiza o bloco de informação relacionado ao botão
    const id = botao.getAttribute("aria-controls");
    const informacoes = document.getElementById(id);
    // Verifica se o conteúdo está escondido
    const fechado = informacoes.hidden;

    // Abre ou fecha a área de informações
    informacoes.hidden = !fechado;

    // Atualiza o sinal de + e - quando houver elemento do sinal
    const sinal = botao.querySelector(".sinal");
    if (sinal) {
      sinal.textContent = fechado ? "−" : "+";
    }

    // Atualiza o estado do botão para acessibilidade
    botao.setAttribute("aria-expanded", String(!fechado));
  });
});


// -------------------------------------------------------
// Máscara automática para o campo de telefone
// Exemplo: 11912345678 -> (11) 91234-5678
// -------------------------------------------------------
const phoneInput = document.getElementById("phone");

if (phoneInput) {
  phoneInput.addEventListener("input", function () {
    // 1) Remove tudo que não for número
    let digits = phoneInput.value.replace(/\D/g, "");

    // 2) Limita para 11 dígitos (2 do DDD + 9 do número)
    digits = digits.slice(0, 11);

    // 3) Monta o texto formatado
    let formatted = "";

    if (digits.length > 0) {
      formatted = "(" + digits.slice(0, 2);

      if (digits.length > 2) {
        formatted += ") ";
      }
    }

    if (digits.length > 2) {
      const restante = digits.slice(2);

      if (restante.length <= 5) {
        formatted += restante;
      } else {
        formatted += restante.slice(0, 5) + "-" + restante.slice(5);
      }
    }

    // 4) Atualiza o campo com o valor formatado
    phoneInput.value = formatted;
  });
}


// -------------------------------------------------------
// Validação do formulário (envio simulado)
// -------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");
  const resultado = document.getElementById("resultado-form");

  // Se a página não tem formulário, não faz nada (evita erro em outras páginas)
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede o recarregamento da página

    let mensagem = "";
    let valido = true;

    // 1. Ler os campos
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("phone").value.trim();
    const colaborar = document.getElementById("colaborar").value;

    // checkboxes marcados -> array com os dias
    const diasMarcados = Array.from(
      document.querySelectorAll('input[name="semana[]"]:checked')
    ).map(function (cb) {
      return cb.value;
    });

    // 2. Padrões de validação
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefone = /^\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}$/;

    // 3. Regras
    if (nome.length < 2 || sobrenome.length < 2) {
      mensagem = "❌ Nome e sobrenome devem ter pelo menos 2 caracteres.";
      valido = false;
    } else if (!regexEmail.test(email)) {
      mensagem = "❌ Digite um e-mail válido (ex.: voce@exemplo.com).";
      valido = false;
    } else if (!regexTelefone.test(telefone)) {
      mensagem = "❌ Telefone inválido. Use o formato (11) 91234-5678.";
      valido = false;
    } else if (colaborar === "Ser voluntário" && diasMarcados.length === 0) {
      mensagem = "❌ Para ser voluntário, escolha ao menos um dia da semana.";
      valido = false;
    } else if (colaborar === "Ser voluntário") {
      mensagem = `✅ Obrigado, ${nome}! Seu interesse em ser voluntário nos dias: ${diasMarcados.join(", ")} foi registrado.`;
    } else if (colaborar === "Adotar") {
      mensagem = `✅ Obrigado, ${nome}! Entraremos em contato sobre a adoção.`;
    } else if (colaborar === "Apadrinhar") {
      mensagem = `✅ Obrigado, ${nome}! Entraremos em contato sobre o apadrinhamento.`;
    }

    // 4. Mostrar o resultado
    resultado.textContent = mensagem;
    resultado.style.color = valido ? "green" : "red";

    // 5. Limpar o formulário se deu certo (envio simulado)
    if (valido) {
      form.reset();
    }

    // 6. Apagar a mensagem depois de 10 segundos
    setTimeout(function () {
      resultado.textContent = "";
    }, 10000);
  }); // fecha o addEventListener('submit')
});   // fecha o DOMContentLoaded

# 🐕 Ong-quintal-solidario
Projeto de desenvolvimento Front-End. Desenvolvimento de um site com HTML5, CSS e JavaScript para uma ONG fictícia.

> Projeto de fins **exclusivamente educacionais**.
---

## 👤 Integrantes

- Davi Ramos de Oliveira - RGM 49576216
- Gabriel Silva Candelo - RGM 48050938
- Gabriel Viana de Lima - RGM 48368881
- Gustavo Almeida Lima - RGM 48157899
- John Antoni Rodrigo Quispe - RGM 49450492
- Leon Correia da Silva - RGM 48036374
- Mariana Brito Farias - RGM 48134767
- Pablo Lorran - RGM 48146978
- Ynaê Ribeiro da Silva - RGM 47987111


---

##  Sobre a ONG

Quintal Solidário é uma ONG de abrigo animal que resgata, cuida e procura uma família para cada cachorro e gato encontrado nas ruas de São Paulo.

Causa: proteção e adoção responsável de animais abandonados.
Missão: resgatar, cuidar e encontrar um lar para animais abandonados.
Visão: uma cidade onde nenhum bicho precise viver na rua.
Valores: cuidado, respeito aos animais, transparência e adoção responsável.
Público-alvo: pessoas que querem adotar, apadrinhar ou ser voluntárias, além da comunidade em geral.

O site organiza as informações para que o visitante entenda rapidamente a causa e encontre, em poucos cliques, o jeito de ajudar que combina com a sua rotina

Projeto focado no desenvolvimento de um site simples para uma ONG fictícia ou real, utilizando os metódos e aprendizados adiquiridos em sala de aula. A ideia central do desenvolvimento desse site e testar nossas habilidades em front-end e desafiando nossa criativiade e conhecimento em HTML, CSS e JS.

---
## Páginas do site
 
| Página | Arquivo | Conteúdo |
|---|---|---|
| **Início** | `index.html` | Apresentação da ONG e os três jeitos de ajudar (Adotar, Apadrinhar, Ser voluntário). |
| **Sobre** | `sobre.html` | Quem somos, missão, visão, valores e "Histórias do quintal" com cartões de animais que abrem e fecham. |
| **Projetos** | `projetos.html` | As **três iniciativas** (Adotar, Apadrinhar, Ser voluntário), cada uma com descrição e como a comunidade pode ajudar, além da lista de animais disponíveis. |
| **Contato / Seja Voluntário** | `contato.html` | Formulário de inscrição com validação em JavaScript. |
 
Todas as páginas compartilham o mesmo **cabeçalho com menu de navegação** e o mesmo **rodapé** (endereço e telefone da ONG).
 
---
## Funcionalidades em JavaScript
 
O arquivo `script.js` implementa as interações do site:
 
### 1. Validação do formulário (`contato.html`)
- Valida **nome, sobrenome, e-mail e telefone** com expressões regulares.
- Se o tipo de colaboração for **"Ser voluntário"**, exige ao menos **um dia da semana** marcado.
- Exibe **mensagens de erro visíveis** na página (em vermelho) quando algo está incorreto.
- Com tudo correto, mostra uma **mensagem de confirmação simulada** (em verde), personalizada com o nome e o tipo de colaboração, **sem recarregar a página** (`event.preventDefault()`), e limpa o formulário.
- A mensagem some sozinha após 4 segundos.
### 2. Máscara automática de telefone
- Enquanto o usuário digita, o campo é formatado para `(11) 91234-5678`, aceitando apenas números.
### 3. Cartões de animais que abrem e fecham (`sobre.html`)
- Ao clicar no cartão do animal, as informações são **mostradas ou ocultadas**.
- Funciona em **cliques sucessivos e repetíveis**, atualizando o atributo `aria-expanded` do botão.
---

## Decisões técnicas

### Lógica aplicada em JavaScript
- **Funções** e *callbacks* para tratar eventos.
- **Condições `if / else if`** para as regras de validação do formulário.
- **`addEventListener()`** para os eventos `click`, `input`, `submit` e `DOMContentLoaded`.
- **Manipulação do DOM** (`textContent`, `hidden`, `style.color`, `setAttribute`) para mostrar mensagens e alterar a visibilidade de conteúdos.

## Responsividade
 
O layout se adapta a diferentes tamanhos de tela usando **Flexbox, Grid e Media Queries** (pontos de quebra em `900px`, `768px` e `480px`), testado para:
 
- **Desktop** (~1280 px)
- **Celular** (~390 px)
Sem sobreposição de texto e sem rolagem horizontal indevida.
 
---
 
## Acessibilidade
 
- **Estrutura semântica** do HTML para facilitar a leitura por tecnologias assistivas.
- Atributo **`alt`** nas imagens.
- **`<label>`** associado aos campos do formulário.
- `aria-expanded` e `aria-controls` nos cartões interativos.
- `role="status"` e `aria-live="polite"` na mensagem de resultado do formulário.
- `lang="pt-br"` declarado nas páginas.
---
 
## 📁 Estrutura de pastas
 
```
Ong-quintal-solidario/
├── index.html
├── sobre.html
├── projetos.html
├── contato.html
├── style.css
├── script.js
├── README.md
└── docs/
    ├── Logo-ONG.png
    ├── dog-mel.jpg
    ├── dog-bob.jpg
    ├── dog-nina.jpg
    └── cat-bento.jpg
```
 
---

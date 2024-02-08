// Select all HTML elements //
const headerTextArea = document.querySelector(".header-text-area");
const btnCriptografar = document.querySelector(".btn--criptografar");
const btnDescriptografar = document.querySelector(".btn--descriptografar");
const asideTextArea = document.querySelector(".aside-text-area");
const asideImg = document.querySelector(".aside-img");
const asideNenhumaMensagem = document.querySelector(".aside-nenhuma-mensagem");
const asideDigiteUmTexto = document.querySelector(".aside-digite-um-texto");
const asideBtnCopiar = document.querySelector(".btn--copiar");

// Criando uma funcao para remover acentos
function removerAcentos(texto) {
  return texto
    .replace(/[áàãâä]/g, "a")
    .replace(/[éèêë]/g, "e")
    .replace(/[íìîï]/g, "i")
    .replace(/[óòõôö]/g, "o")
    .replace(/[úùûü]/g, "u")
    .replace(/[ç]/g, "c")
    .replace(/[ñ]/g, "n");
}

// Craindo a Criptografia usando um array
const substituicoes = [
  { original: "e", substituto: "enter" },
  { original: "i", substituto: "imes" },
  { original: "a", substituto: "ai" },
  { original: "o", substituto: "ober" },
  { original: "u", substituto: "ufat" },
];

// Ocultando o botao copiar
asideBtnCopiar.style.display = "none";

// Novo Codigo com alert()
// Adicionando um evento ao botão Criptografar
btnCriptografar.addEventListener("click", function () {
  // Obtendo o texto digitado pelo usuário no headerTextArea
  let textoCriptografar = headerTextArea.value.trim(); // Removendo espaços vazios da string

  // Verificando se o texto contém letras maiúsculas, acentos ou caracteres especiais
  if (!textoCriptografar.match(/^[a-z\s]+$/)) {
    // Exibir um alerta pedindo ao usuário para inserir um texto válido
    alert("Please enter text with only lowercase letters and no accents.");

    // Limpar o campo de texto para que o usuário insira um novo texto
    headerTextArea.value = "";

    return; // Sair da função se o texto não estiver de acordo com as regras
  }

  // Aplicando as substituições com base no array substituicoes
  substituicoes.forEach((substituicao) => {
    textoCriptografar = textoCriptografar.replace(
      new RegExp(substituicao.original, "g"),
      substituicao.substituto
    );
  });

  // Exibindo o resultado do texto criptografado no asideTextArea
  asideTextArea.value = textoCriptografar;

  // Limpando o texto digitado no headerTextArea
  headerTextArea.value = "";

  // Esconder a imagem correct-1 e as mensagens do aside
  asideImg.querySelector(".correct-1").style.display = "none";
  asideImg.querySelector(".correct-2").style.display = "block";
  asideNenhumaMensagem.style.display = "none";
  asideDigiteUmTexto.style.display = "none";

  // Exibindo o botão Copiar
  asideBtnCopiar.style.display = "block";
});

// // Adicionando um ouvinte de evento de clique ao botão Criptografar
// btnCriptografar.addEventListener("click", function () {
//   // Obtendo o texto digitado pelo usuário no headerTextArea
//   let textoCriptografar = headerTextArea.value.trim(); // Removendo espacos vazios da string

//   // Removendo acentos e convertendo para letras minúsculas somente
//   textoCriptografar = removerAcentos(textoCriptografar).toLowerCase();

//   // mudanca
//   // Verificando se há texto no headerTextArea
//   if (textoCriptografar === "") {
//     // Exibir uma mensagem pedindo ao usuário que insira um texto
//     alert("Please insert a text before encrypting.");
//     return; // Sair da função se não houver texto
//   }
//   // mudanca

//   // Aplicando as substituições com base no array substituicoes
//   substituicoes.forEach((substituicao) => {
//     textoCriptografar = textoCriptografar.replace(
//       new RegExp(substituicao.original, "g"),
//       substituicao.substituto
//     );
//   });

//   // Exibindo o resultado do texto criptografado no asideTextArea
//   asideTextArea.value = textoCriptografar;

//   // Limpando o texto digitado no headerTextArea
//   headerTextArea.value = "";

//   // Esconder a imagem correct-1 e as mensagens do aside
//   asideImg.querySelector(".correct-1").style.display = "none";
//   asideImg.querySelector(".correct-2").style.display = "block";
//   asideNenhumaMensagem.style.display = "none";
//   asideDigiteUmTexto.style.display = "none";

//   // Exibindo o botão Copiar
//   asideBtnCopiar.style.display = "block";
// });

// Criando a Descriptografia usando um array
const descriptografia = [
  { original: "enter", substituto: "e" },
  { original: "imes", substituto: "i" },
  { original: "ai", substituto: "a" },
  { original: "ober", substituto: "o" },
  { original: "ufat", substituto: "u" },
];

// Adicionando um evento ao botao descriptografar
btnDescriptografar.addEventListener("click", function () {
  // Obtendo a mensagem criptografada do headerTextArea
  let mensagemCriptografada = headerTextArea.value.trim(); // Removendo espacos vazios da string

  //mudanca
  // Verificando se há texto no headerTextArea
  if (mensagemCriptografada === "") {
    // Exibir uma mensagem pedindo ao usuário que insira um texto
    alert("Please, enter a text before decrypting.");
    return; // Sair da função se não houver texto
  }
  // mudanca

  // Função para descriptografar a mensagem
  function descriptografarMensagem(mensagem) {
    return mensagem
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  }

  // Descriptografar a mensagem
  let mensagemDescriptografada = descriptografarMensagem(mensagemCriptografada);

  // Exibir a mensagem descriptografada no asideTextArea
  asideTextArea.value = mensagemDescriptografada;

  // Limpar o headerTextArea
  headerTextArea.value = "";

  // Remover a mensagem "Texto copiado com sucesso!" do asideTextArea, se estiver presente
  asideTextArea.placeholder = "";
});

// Adicionando funcionalidade ao botao copiar
asideBtnCopiar.addEventListener("click", function () {
  // selecionando o texto no asideTextArea
  asideTextArea.select();

  // Copiar o texto selecionado
  document.execCommand("copy");

  // Agora vamos remover a mensagem anterior
  asideTextArea.value = "";

  // Removendo foco do asideTextArea
  asideTextArea.blur();

  // Removendo mensagem anterior e adicionando uma nova mensagem
  asideTextArea.value = "";
  asideTextArea.placeholder = "Copied / Copiado.";
  asideTextArea.style.fontSize = "2rem";
  asideTextArea.style.color = "#0a3871";
});

// Adicionando traducao
document.addEventListener("DOMContentLoaded", function () {
  // Elementos HTML das bandeiras
  const brazilFlag = document.querySelector(".header-brazil");
  const usaFlag = document.querySelector(".header-usa");

  // Elementos HTML para tradução
  const headerTextArea = document.querySelector(".header-text-area");
  const mainP = document.querySelector(".main-p-text");

  // Botões Criptografar e Descriptografar
  const btnCriptografar = document.querySelector(".btn--criptografar");
  const btnDescriptografar = document.querySelector(".btn--descriptografar");

  // Elemento HTML para tradução do h2 com a classe aside-nenhuma-mensagem
  const asideNenhumaMensagem = document.querySelector(
    ".aside-nenhuma-mensagem"
  );

  // Elemento HTML para tradução do p com a classe aside-digite-um-texto
  const asideDigiteUmTexto = document.querySelector(".aside-digite-um-texto");

  // Elemento HTML para tradução do botão copiar com a classe btn--copiar
  const btnCopiar = document.querySelector(".btn--copiar");

  // Objeto para armazenar as traduções
  let translations = {};

  // Função para alternar entre os idiomas
  function toggleLanguage(language) {
    // Atualiza o conteúdo dos botões Criptografar e Descriptografar com base no idioma selecionado
    btnCriptografar.textContent = translations[language].btnCriptografar;
    btnDescriptografar.textContent = translations[language].btnDescriptografar;

    // Atualiza o placeholder da área de texto do cabeçalho com base no idioma selecionado
    headerTextArea.placeholder =
      translations[language].headerTextAreaPlaceholder;

    // Atualiza o texto da mensagem principal com base no idioma selecionado
    mainP.textContent = translations[language].mainP;

    // Atualiza o texto do h2 com a classe aside-nenhuma-mensagem com base no idioma selecionado
    asideNenhumaMensagem.textContent =
      translations[language].asideNenhumaMensagem;

    // Atualiza o texto do p com a classe aside-digite-um-texto com base no idioma selecionado
    asideDigiteUmTexto.textContent = translations[language].asideDigiteUmTexto;

    // Atualiza o texto do botão copiar com base no idioma selecionado
    btnCopiar.textContent = translations[language].btnCopiar;
  }

  // Evento de clique na bandeira do Brasil
  brazilFlag.addEventListener("click", function () {
    toggleLanguage("pt");
  });

  // Evento de clique na bandeira dos EUA
  usaFlag.addEventListener("click", function () {
    toggleLanguage("en");
  });

  // Função para carregar as traduções do arquivo JSON
  function loadTranslations() {
    fetch("translations.json")
      .then((response) => response.json())
      .then((data) => {
        translations = data;
        // Define o idioma padrão
        toggleLanguage("en");
      })
      .catch((error) => console.error("Erro ao carregar traduções:", error));
  }

  // Carrega as traduções quando a página é carregada
  loadTranslations();
});

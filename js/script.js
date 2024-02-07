// Select all HTML elements //
const headerTextArea = document.querySelector(".header-text-area");
const btnCriptografar = document.querySelector(".btn--criptografar");
const btnDescriptografar = document.querySelector(".btn--descriptografar");
const asideTextArea = document.querySelector(".aside-text-area");
const asieImg = document.querySelector(".aside-img");
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

// Adicionando um ouvinte de evento de clique ao botão Criptografar
btnCriptografar.addEventListener("click", function () {
  // Obtendo o texto digitado pelo usuário no headerTextArea
  let textoCriptografar = headerTextArea.value;

  // Removendo acentos e convertendo para letras minúsculas somente
  textoCriptografar = removerAcentos(textoCriptografar).toLowerCase();

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

  // Exibindo o botão Copiar
  asideBtnCopiar.style.display = "block";
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
  asideTextArea.placeholder = "Texto copiado com sucesso! Cole onde desejar.";
  asideTextArea.style.fontSize = "2rem";
  asideTextArea.style.color = "#0a3871";
});

//
//
//
//
// codigo que nao funcionou
// // Adicionando um evento ao botao criptografar
// btnCriptografar.addEventListener("click", function () {
//   // Obtendo o texto digitado pelo usuario
//   let texto = headerTextArea.value;

//   // Agora vamos percorrer o texto aplicando a criptografia
//   substituicoes.forEach((substituicao) => {
//     texto = texto.replace(
//       new RegExp(substituicao.original, "g"),
//       substituicao.substituto
//     );
//   });

//   // Agora vamos exibir a criptografia
//   asideTextArea.value = texto;

//   // Agora vamos limpar o texto digitado pelo usuario no headerTextArea
//   headerTextArea.value = "";
// });

//
//
//

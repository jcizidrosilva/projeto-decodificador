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

// Adicionando um ouvinte de evento de clique ao botão Criptografar
btnCriptografar.addEventListener("click", function () {
  // Obtendo o texto digitado pelo usuário no headerTextArea
  let textoCriptografar = headerTextArea.value.trim(); // Removendo espacos vazios da string

  // Removendo acentos e convertendo para letras minúsculas somente
  textoCriptografar = removerAcentos(textoCriptografar).toLowerCase();

  // mudanca
  // Verificando se há texto no headerTextArea
  if (textoCriptografar === "") {
    // Exibir uma mensagem pedindo ao usuário que insira um texto
    alert("Por favor, insira um texto antes de criptografar.");
    return; // Sair da função se não houver texto
  }
  // mudanca

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
    alert("Por favor, insira um texto antes de descriptografar.");
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
  asideTextArea.placeholder = "Texto copiado com sucesso! Cole onde desejar.";
  asideTextArea.style.fontSize = "2rem";
  asideTextArea.style.color = "#0a3871";
});

//
//
//
//
//
////
//
////
//
////
//
////
//
////
//
////
//
////
//
////
//
////
//
////
//
////
//
//
// //Adicionando um evento ao botao descriptografar
// btnDescriptografar.addEventListener("click", function () {
//   // Obtendo a mensagem criptografada do headerTextArea
//   let mensagemCriptografada = headerTextArea.value;
//   // console.log(mensagemCriptografada);

//   //Agora vamos exibir a mensagem criptografada no asideTextArea
//   asideTextArea.value = mensagemCriptografada;

//   // Agora vamos remover a mensagem criada ao clicar no botao copiar
//   asideTextArea.placeholder = "";
// });
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

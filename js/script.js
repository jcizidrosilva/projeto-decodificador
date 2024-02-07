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

btnCriptografar.addEventListener("click", function () {
  // Obtendo o resultado do texto digitado no header textarea
  let textoCriptografar = headerTextArea.value;

  // Removendo acentos e convertendo para letras minusculas somente
  textoCriptografar = removerAcentos(textoCriptografar).toLowerCase();

  // resultado do texto do header textarea salvo na variavel textoCriptografar
  console.log("Texto a ser criptografado:", textoCriptografar);

  // Exibindo resultado do texto fornecido pelo usuario no header textarea agora sendo exibido no aside textarea
  asideTextArea.value = textoCriptografar;
});

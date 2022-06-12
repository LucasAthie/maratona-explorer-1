const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não contar com isso.",
  "Melhor não te dizer isso agora.",
  "A meu ver, sim.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

//fazer pergunta
function fazerPergunta() {
  if(inputPergunta.value == ""){
    alert("Digite a sua pergunta")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

const pergunta = "<div>" + inputPergunta.value + "</div>"

  //gerar numero aleatorio
const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

console.log(respostas[numeroAleatorio])
elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

elementoResposta.style.opacity = 1;

//sumir dps de 3 segudos
setTimeout(function() {
  elementoResposta.style.opacity = 0;
  buttonPerguntar.removeAttribute ("disabled")
}, 3000)

}
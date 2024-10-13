function perguntar() {
  var resposta = document.querySelector(".resposta");
  resposta.innerHTML = "Carregando resposta...";

  const pergunta = document.querySelector(".pergunta").value;

  // dar um POST em https://mock-api.bootcamp.respondeai.com.br/api/v2/yesno enviando um objeto no formato { pergunta: "...?" }
  const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/yesno", { pergunta: resposta });

  // chamar quandoSucesso para resposta de sucesso da requisição
  promise.then(quandoSucesso)
  // chamar quandoErro para resposta de erro da requisição
  promise.catch(quandoErro)
}

function quandoSucesso(response) {
  const simOuNao = response.data.resposta;
  const imagem = response.data.imagem;

  criarSimOuNao(simOuNao, imagem);
}

function quandoErro(erro) {
  const elementoResposta = document.querySelector(".resposta");
  elementoResposta.innerHTML = "A pergunta está vazia!";
}

// esta função insere na tela uma imagem com a resposta em cima
function criarSimOuNao(simOuNao, imagem) {
  const elementoResposta = document.querySelector(".resposta");

  elementoResposta.innerHTML = `
    <img src="${imagem}">
    <div>${simOuNao}</div>
  `;
}

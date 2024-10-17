function consultarCep() {
  const cep = document.querySelector(".cep").value;

  const promessa = axios.get(`https://api.brasilaberto.com/v1/zipcode/${cep}`);

  promessa.then(cepAchadoComSucesso);
  promessa.catch(tratarErro);
}

function cepAchadoComSucesso(res) {
  const divImagem = (document.querySelector(".imagem-erro").innerHTML = "");
  alert(`Você mora em ${res.data.result.street}`);
}

function tratarErro (err) {
 const divImagem = document.querySelector(".imagem-erro");

 if (err.response && err.response.status === 404) {
  divImagem.innerHTML = "<img src='./img/404.jpg' />";
 } else {
  divImagem.innerHTML = "<img src='./img/error.jpg'/>";
 }
}
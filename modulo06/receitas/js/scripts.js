let receitas = [];

function renderizarReceitas() {
    const ul = document.querySelector(".receitas");
    ul.innerHTML = "";

    for (let i = 0; i < receitas.length; i++) {
        ul.innerHTML += `
            <li>
                <ion-icon name="fast-food-outline"></ion-icon>
                ${receitas[i].titulo}
            </li>
            `;
    }
}

function buscarReceitas() {
    const promessa = axios.get("https://mock-api.driven.com.br/api/v2/tastecamp/receitas");
    promessa.then(processarListaRecebida);
    promessa.catch(mostrarErro);
}

function processarListaRecebida() {
    console.log(resposta);
    receitas = resposta.data;
    renderizarReceitas();
}

function adicionarReceitas() {
    //pegar imputs e textareas => texto, value;
    const campoTitulo = document.querySelector(".nome-receita");
    const campoIngredientes = document.querySelector(".ingredientes-receita");
    const campoPreparo = document.querySelector(".modo-preparo-receita");

    // organizar os valores em um objeto;
    const novaReceita = {
        titulo: campoTitulo.value,
        ingredientes: campoIngredientes.value,
        preparo: campoPreparo.value
    }

    //1 - enviar receita;
    const promessa = axios.post("https://mock-api.driven.com.br/api/v2/tastecamp/receitas", novaReceita);
    // 2 - receber a resposta e ver como ela é;
    promessa.then(receberResposta);
    // 4 - executar uma função caso dê erro.
    promessa.catch(mostrarErro);
    // renderizar na tela.

}

// 3 - processar a resposta
function receberResposta(resposta) {
    console.log(resposta)

    alert(`A receita ${resposta.data.titulo} foi adicionada com sucesso!`);
    document.querySelector(".nome-receita").value = ""; //retornar vazio para limpar o input
    document.querySelector(".ingredientes-receita").value = "";
    document.querySelector(".modo-preparo-receita").value = "";

    buscarReceitas();
}

function mostrarErro(erro) {

    /* if (erro.response.status === 422) {
         alert("Verifique se você preencheu todos os campos a receita!")
     } else if(erro.response.status === 409) {
         alert("Uma receita com esse título ja existe! Escolha outro none!")
     } else {
         alert("Ocorreu um erro desconhecido, tente novamente mais tarde!")
     }
         */

    switch (erro.response.status) {
        case 422:
            alert("Verifique se você preencheu todos os campos a receita!");
            break;
        case 409:
            alert("Uma receita com esse título ja existe! Escolha outro none!")
            break
        default:
            alert("Ocorreu um erro desconhecido, tente novamente mais tarde!")
            break;
    }
}

//funções que são executadas quando abrir o site
buscarReceitas();
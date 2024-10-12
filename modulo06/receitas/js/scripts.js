const receitas = [
    { titulo: "Lasanha", ingredientes: "Massa, molho, recheio", preparo: "Coloque camadas em uma forma e asse por 30 minutos" },
    { titulo: "Strogonoff", ingredientes: "Carne, creme de leite, mostarda", preparo: "Refogue tudo em uma panela" },
    { titulo: "Pão", ingredientes: "Farinha, ovos, fermento", preparo: "Misture tudo, deixe descansar e asse" }
];

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

renderizarReceitas();

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


    //colocar no array;
    receitas.push(novaReceita);


    // renderizar na tela.
    renderizarReceitas();

}

console.log(axios)
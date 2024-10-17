const produtos = [
    { nome: "contra-filé", categoria: "açougue", preco: 55.9 },
    { nome: "laranja", categoria: "hortifruti", preco: 8.5 },
    { nome: "picanha", categoria: "açougue", preco: 75.3 },
    { nome: "batata", categoria: "hortifruti", preco: 12.1 }
];

// 1 exibir os produtos um por um no console

/*function forEach() { //exibe os itens sem retornar nada
    for (let i = 0; i < produtos.length; i++) {
        let prod = produtos[i];
        console.log(prod.nome)
    }
}

forEach();*/

function exibeNome(prod) {
    console.log(prod.nome);
}
produtos.forEach(exibeNome) // foreach so funciona em array


// 2 - Fazer uma promoção provisória terça que diminui o preço dos produtos em 10% 
// Manter o preço antigo na quarta e promoção acaba

/*function map() { // criou um novo array, com modificações a lista original
    let produtosAlterados = [];

    for (let i = 0; i < produtos.length; i++) {
        let prod = produtos[i];

        let novoProduto = {
            nome: prod.nome,
            categoria: prod.categoria,
            preco: prod.preco - (prod.preco * 0.1)
        };

        produtosAlterados.push(novoProduto);
    }

    return produtosAlterados;
}

const produtosComDesconto = map();
console.log(produtosComDesconto);*/

function atribuirDesconto(prod){
    let novoProduto = {
        nome: prod.nome,
        categoria: prod.categoria,
        preco: prod.preco - (prod.preco * 0.1)
    };
    return novoProduto;
}

const produtosComDesconto = produtos.map(atribuirDesconto);
console.log(produtosComDesconto);


// 3 retornar um array com apenas os produtos da categoria hortifruti

/*function filter() { // realiza filtragem
    const produtosFiltrados = [];

    for (let i = 0; i < produtos.length; i++) {
        let prod = produtos[i];

        if(prod.categoria === "hortifruti") {
            produtosFiltrados.push(prod);
        }
    }
    return produtosFiltrados
}

const hortifruti = filter()
console.log(hortifruti)*/

/*function selecionaHortifruti(prod) {
    //if(prod.categoria === "hortifruti") {
      //  return true;
   // } else {
        //return false;
    //}

    return prod.categoria === "hortifruti";
}

const hortifruti = produtos.filter(selecionaHortifruti);
console.log(hortifruti)*/



// 4 find

function buscarBatata(prod) {
    if (prod.nome === "batata") {
        return true;
    } else {
        return false;
    }
}

const batata = produtos.find(buscarBatata);
console.log(batata);

const hortifruti = produtos.filter((prod) => prod.categoria === "hortifruti")
console.log(hortifruti)
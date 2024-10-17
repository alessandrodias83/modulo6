// Forma 1 - declarativa
function somar(a, b) {
    return a + b;
}

// Forma 2 - função anonima ou expressão
const somar2 = function (a, b) {
    return a + b;
}

// Forma 3 - Arrow function
const somar3 = (a, b) => {
    return a + b
}

// Forma 4 - Simplificação da arrow function para quando a função só tem uma linha de retorno

const somar4 = (a, b) => a + b;

// Forma 5 - Simplificação: so tem 1 parametro, não precis de parentesis
const exibirNome = (nome) => console.log(`Olá, ${nome}`);

const verificarIdade = anoNascimento => {
    const idade = 2024 - anoNascimento;

    if (idade > 17) {
        return "Maior de idade";
    } else {
        return "Menor de idade"
    }
}
console.log(verificarIdade(2002));

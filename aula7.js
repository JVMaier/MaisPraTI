// Array ou Vetor
/* 

    let lista_compras = Array()

    lista_compras[0] = "Shampoo"
    lista_compras[1] = "Comdicionador"
    lista_compras['x'] = 100

    console.log(lista_compras)

    let listaFrutas = ['Banana', 'Maçã']

    console.log(listaFrutas)

    let viagem_lista = Array('Teste1', 'Teste2')

    console.log(viagem_lista)

*/

// -------------------------------------

// Arrays multidimensionais ou Matriz

/* 

    // criou array
    let lista_coisas = Array()
    // criou outro arrays dentro do primeiro
    lista_coisas['Frutas'] = Array()
    // deu valor para a primeira posição do array dentro do array
    lista_coisas['Frutas'][0] = 'Morango'
    lista_coisas['Frutas'][1] = 'Uva'
    lista_coisas['Frutas'][2] = 'Maçã'

    lista_coisas['Viagem'] = Array()
    lista_coisas['Viagem'][0] = 'Teste1'
    lista_coisas['Viagem'][1] = 'Teste1'

    console.log(lista_coisas)

    // inserção no final do array
    // PUSH
    lista_coisas['Frutas'].push('Banana')
    console.log(lista_coisas)

    // inserção no começo do array
    // UNSHIFT
    lista_coisas['Frutas'].unshift('Limão')
    console.log(lista_coisas)

    // Excluir elemento final
    // POP
    lista_coisas['Frutas'].pop()
    console.log(lista_coisas)

    // Excluir elemento no começo
    // SHIFT
    lista_coisas['Frutas'].shift()
    console.log(lista_coisas)

    // Pesquisa dentro do array
    // INDEXOF
    let produtos_lista = Array('Teste1', 'Teste2', 'Teste3')

    let aux = produtos_lista.indexOf('Teste1')

    if (aux === -1){
        console.log('Elemento não existe')
    } else {
        console.log('Elemento existe e esta na posição ' + aux)
    }

*/

// -------------------------

/* 

    // Ordenação

    let produtosOrednacao_lista = Array('Skate', 'Abacaxi', 'Primo')

    console.log(produtosOrednacao_lista.sort())

*/

// -------------------------

// Funções

/* 
    function calcularAreaTerreno ( largura, comprimento ){

        let area = largura * comprimento

        return area

    }

    let prompt = require('prompt-sync')()

    let lg = prompt('Digite largura: ')
    let cp = prompt('Digite comprimento: ')

    let resultado = calcularAreaTerreno(lg, cp)

    console.log(resultado)
    ----------------------------------

    //Global - permite que a variavel seja acessada em qualquer parte do codigo
    let variavelGlobal;
    let x = 5;
    let y = -2;
    //Função - apenas dentro da função.
    function variavelF (var1, var2){
        let variavelFuncao = var1 + var2 //Função
        return variavelFuncao;
    }
    variavelGlobal = variavelF(x,y); //Global
    //Bloco - variaveis dentro de blocos como if, for, while...
    if (variavelGlobal > 0){
        let maior = true //Bloco
        if (maior){
            console.log('OK')
        }
    }

    -----------------------

    // Função anonima (Sem nome)
    let anonima = function(){
    console.log('Olá')

    anonima()


}
*/

// --------------------------------

// CallBack

/* 

    let callbackSucesso = function(titulo){
        console.log(titulo)
    }

    let callbackErro = function(erro){
        console.log(erro)
    }

    function exibirArtigo(callbackSucesso, callbackErro) {
        if(true){
            callbackSucesso('Função de sucesso')
        } else {
            callbackErro('Função de erro')
        }
    }


    exibirArtigo(callbackSucesso, callbackErro)

*/

let soma = function(num1, num2) {
    return num1 + num2
}
// let subtracao = function(num1, num2) {
//     return num1 - num2
// }
// let multiplicacao = function(num1, num2) {
//     return num1 * num2
// }
// let divisao = function(num1, num2) {
//     return num1 / num2
// }

function calculadora(operacao, num1, num2) {
    switch(operacao){
        case "soma":
            let resultado = soma(num1, num2)
            return resultado
    }
}
console.log(calculadora("soma", 10, 10))

/* 
    const soma = (num1, num2) => num1 + num2;
    const subtracao = (num1, num2) => num1 - num2;
    const multiplicacao = (num1, num2) => num1 * num2;
    const divisao = (num1, num2) => {
    if (num2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
    };

    // Create a calculadora function that takes an operation and two numbers
    function calculadora(operacao, num1, num2) {
    const operations = {
        soma,
        subtracao,
        multiplicacao,
        divisao,
    };

    if (!operations[operacao]) {
        throw new Error("Invalid operation. Supported operations: soma, subtracao, multiplicacao, divisao");
    }

    return operations[operacao](num1, num2);
    }

    // Usage example
    try {
    console.log(calculadora("soma", 10, 10)); // Output: 20
    console.log(calculadora("subtracao", 10, 5)); // Output: 5
    console.log(calculadora("multiplicacao", 10, 5)); // Output: 50
    console.log(calculadora("divisao", 10, 2)); // Output: 5
    } catch (error) {
    console.error(error.message);
    }
*/
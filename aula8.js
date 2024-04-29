// Exercitando Array e Funções

// Exercicio 1: Somar todos os elementos de um array
/* 
    let elementos = [1, 2, 3, 4];

    function somaElementos(vetor){
        let soma = 0;
        for(let i = 0; i < elementos.length; i++){
            soma += vetor[i];
        }
        return soma;
    }
    console.log("A soma dos elementos: ", somaElementos(elementos))
*/

// Exercicio 2: Encontrar o mais numero em um array
/* 
    let elementos = [1, 2, 10, 5, 20, 77, 6, 5];

    function maiorElementos(vetor){
        let maior = vetor[0];
        for(let i = 1; i < vetor.length; i++){
            if (vetor[i] > maior){
                maior = vetor[i];
            }
        }
        return maior;
    }
    console.log("O maior Elemento é: ", maiorElementos(elementos));
*/

// Exercicio 3: Reverter arrays
/* 
    let elementos = [1, 2, 10, 5, 20, 77, 6, 5];

    const invertedList = elementos.slice().reverse();

    function reverterElementos(vetor){
        let vetroReverso = [];
        let contador = 0;
        for(let i = vetor.length - 1; i >= 0; i--){
            vetroReverso[contador] = vetor[i]
            contador ++
        }
        return vetroReverso;
    }

    function reverterElementos2(vetor){
        let vetroReverso2 = [];
        // sem colocar -1 ele consta um elemento a mais
        for(let i = vetor.length; i >= 0; i--){
            vetroReverso2.push(vetor[i]);
        }
        return vetroReverso2;
    }
        
    console.log("O Vetor inverso é: ", reverterElementos(elementos));
    console.log(invertedList);
    console.log(reverterElementos2(elementos));
*/

// MATRIZ --------------------

// Exercicio 4: Somar todos o os elementos de uma Matiz
/* 
    let elementos = [
        [1, 2, 3, 4], [5, 6, 7, 8]
    ];

    function somaMatriz(matriz){
        let soma = 0;
        for(let i = 0; i < matriz.length; i++){
            for(let j = 0; j < matriz[i].length; j ++){
                soma += matriz[i][j];
            }
        }
        return soma;
    }
    console.log("A soma dos elementos: ", somaMatriz(elementos));
*/

// Exercicio 5: Encontrar o maior numero em uma matriz
/*
    let elementos = [
        [1, 2, 10, 5], [20, 77, 6, 5], [100, 88, 90, 40, 120]
    ];

    function maiorElementoMatriz(matriz){
        let maior = matriz[0][0];
        for(let i = 1; i < matriz.length; i++){
            for(let j = 0; j < matriz[i].length; j ++){
                if (matriz[i][j] > maior){
                    maior = matriz[i][j];
                }
            }
        }
        return maior;
    }
    console.log("O maior Elemento é: ", maiorElementoMatriz(elementos));
*/

// -----------------------

// Funções avançadas: String
/*
    String é considerado VALOR primitivo, porem ao ser interpretado o JS converte em OBJ, possuindo propriedades e métodos.
*/
/* 
    console.log("João Vitor".length);
    console.log("João Vitor".charAt(7));

    let nome = 'Vitor';
    console.log(nome.indexOf('o'));

    let nome1 = 'João Vitor';
    console.log(nome1);
    let nomeAlterado = nome1.replace('João Vitor', 'Pica-Pau');
    console.log(nomeAlterado);

    let nome2 = 'João Vitor';
    console.log(nome2.substr('4', '3'));

    let nome3 = 'João Vitor';
    console.log(nome3.toLocaleUpperCase());
    console.log(nome3.toLocaleLowerCase());

    let nome4 = ' Teste Oi ';
    console.log('-' + nome4.trim() + '-');
*/

// ----------------------------

// Funções avançadas: Matematica
/* 
    let x = Math.ceil(10.100)
    console.log(x)

    let x1 = Math.floor(10.100)
    console.log(x1)

    let x2 = Math.round(10.49)
    let x22 = Math.round(10.5)
    console.log(x2)
    console.log(x22)

    let x3 = Math.random()
    console.log(x3)
*/

// -----------------------------------

// Funções avançadas: Datas
/* 
let data = new Date();
let data1 = new Date();

console.log(
  data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear()
);
console.log(data.getDate());
console.log(data.getMonth() + 1);
console.log(data.getUTCDate());
console.log(data.toLocaleDateString());

console.log(data.toString());
console.log(data.toString("yyyy-MM--dd"));

data.setDate(data.getDate() + 720);
console.log(data.toString());

console.log(data.getTime());

let miliSegundos = Math.abs(data.getTime(2023, 4, 20) - data1.getTime());

// Encontrar a quantidade de milisegundo entre duas datas
*/

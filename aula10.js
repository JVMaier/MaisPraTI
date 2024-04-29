const prompt = require("prompt-sync")();

// For in para iterar sobre as propriedadesdentro das notas, calcule a média da turma e imprima. Caso a media seja acima de 3.0 indique a turma esta aprovada

/*
    const professor = {
    nome: "Albert Einstein",
    materia: "Matematica",
    notas: {
        aluno1: 3.5,
        aluno2: 4.0,
        aluno3: 2.8,
    },
    };

    let somaNotas = 0;
    let numeroAluno = 0;

    for (let propriedades in professor.notas) {
    somaNotas += professor.notas[propriedades];
    numeroAluno++;
    console.log(professor.notas[propriedades]);
    console.log();
    }

    let media = somaNotas / numeroAluno;

    console.log(`A média é ${media}`);

    if (media >= 3) {
    console.log(`A turma esta aprovada`);
    } else {
    console.log(`A turma esta reprovada`);
    }
*/

// -----------------------------

// FOR OF para itarar sobre o array biblioteca. Para cada livro, verificar se foi publicado antes de 2000. Imprimir o titulo e o ano dos livros que atendem essa condição

/*
    const biblioteca = [
    { titulo: "12 Regras para Vida", autor: "Jordan Peterson", ano: 1925 },
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937 },
    { titulo: "Senhora do Jogo", autor: "Sidney Sheldon", ano: 2009 },
    { titulo: "Zé Carioca", autor: "Disney", ano: 1940 },
    { titulo: "Nação Dopamina", autor: "Anna Lembke", ano: 2021 },
    ];

    for (let i of biblioteca) {
    if (i.ano < 2000) {
        console.log(`o Livro ${i.titulo} foi publicado em ${i.ano}`);
    }
    }
*/

// -------------------------------------

// * Com forEach para iterar sobre o array, crie um objeto para armazenar a contagem de filmes por gênero
// * Para cada filme no array, verifique se o gênero já existe no objeto contagem.
// * Se existir, incremente a contagem, se não, adicione o gênero ao objeto com contagem inicial de 1
// * Após loop, imprima cada gênero e o número de filmes correspondente

/*
    const filmes = [
    { titulo: "Tropa de Elite", genero: "Ação" },
    { titulo: "Capitão Fantástico", genero: "Drama" },
    { titulo: "0 Poderoso Chefão", genero: "Crime" },
    { titulo: "Clube da Luta", genero: "Drama" },
    { titulo: "Oppenheimer", genero: "Biografia" },
    { titulo: "High School Musical", genero: "Musical" },
    { titulo: "Barbie", genero: "Comédia" },
    ];

    let contagem = {};

    // filmes.forEach(filme => {}
    filmes.forEach(function (filme) {
    if (contagem[filme.genero]) {
        contagem[filme.genero]++;
    } else {
        contagem[filme.genero] = 1;
    }
    });

    console.log(contagem)

    for (let genero in contagem) {
    console.log(`${contagem[genero]} filmes do genero ${genero}`);
    }
*/

// -------------------------------

/* PESEUISA BINARIA */
// O log(n)
/*
    let list = [];
    let number = Math.floor(Math.random() * 1000000);

    for (let i = 1; i <= 1000000; i++) {
    list.push(i);
    }

    let counter = 1;

    function binarySearch(list, number) {
    let searchToLeft = 0;
    let searchToRight = list.length - 1;

    while (searchToLeft <= searchToRight) {
        let makeToMiddle = Math.floor((searchToLeft + searchToRight) / 2);

        let guess = list[makeToMiddle];

        if (guess == number) {
        return makeToMiddle;
        } else if (makeToMiddle < number) {
        searchToLeft = makeToMiddle + 1;
        console.log(`${counter}ª Trying the number ${makeToMiddle}`);
        counter++;
        } else {
        searchToRight = makeToMiddle - 1;
        console.log(`${counter}ª Trying the number ${makeToMiddle}`);
        counter++;
        }
    }
    return null;
    }

    let result = binarySearch(list, number);

    if (result !== null) {
    console.log(`Found ${number} at index ${result}`);
    console.log(`There were ${counter} attempts`);
    } else {
    console.log(`${number} not found in the list`);
    }
*/

// -------------------------------------

// SPREAD - REST
// Spread = espalhar
// Rest = Juntar

/* SPREAD */
// let titulo = "Teste Movimento";

// console.log(...titulo);
// console.log([...titulo]);

// let listaTimes = ["Teste1", "Teste2", "Teste3"];
// let listaTimes1 = ["Teste4", "Teste5", "Teste6"];

// let listaAllTimes = ["Teste7", "Teste8", ...listaTimes, ...listaTimes1];
// console.log(listaAllTimes);

// let pessoa = { nome: "João", idade: 12 };
// let dadosAll = { abc: "teste", ...pessoa };
// console.log(dadosAll);

function soma(...param) {
  let resultado = 0;
  console.log(param);
  param.forEach((v) => (resultado += v));
  return resultado;
}
console.log(soma(3, 8, 5, 7));

function multiplicacao(m, ...p) {
    console.log(m)
    console.log(p)

    let resultado = 0;

    p.forEach((v) => (resultado += m * v));
    return resultado;
  }
  console.log(multiplicacao(3, 8, 5, 7));

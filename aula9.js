/*
    // Objetos em JS
    // passoa é a varivel mas nesse caso objeto
    const pessoa = {
    // Atributos ou valores
    nome: "João",
    idade: 24,
    profissao: "Desenvolvedor",
    email: "jvm@teste.com",
    dividas: true,
    saudacao: function () {
        console.log("Oi! Eu sou " + this.nome[0] + ".");
    },
    };

    console.log(pessoa);
    console.log(pessoa.nome);

    pessoa.nome = "Otavio";
    console.log(pessoa);
    console.log(pessoa["nome"]);

    delete pessoa.dividas;
    console.log(pessoa);

    pessoa.falar = function () {
    return `Meu nome é ${this.nome}, tenho ${this.idade} anos!`;
    };

    console.log(pessoa.falar());
    console.log(pessoa);
*/

// Exercicio: Criar um objeto qualquer
/*
    const notebook = {
        cor: "Prata",
        processador: "i7 8ªGen",
        tela: "FullHd",
        memoriaRam: 2,
        tecladoNumerico: false,
        semTaclado: function(){this.tecladoNumerico = true},
        comTaclado: function(){this.tecladoNumerico = false}
    }

    console.log(notebook)
*/

// Estruturas de repetição
// For in - For of - Fot each

// FOR IN - chave retorna o indice de um array ou o atributo de um objeto
// FOR OF - chave retorna os atributos de um objetos ou os valores de um array

/*
    const pessoa = {
    // Atributos ou valores
    nome: "João",
    idade: 24,
    profissao: "Desenvolvedor",
    email: "jvm@teste.com",
    dividas: true,
    saudacao: function () {
        console.log("Oi! Eu sou " + this.nome);
    },
    };

    // FOR IN. melhor em objetos
    for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
    }
    for (let chave in pessoa) {
    console.log(chave + ": " + pessoa["nome"]);
    }

    //FOR OF. Melhor com arrays
    let numeros = [10, 20, 100];

    for (let numero of numeros) {
    console.log(numero);
    }

    for (let numero1 in numeros){
        console.log(numero1 + ":" + numeros[numero1] )
    }
*/

// Exercicio: Uma lista de objetos que representam diferentes tipos de veiculos e sua caracteristicas
// Usar for in para listar todas a propriedades e valores de cada veiculo
// depois For of para para listar apenas os modelos

/* Teste */
/*
    const veiculo1 = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata",
    motor: "2.0L",
    preco: 60000,
    };

    const veiculo2 = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2023,
    cor: "Preto",
    motor: "1.5L",
    preco: 55000,
    };

    const veiculo3 = {
    marca: "Ford",
    modelo: "Fusion",
    ano: 2021,
    cor: "Branco",
    motor: "2.5L",
    preco: 62000,
    };

    const carros = {
    veiculos: [veiculo1, veiculo2, veiculo3],
    };

    for (let i of carros.veiculos) {
        console.log(`${i.marca}`);
    }

    for (let i in carros.veiculos) {
        console.log(carros.veiculos[i])
        const veiculo = carros.veiculos[i];
        console.log(
        `Marca: ${veiculo.marca}, Modelo: ${veiculo.modelo}, Ano: ${veiculo.ano}, Cor: ${veiculo.cor}, Motor: ${veiculo.motor}, Preco: ${veiculo.preco}`
        );
    }
*/

// Exercicio
/* 
    let carros1 = [
    {
        modelo: "Uno",
        marca: "Fiat",
        ano: 2000,
    },
    {
        modelo: "Compass",
        marca: "Jeep",
        ano: 2002,
    },
    {
        modelo: "Onix",
        marca: "Chevrolet",
        ano: 2002,
    },
    ];

    for (let i in carros1) {
    console.log(carros1[i]);
    }

    for (const i of carros1) {
    console.log(i.modelo);
    }
*/

// FOR EACH - metodo de arrays
// Perfeito para operaçãoes em arrays
// Executa um metodo para cada elemento (EM JS)
/* 
    let cores = ["Preto", "Azul", "Roxo"];

    cores.forEach(function (cor, indice) {
    console.log(indice + ": " + cor);
    });

    cores.forEach((cor, indice) => {
    console.log(indice + ": " + cor);
    });
*/

// Construa um array de números e calcule a soma total dos números e também imprima cada número multiplicado por dois.
/*
    let numeros = [1, 5, 6, 7, 8, 10, 60] 
    let soma = 0
    numeros.forEach((value) => {
    soma += value
    console.log(value + " x 2 "  + value * 2)
    })
    console.log(`Soma de seus numeros: ${soma}`)
*/

// ------------------------------

// Design pattern ->
/*
    let BicicletaFactory = function(cor, tipo, marca) {
        return {
            cor,
            tipo,
            marca
        }
    }

    let bicicleta1 = BicicletaFactory('Azul', 'Speed', 'Caloi')
    let bicicleta2 = BicicletaFactory('Preta', 'Mountain', 'Caloi')

    console.log(bicicleta1)
    console.log(bicicleta2)
*/
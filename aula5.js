// Exercicio 1: Par ou Impar
/*
    const prompt = require('prompt-sync')();

    let numero = parseInt(prompt('Digite um numero: '));

    // Outra forma
    // if (numero % 2 === 0)
    //     console.log("Numero par");
    // else 
    //     console.log("Numero impar");

    const parImpar = numero % 2 === 0 ? 'Numero Par' : 'Numero Impar'

    console.log(parImpar)
*/

// ---------------------------------

// Excercicio 2: Maior de dois numeros
/* 
    const prompt = require('prompt-sync')();

    let numero1 = parseInt(prompt('Digite o primeiro numero: '));
    let numero2 = parseInt(prompt('Digite o segundo numero: '));

    if(numero1>numero2)
    console.log("O primeiro numero é maior")
    else if (numero2>numero1)
    console.log("O segundo numero é maior")
    else
    console.log("Os numeros são iguais!")
*/

// ---------------------------------

// Exercicio 3: Triângulo
/* 
    const prompt = require('prompt-sync')();

    let lado1 = parseInt(prompt('Digite o primeiro lado do triangulo: '));
    let lado2 = parseInt(prompt('Digite o segundo lado do triangulo: '));
    let lado3 = parseInt(prompt('Digite o terceiro lado do triangulo: '));

    if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 +
    lado3 > lado1)
        console.log("É possivel formar um triangulo");
    else
        console.log("Não é possivel formar o triangulo");
*/

// ---------------------------------

// Exercicio 4: Calculadora 
/* 
    const prompt = require('prompt-sync')();

    let calcula1 = parseInt(prompt('Digite o primeiro numero: '));
    let calcula2 = parseInt(prompt('Digite o segundo numero: '));

    let operação = prompt("Qual operação deseja fazer? (+, -, /, *):")

    let resultado;

    if (operação === '+'){
        resultado = calcula1+calcula2
    } else if (operação === '-'){
        resultado = calcula1-calcula2
    }else if (operação === '*'){
        resultado = calcula1*calcula2
    }else if(operação === '/'){
        if(calcula2 !== 0){
            resultado = calcula1 / calcula2;
        } else {
            console.log("Erro:")
            resultado = undefined
        }
    } else{
        console.log("Operação invalida!")
    }

    if (resultado !== undefined){
        console.log("Resultado:", resultado)
    }
*/

// ---------------------------------

// Switch Case
/* 
    const prompt = require('prompt-sync')();

    let dia = parseInt(prompt('Digite o dia da semana: '));

    let nomeDia;

    switch(dia){
        case 1:
            nomeDia = "Domingo";
            break;
        case 2:
            nomeDia = "Segunda";
            break;
        case 3:
            nomeDia = "Terça";
            break;
        case 4:
            nomeDia = "Quarta";
            break;
        case 5:
            nomeDia = "Quinta";
            break;
        case 6:
            nomeDia = "Sexta";
            break;
        case 7:
            nomeDia = "Sabado";
            break;
        default:
            console.log("Digite um numero de 1 a 7");
            break;
    }

    console.log("O dia é:", nomeDia);
*/

// ---------------------------------

/*
    const prompt = require('prompt-sync')();

    let calcula1 = parseInt(prompt('Digite o primeiro numero: '));
    let calcula2 = parseInt(prompt('Digite o segundo numero: '));

    let operacao = prompt("Qual operação deseja fazer? (+, -, /, *):")

    let resultado;

    switch(operacao){
        case '+':
            resultado = calcula1+calcula2;
            break;
        case '-':
            resultado = calcula1-calcula2;
            break;
        case '*':
            resultado = calcula1*calcula2;
            break;
        case '/':
            if(calcula2 !== 0){
                resultado = calcula1 / calcula2;
            } else {
                console.log("Erro:")
                resultado = undefined
            }
        
    }
    if (resultado !== undefined){
        console.log("Resultado:", resultado)
    } else {
        console.log("Operação invalida!")
    }
*/

// ---------------------------------

// Estrutura de repetição

//FOR
/* 
    let tabuada5 = 5;
    let contador = 0;

    for( contador = 1; contador <=10; contador++ ){
    console.log(`${tabuada5} * ${contador} =`, tabuada5*contador);
    }
*/

// ---------------------------------
/* 
    for( i = 0; i <=100; i+=2 ){
        console.log(i)
    }

    ------

    let soma = 0
    for( i = 0; i <=100; i+=2 ){
        soma += i;
    }
    console.log(i)

    ------

    for( i = 10; i >=1; i-- ){
    console.log(i)
}
*/

// ---------------------------------

// WHILE
/*
    let i = 10;

    while(i>=1){
        console.log(i);
        i--
    }

    -------------

    let i = 100;

    while(i>=1){
        console.log(i);
        i-=5
    }

    -----------------

    let i = 5;
    while(i>=100){
        console.log(i);
        i+=5
    }

    ------------------

    let soma = 0
    let i = 1
    while(i<=1000){
        soma +=i
        i++
    }
    console.log(soma)

*/

//DO WHILE
/* 
    const prompt = require('prompt-sync')();
    let senha;

    do{
        senha = prompt('Digite a senha: ');
    } while(senha !== '1234'){
        console.log('Senha correta')
    }

    ------------------------


*/

/* 
    const prompt = require('prompt-sync')();
    const numeroCorreto = Math.floor((Math.random() * 10) + 1)
    let tentativa

    do{
        tentativa = parseInt(prompt("Adivinha o numero entre 1 e 10: "))
        if(tentativa < numeroCorreto){
            console.log("Tente um numero maior")
        } else if (tentativa > numeroCorreto){
            console.log("Tente um numero menor")
        }
    } while(tentativa !== numeroCorreto){

    }
    console.log('Você acertou')
*/

// VARIAVEIS E OPERARODES 
let variavel = 10;

variavel = 15;

//console.log(variavel);
/* faça um programa para calcular o valor de uma viagem.
você terá 3 variaveis, sendo elas:
1- preço do combustivel;
2- gasto médio de combustivel do carro por KM;
3- Distancia em KM da viagem. */


const precoCombustivel = 5.79;
const gastoMedioKmPorLitro = 10;
const km = 100;

const litrosConsumo = km/gastoMedioKmPorLitro;
const valorGasto = litrosConsumo * precoCombustivel;

//console.log(valorGasto);

// ESTRUTURAS CONDICIONAIS

const numero = 55;

const numeroPar = (numero % 2) === 0;

//console.log(numeroPar);

if (numeroPar) {
    //console.log('Ganhei!!')
}
/*if (!numeroPar) {
    console.log('Impar')
}*/
    else {
        //console.log('Impar')
    }
/*Faça um programa para calcular o valor de uma viagem
Você terá 5 variaveis, sendo elas:

1- Preço do alcool:
2- Preço da gasolina:
3- O tipo de combustivel que está no seu carro:
4- Gasto médio de combustivel do carro por KM:
5- Distância da viagem:

Imprima no console o valor que será gasto para realizar esta viagem*/

const precoAlcool = 5.79;
const precoGasolina = 6.66;
const kmPorLidtro = 10;
const distanEmKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanEmKm / kmPorLidtro;

if (tipoCombustivel === 'Etanol') { 
    const valorGast = litrosConsumidos * precoAlcool;
    //console.log(valorGast.toFixed(2));
} else {
    const valorGast = litrosConsumidos * precoGasolina;
    //console.log(valorGast.toFixed(2));
}

//EXE 01

const nota1 = 5;
const nota2 = 3;
const nota3 = 10;

const media = (nota1 + nota2+ nota3) / 3;

//console.log(media)

if (media < 5 ) {
    //console.log('Reprovado');

}
else if (media >= 5 && media <= 7 ) {
    //console.log('Recuperação');
} else {
    //console.log('Aprovado');
}

// EXE 02

const peso = 100;
const altura = 1.64;

const imc = peso/ (altura * altura);

//console.log('Seu IMC é: '+ imc);

if (imc < 18.5) {
    //console.log('Você esta abaixo do peso.');
} 
else if (imc >= 18.5 && imc <= 25 ) {
    //console.log('Seu peso esta ideal!');
}
else if (imc > 25 && imc <= 30 )  {
    //console.log(' Você esta acima do peso.');
}
else if (imc > 30 && imc <= 40) {
    //console.log(' Você é uma pessoa obesa.');
} else { 
    //console.log('Você esta com obsidade grave!!!');
}
// EXE 03


const precoEtiqueta = 100;
const fomraDePag = 1;

if (fomraDePag === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
}else if( fomraDePag === 2) {
    console.log(precoEtiqueta -( precoEtiqueta * 0.15));
}else if ( fomraDePag === 3) {
    console.log(precoEtiqueta)
}else { 
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}



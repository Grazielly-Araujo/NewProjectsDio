// Funções 

/*function myName (name) {
    console.log('My name is: ' + name);

}
myName('Freen Sarocha');
*/

/*function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
//console.log(quadradoDeDez);*/



/*function incrementJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros/100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementJuros(100, 10)); 
console.log(incrementJuros(50,5));
*/

/* EXE 01
O IMC - Indice de massa corporal é um critério da organização mundial de 
saúde para dar uma indicação sobre a... 
formula do  IMC: IMC = peso/ (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua 
condição de acordo com a tabela abaixo.

IMC em adultos Condição :

1 - Abaixo de 18.5: Abaixo do peso;
2 - Entre 18.5 e 25: Peso Normal;
3 - Entre 25 e 30: Acima do peso;
4 - Entre 30 e 40: Obeso;
5 - Acima de 40: Obesidade grave.

*/
/*
function calcularImc( peso,altura) {
    return peso / Math.pow(altura,2);
}

function classificarImc (imc) {
    if ( imc < 18.5) {
        return ('Abaixo do peso.');
    }else if( imc >= 18.5 && imc < 25){
        return ('Peso normal.');
    }else if (imc >= 25 && imc < 30) {
        return ('Acima do peso.');
    }else if (imc >= 30 && imc < 40){
        return 'Obeso.';
    }else {
        return 'Obesidade grave.';
    }
}

(function () {
    const peso = 85 ;
    const altura = 1.65;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}) ();

*/
/*
function maiorDeIdade (idade) {
    if (idade >= 18){
        console.log( 'Você é de maior');
    }else {
        console.log('De menor, Menor');
    }
}

maiorDeIdade (18);
*/


/*
Codigo condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista dinheiro ou pix, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas parcelas, preço normal de etiqueta mais juros de 10%.
*/

function criarDesc (valor, desconto) {
    return valor - (valor *(desconto/100));
}

function aplicarJuros (valor, juros) {
    return valor + (valor * (juros / 100 ));
}


const precoEtiqueta = 100;
const fomraDePag = 4;



if (fomraDePag === 1) {
    console.log(criarDesc(precoEtiqueta, 10) );
}else if( fomraDePag === 2) {
    console.log(criarDesc(precoEtiqueta, 15));
}else if ( fomraDePag === 3) {
    console.log(precoEtiqueta)
}else { 
    console.log(aplicarJuros( precoEtiqueta, 10));
}


















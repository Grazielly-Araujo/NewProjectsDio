// Objetos e Classes


// objeto literal ------ 


/*
const pessoa = {
    nome: 'Freen Sarocha',
    idade: 24
};

pessoa.altura = 1.65;

delete pessoa.idade;

console.log(pessoa)
*/



//''uma função dentro de um objeto = metodo''

/*
const pessoa = {
    nome: 'Sarocha',
    idade: 25,


    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }

};
pessoa.descrever();
*/

// CLASSES ****  Classe é a definição do que deve ser aquele objeto e instancia é uma ocorrencia**

/*
class Pessoa {
    nome;
    idade;

    descrever () {
        console.log( `Meu nome é ${this.nome} e minha idade é ${this.idade} `);
    }
}

const freen = new Pessoa();
freen.nome = 'Freen Sarocha';
freen.idade = 25;

const becky = new Pessoa();
becky.nome = 'Rebecca Armstrong';
becky.idade = 21;

console.log(becky);
becky.descrever();

console.log(freen);
freen.descrever();
*/

// CONSTRUCOTOR

/*
class Pessoa {
    nome;
    idade;
    anoDeNacimento;

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNacimento = 2023 - idade;
    }

    descrever () {
        console.log(`Meu nome é ${this.nome} , tenho ${this.idade} anos e nasci no ano de ${this.anoDeNacimento}`);
    }

}

//const freen = new Pessoa('Sarocha', 25);
//const becky = new Pessoa('Rebecca', 21);


//freen.descrever();
//becky.descrever();

// EXE

function compararPessoas( p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if (p2.idade > p1.idade ) {
        console.log(`${p2.nome} é mais velho que ${p1.nome} `);
    } else {
        console.log(`${p1.mome} e ${p2.nome} tem a mesma idade`);
    }
}

const freen = new Pessoa('Sarocha', 25);
const becky = new Pessoa('Rebecca', 21);

compararPessoas(freen, becky);
*/

// ***EXE 01***

/*
01 - Crie uma classe para representar carros.
OS carros possuem uma marca. uma cor e um gasto médio de combustivel por
KM rodado.
Crie um método que dado a quantidade de km e o preço do combustivel nos
dê o valor gasto em reais para realizar este percurso.

*/
/*
class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoDeViagem (distanciaEmKm, precoDeCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoDeCombustivel;

    }

}

const uno = new Carro('Fiat', 'Preto', 1/12);
console.log(uno.calcularGastoDeViagem(70,5));

const palio = new Carro('Fiat', 'Branco', 1/10);
console.log(palio.calcularGastoDeViagem(70,5));
*/

// *** EXE 02 ***

/*
02 - Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (calculo IMC = (imc = peso / (altura * altura)) );
Instancie uma pessoa chamada Jose,que tenha 70 kg e 1,75 de altura e peça 
ao jose para dizer o valor do seu IMC
*/
/*
class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calculoImc(){
        return this.peso / (this.altura * this.altura);
    }


}

const jose = new Pessoa ('José', 70, 1.75);

console.log(jose.calculoImc());
*/



class Pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade= idade;
    }


    descrever (){
        console.log(`nome: ${this.nome}; idade: `)
    }
}






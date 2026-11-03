//For clássico - Geralmente utilizado com iteráveis (array ou strings)
//For in - Retorna o índice ou chave (string, array, ou objetos)
//For of - Retorna o valor em si (iteráveis, arrays ou strings)
const frutas = ['Pêra', 'Maçã', 'Uva'];

const pessoa = {
    nome: 'Igor',
    sobrenome: 'Jardim',
    idade: 30
};

for (let i in frutas) {
    console.log(frutas[i]);
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

const pessoa = {
    nome: 'Igor',
    sobrenome: 'Felipe',
    idade: 26,
    endereco: {
        rua: 'Av. Brasil',
        numero : 370
    }
};

//const nome = pessoa.nome //atribuição normal

const {nome} = pessoa; //pega no objeto a variavel com o 
console.log(nome)


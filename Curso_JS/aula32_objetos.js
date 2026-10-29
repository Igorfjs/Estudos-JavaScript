//objetos

//essa função cria objetos Pessoa
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
    //também pode ser escrito assim:
    //return {nome, sobrenome, idade };
}

const pessoa1 = criaPessoa ('Igor', 'Jardim', 26);
const pessoa2 = criaPessoa ('Felipe', 'Moreira', 29);
const pessoa3 = criaPessoa ('Robson', 'Silva', 32);
const pessoa4 = criaPessoa ('Cleber', 'Miranda', 44);

console.log(pessoa1.nome, pessoa3.nome)

//funções podem ser montadas dentro de objetos
const pessoaQueFala = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    Fala() {
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoaQueFala.Fala();
pessoaQueFala.incrementaIdade();
pessoaQueFala.Fala();
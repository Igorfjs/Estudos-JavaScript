//Closure é quando uma função consegue acessar variáveis do escopo onde ela foi criada, mesmo depois que esse escopo já terminou de executar.

function criaMultiplicador(multiplicador) {
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
//é como se duplica ficasse assim:
// const duplica = function(n) {
// return n * 2;
// }
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(2));
// portanto, o parâmetro passado para duplica aqui, que armazenou uma função anteriormente,
// é referente ao n e não ao multiplicador
console.log(triplica(2));
console.log(quadruplica(2));
//funções

function saudacao(nome) {
    return `Bom dia, ${nome}`
}

console.log(saudacao('Igor'));
console.log(saudacao('João'));

function soma(x, y){
    const resultado = x + y;
    return resultado
}

console.log(soma(2,4));
console.log(soma(2,7));

const raiz = n => n ** 0.5; //arrow function, geralmente utilizado para funções com uma linha de código
console.log(raiz(9))

const raiz2 = function(n){ //faz a mesma coisa da arrow function acima
    return n ** 0.5;
}
console.log(raiz2(9))
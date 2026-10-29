//math

let num1 = 1.5;
//let num2 = Math.floor(num1); //arredonda pra cima
//let num2 = Math.ceil(num1); //arredonda pra baixo
let num2 = Math.round(num1); //arredonda automaticamente por aproximação
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); //retorna o maior valor entre os parâmetros passados
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); //retorna o menor valor entre os parâmetros passados
const aleatorio = Math.random () * (10 - 5) + 5; //retorna um valor aleatório de ponto flutuante entre 5 e 10
console.log(aleatorio)
const aleatorio2 = Math.round(Math.random () * (10 - 5) + 5); // retorna um valor aleatório inteiro entre 5 e 10
console.log(aleatorio2)
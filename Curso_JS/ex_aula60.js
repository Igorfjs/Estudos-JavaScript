// Escreva uma função que recebe 2 números e retorne o maior deles.

function maiorNumero(num1, num2){
    if (num1 > num2){
        return num1;
    }
    else if (num2 > num1){
        return num2;
    } 
    else {
        return ('Os números são iguais.');
    }
}

//mesma função utilizando arrow function e sem comparar se os números são iguais
const maiorNumero2 = (num1, num2) => num1 > num2 ? num1 : num2;

console.log(maiorNumero(4,4))
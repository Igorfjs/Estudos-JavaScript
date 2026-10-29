//atribuição por desestruturação (Arrays)
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000]; //array inicializado com valores e guardado na variável
const [um, dois, ...resto] = numeros; //aqui acontece a atribuição, as variaveis declaradas recebem os valores de acordo com o índice do array (0, 1, 2). O operador ... é chamado de 'rest' e pega o resto dos valores do array.
console.log(um, dois, resto);



//                    0          1          2
//                 0  1  2    0  1  2    0  1  2 
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numeros2[1][2]); //para acessar o valor 6 da lista numeros2 é preciso utilizar o índice da lista e depois o índice da posição do valor dentro dela

const [lista1, lista2, lista3] = numeros2;
console.log(lista2[2]) //outra forma de acessar o valor 6 da lista é atribuindo cada lista menor a uma variável e depois escolher pelo índice.
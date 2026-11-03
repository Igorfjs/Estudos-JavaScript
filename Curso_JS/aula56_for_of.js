//For clássico - Geralmente utilizado com iteráveis (array ou strings)
//For in - Retorna o índice ou chave (string, array, ou objetos)
//For of - Retorna o valor em si (iteráveis, arrays ou strings)

//            0123...
const nome = 'Igor Felipe';
const nomes = ['Igor', 'Luiz', 'Arnaldo'];

for (let i of nome){
    console.log(i);
}

for (let valor of nomes){
    console.log(valor);
}

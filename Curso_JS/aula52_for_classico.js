//For clássico - Geralmente utilizado com iteráveis (array ou strings)
//For in - Retorna o índice ou chave (string, array, ou objetos)
//For of - Retorna o valor em si (iteráveis, arrays ou strings)
const frutas = ['Pêra', 'Maçã', 'Uva'];

for(let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i} - ${frutas[i]}`);
}

for (i = 400; i <= 500; i += 10 ) {
    console.log(i);
}
 
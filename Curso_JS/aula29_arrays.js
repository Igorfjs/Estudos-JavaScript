//arrays
//as funções usdas em strings também funcionam aqui. Slice por ex.
 
const alunos = ['Luiz', 'Maria', 'João'];

alunos.unshift('Fabio'); //unshift adiciona no início
alunos.unshift('Luiza');

alunos.push('Kennedy'); //push adiciona no final
alunos.push('Cintya');

alunos.pop(); //remove o ultimo do array, pode salvar e uma variavel (let removido = alunos.pop()). Os índices são alterados
alunos.shift(); //igual o pop, remove do início. Os índices são alterador
delete alunos[1]; //remove o dado mas o índice permanece, porém vazio (undefined)

console.log(alunos.length) //lenght retorna o tamanho do array
console.log(alunos)
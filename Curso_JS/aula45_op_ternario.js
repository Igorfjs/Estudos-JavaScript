// (condição) ? 'Valor para verdadeiro' : 'Valor para falso'
const pontuacaoUsuario = 1001;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuário Normal'; //faz a mesma coisa que o if abaixo
console.log(nivelUsuario);

/*
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário Normal');
}
*/

const corUsuario = null
const corPadrao = corUsuario || 'Preta'; //verica e retorna o primeiro valor verdadeiro encontrado
console.log(corPadrao)
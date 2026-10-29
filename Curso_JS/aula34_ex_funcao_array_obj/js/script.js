function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }

    

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();


/*
Página carregada
        │
        ▼
document.querySelector('.form')
        │
        ▼
Encontra o formulário
        │
        ▼
addEventListener('submit')
        │
        ▼
Usuário clica em Enviar
        │
        ▼
recebeEventoForm(evento)
        │
        ▼
preventDefault()
(não recarrega a página)
        │
        ▼
form.querySelector('.nome')
form.querySelector('.peso')
...
        │
        ▼
Lê o texto digitado (.value)
        │
        ▼
Guarda no array pessoas
        │
        ▼
resultado.innerHTML += ...
        │
        ▼
Adiciona um novo parágrafo na div de resultados
*/
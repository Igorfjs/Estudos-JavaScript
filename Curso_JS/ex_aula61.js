//Escreva uma função chamada ePaisagem que recebe dois argumentos: largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.

//function ePaisagem(largura, altura){}

const ePaisagem = (largura, altura) => largura > altura;

if (ePaisagem(1920, 1080)){
    console.log('A imagem está em modo PAISAGEM (deitada)');
} else 
    console.log('A imagem está em modo RETRATO (em pé)');
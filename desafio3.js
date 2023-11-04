const posicaoInicial = 20
const totalPassos = 6

//TODO: Calcule a posição final do herói:/
//const posicaoFinal = calcPosition(posicaoFinal, totalPassos);

function calcPosition(x, y){
  var soma = x + y;
  return soma;
}

var z = calcPosition(posicaoInicial, totalPassos);

// Imprime a posição final
console.log("Posicao final do heroi:" + z);

//CODIGO COM COMENTARIOS DA PLATAFORMA

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const posiInicial = parseInt(gets());
const tPassos = parseInt(gets());

//TODO: Calcule a posição final do herói:
const posiFinal = calcPosition(posiInicial, tPassos);

function calcPosition(x, y){
  var soman = x + y;
  return soman
}

// Imprime a posição final
console.log("Posicao final do heroi: " + posiFinal);
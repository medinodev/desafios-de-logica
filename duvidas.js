// CODIGO 1
// A SAÍDA PODE SER COLOCADA COM PRINT ? 

if (pokemonEscolhido) {
    print("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
}

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
const totalSalas = parseInt(gets());
//Aqui temos uma demonstração de array com valores já predefinidos:
const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

//Aqui temos uma forma de loop para percorrer cada sala da masmorra:
for (let sala = 1; sala <= totalSalas; sala++) {
//Utilizamos o .includes() para verificar se um número está presente nos arrays:
    const temTesouro = salasComTesouro.includes(sala);
    const temMonstro = salasComMonstro.includes(sala);

//TODO: Agora implemente uma condição necessária para verificar e exibir se há tesouro na sala e se há montro na sala:
    if ( sala === 2 || sala === 4 || sala === 7 ) {
        print("Tesouro na sala " + sala + "!");
    } else if ( sala === 3 || sala === 6 || sala === 8 ) {
        print("Monstro na sala " + sala + "!");
    }
}

// CODIGO 2
// COMO ESTÁ SENDO REALIZADA A LEITURA DA VARIÁVEL minaIndex ? 


const quantidadeGolpes = parseInt(gets());


let minerais = ["Pedra", "Carvao", "Ferro", "Diamante"];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
  // Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
  let minaIndex = i % minerais.length;
  
  // TODO: Agora exiba o índice i, concatene com o caractere ":", após, concatene com tipo de minerais[minaIndex]:
  print(i + ': ' + minerais[minaIndex]);
}
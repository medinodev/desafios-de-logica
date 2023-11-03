const vitorias = 50
const derrotas = 23
//var x = saldoDeVit(vitorias, derrotas)

function saldoDeVit(x, y){
    var saldo = x - y;
    return saldo
}

var x = saldoDeVit(vitorias, derrotas)
//var h = x

//console.log(x)
//var y = nivel(x)

function nivel(z){

if(z < 10){
    var n = "Ferro"
    return n
}
else if(z >= 11 && z <= 20){
    var n = "Bronze"
    return n
}
else if(z >= 21 && z <= 50){
    var n = "Prata"
    return n
}
else if(z >= 51 && z <= 80){
    var n = "Ouro"
    return n 
}
else if(z >= 81 && z <= 90){
    var n = "Diamante"
    return n
}
else if(z >= 91 && z <= 100){
    var n = "Lendário"
    return n 
}
else if(z >= 101){
    var n = "Imortal"
    return n
}
}

var y = nivel(x);

console.log("O Herói tem de saldo de " + x + " está no nível de " + y );
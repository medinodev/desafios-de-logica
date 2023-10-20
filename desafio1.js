const name = 'Mcthink'
var quantDeXp = 8590

/*Quando voce pede entre dois numeros eu nao deveria considerar o numero inicial e final como no exemplo dois, se está entre o 1.001 e 2.000 eu nao deveria considera-los. Entretanto se eu nao considerar e meu xp foi 1.001 ele nao teria um nivel.*/

if(quantDeXp < 1000){
    var nivel = 'Ferro'
}
else if(quantDeXp >= 1001 && quantDeXp <= 2000){
    var nivel = 'Bronze'
}
else if(quantDeXp >= 2001 && quantDeXp <= 5000){
    var nivel = 'Prata'
}
else if(quantDeXp >= 6001 && quantDeXp <= 7000){
    var nivel = 'Ouro'
}
else if(quantDeXp >= 7001 && quantDeXp <= 8000){
    var nivel = 'Platina'
}
else if(quantDeXp >= 8001 && quantDeXp <= 9000){
    var nivel = 'Ascendente'
}
else if(quantDeXp >= 9001 && quantDeXp <= 10000){
    var nivel = 'Imortal'
}
else if(quantDeXp >= 10001){
    var nivel = 'Radiante'
}

console.log('O Herói de nome ' + name + ' está no nível de ' + nivel)
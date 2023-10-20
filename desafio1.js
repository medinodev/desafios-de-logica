let name = 'mcthink'
let quantDeXp = 8590

/*Quando voce pede entre dois numeros eu nao deveria considerar o numero inicial e final como no exemplo dois, se está entre o 1.001 e 2.000 eu nao deveria considera-los. Entretanto se eu nao considerar e meu xp foi 1.001 ele nao teria um nivel.*/

if(quantDeXp < 1000){
    let nivel = 'Ferro'
}
else if(1001 <= quantDeXp <= 2000){
    let nivel = 'Bronze'
}
else if(2001 <= quantDeXp <= 5000){
    let nivel = 'Prata'
}
else if(6001 <= quantDeXp <= 7000){
    let nivel = 'Ouro'
}
else if(7001 <= quantDeXp <= 8000){
    let nivel = 'Platina'
}
else if(8001 <= quantDeXp <= 9000){
    let nivel = 'Ascendente'
}
else if(9001 <= quantDeXp <= 10000){
    let nivel = 'Imortal'
}
else if(quantDeXp >= 10001){
    let nivel = 'Radiante'
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`)
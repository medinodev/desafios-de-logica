class character {
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

    personage(){
        console.log(`O  personagem se chama ${this.name} possui ${this.age} anos e eh um ${this.type}`)
    }

    atack(){
        if(this.type === "mago"){
            console.log(`o ${this.type} atacou usando magia.`)
        }
        else if(this.type === "guerreiro"){
            console.log(`o ${this.type} atacou usando espada.`)
        }
        else if(this.type === "monge"){
            console.log(`o ${this.type} atacou usando artes marciais.`)
        }
        else if(this.type === "ninja"){
            console.log(`o ${this.type} atacou usando shuriken.`)
        }
        
    }
}

let persona1 = new character("Khya", 200, "guerreiro")

persona1.personage()
persona1.atack()


//JSON - JavaScript Object Natation
//chave e valor com o objeto de tranferencia de dados

// >>> CODIGO NA FORMA DE JSON

let invoice = {
    name: "Mayara",
    age: 21,
    products: {
        0: ["Caderno"],
        1: ["Mouse"],
        2: ["Monitor"]
    },
    value: 2.000
}

generateInvoice(invoice)

// >>> ABAIXO SEGUE CÓDIGO NORMAL
/*
let nome = "Mayara";
let age = 21;
let products = ["caderno", "livro", "teclado"];
let value = [35, 50, 180.99];

generateInvoice(nome, age, products, value)

function generateInvoice(nome, age, products, value){
    console.log("O comprador é " + nome);
    console.log("Idade é " + age);
    console.log("O produto é " + products[0]);
    console.log("O valor é " + value[0]);
}
*/

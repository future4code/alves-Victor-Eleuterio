// Exercício 2 

const operator = process.argv[2]
const value1 = process.argv[3]
const value2 = process.argv[4]

if(operator && value1 && value2){
    switch (operator) {
        case "add":
            console.log(`\u001b[36mO resultado da sua operação  é: \u001b[32m${Number(value1) + Number(value2)}`)
            break;
        case "subt":
            console.log(`\u001b[36mO resultado da sua operação  é: \u001b[32m${Number(value1) - Number(value2)}`)
            break;
        case "mult":
            console.log(`\u001b[36mO resultado da sua operação  é: \u001b[32m${Number(value1) * Number(value2)}`)
            break;
        case "divi":
            console.log(`\u001b[36mO resultado da sua operação  é: \u001b[32m${Number(value1) / Number(value2)}`)
            break;
    }
}else{
    console.log("São necessários 3 argumentos")
}

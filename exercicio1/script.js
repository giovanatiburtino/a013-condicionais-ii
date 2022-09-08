const num = prompt("Digite um número aqui")

//Utilizando ifs aninhados

if (num % 2 === 0) {
    console.log("O número é divisível por 2")
} else {
    console.log("O número não é divisível por 2")
} if (num % 3 === 0) {
    console.log("O número é divisível por 3")
    } else {
    console.log("O número não é divisível por 3")
}


//Utilizando um operador lógico para unir duas operações relacionais

if(num % 2 === 0 || num % 3 === 0){
    console.log("O número é divisível por 2 ou 3")
} else {
    console.log("O número não é divisível por 2 ou 3")
}
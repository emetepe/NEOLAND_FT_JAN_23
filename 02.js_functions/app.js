// 02.js.basic_functions

// Iteración #1: Buscar el máximo

//Completa la función que tomando dos números como argumento devuelva el más alto.
function masAlto (num1, num2){
    if (num1>num2) {
        console.log(`El valor más alto entre ${num1} y ${num2} es ${num1}`)
    } else if (num2>=num1){
        console.log(`El valor más alto entre ${num1} y ${num2} es ${num2}`)
    }
}
masAlto(5, 9);
masAlto(9, 5);
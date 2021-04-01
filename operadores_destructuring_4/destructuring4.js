/**Agora vamos usar destructuring para passar parâmetros para uma função,
 * mas passando um array e não um objeto
 */
function rand([min = 0, max = 1000]) {

    //Inverte as variáveis se necessário
    if (min > max) [min, max] = [max, min] //aqui usamos destructuring

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //Arredonda para menos
}

// Algumas formas de chamar essa função:

//A seguir passamos um array, note que com objetos a vantagem é saber quais 
//são os parâmetro de max e min
console.log( rand([50, 40]) )

//Passando apenas um dos parâmetros, o max por default é 1000
console.log( rand([992]) )

//Passando apenas o parâmetro de max
console.log( rand([, 10]) )

//Passando um array vazio, os valores serão os default
console.log( rand([]) )

/**Se tentarmos passar um valor Null ou Undefined obteremos um erro
 * No caso a seguir é Undefined
 */
//console.log( rand() )

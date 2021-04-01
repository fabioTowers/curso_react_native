/**Usando destructuring com parametros de uma função */

//Pelas chaves já sabemos que vamos passar um objeto
//Função para calcular um número aleatório
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({ max: 50, min: 40 }))

//Podemos criar um objeto e passar para a função
// Passamos apenas o mínimo e o máximo por default é 1000
const obj = { min: 955 }
console.log( rand({ obj }) )

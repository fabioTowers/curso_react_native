const aprovados = ['Agatha', 'Daniel', 'Aldo', 'Daniel', 'Raquel']

/**Em um forEach precisamos colocar uma função chamada função de 
 * callback() e vamos passar como argumento o nome do item e 
 * o índice
 * 
 * Mas não é obrigatório passar argumentos para a função.
 */
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

/**Vamos testar com uma arrow function, passando um único parâmetro */
aprovados.forEach(nome => console.log(nome))

/**É possível armazenar uma função em uma variável e passar essa variável para o
 * forEach
 */
const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)

/**IMPORTANTE: Podemos passar como parâmetro apenas o nome, ou nenhum parâmetro,
 * mas para passar apenas o índice será necessário passar também o nome, pois
 * necessariamente o índice é o 2° argumento.
 */

/**O próprio array é passado como 3° argumento para a função de callback */
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

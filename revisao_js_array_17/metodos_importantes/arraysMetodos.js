/**Como esse array foi declarado como const não é possível atribuir
 * qualquer outra coisa a 'pilotos', mas ainda assim podemos adicionar, 
 * excluir e fazer diversas operações com seus elementos internos
 */
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

//.pop() remove o último elemento do array
pilotos.pop()
console.log( pilotos )

// .push() adiciona elemento na última posição
pilotos.push('Verstappen')
console.log( pilotos )

/**.shift() remove o primeiro elemento da lista (índice 0)*/
pilotos.shift()
console.log( pilotos )

/**.unshift() adiciona um elemento na primeira posição (índice 0) */
pilotos.unshift('Hamilton')
console.log( pilotos )

/**.slice pode adicionar ou remover elementos de um array: */
// A partir do índice 2, não vamos excluir nenhum elemento e vamos adicionar 2
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log( pilotos )

// A partir do índice 3 remover 1 elemento
pilotos.splice(3, 1)
console.log( pilotos )

/**.slice() retorna um novo array com parte do array original*/
const algunsPilotos1 = pilotos.slice(2) // retorna um novo array com os elementos a partir do índice 2
console.log( algunsPilotos1 )

// Novo array com os elementos do índice entre 1 e 4 (exclui o 4)
const algunsPilotos2 = pilotos.slice(1, 4)
console.log( algunsPilotos2 )

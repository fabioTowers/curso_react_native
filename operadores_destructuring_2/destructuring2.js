/**Para desestrutura um array usamos colchetes (e não chaves como nos objetos)
 * 
 * A seguir temos uma variável a recebendo o valore dentro do array
 */

const [a] = [10]

console.log(a)

/**No exemplo abaixo fica mais claro, podemos pular elementos, e 
 * deixar um valor padrão para eles.
 * 
 */
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]

console.log(n1, n3, n5, n6)

/**Agora vamos ver arrays de arrays, ou seja, matrizes, que são
 * arrays aninhados
 * 1° elemento ignorado
 * 2° elemento é um array (que ignoramos o 1° elemento e pegamos o 2° que é nota)
 */
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

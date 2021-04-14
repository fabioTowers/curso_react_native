/**Arrays em JS não são um tipo nativo, na realidade são objetos
 * com um índice inteiro positivo que inicia em zero que funciona
 * como chave
 * Array é uma função e quando instânciado é um objeto.
 * um Array literal usa colchetes e também é um objeto.
 */
console.log( typeof Array, typeof new Array, typeof [] )

/** Essa é uma das formas de criar arrays, funciona, mas não é 
 * muito comum e nem recomendada
 * Criamos uma let (e não const) porque vamos reatribuir valores
 * a essa variável (aprovados)
*/
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

/**Criando um array da forma literal (que é a mais recomendada) */
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

/**Quando tentamos acessar um elemento que não consta no array 
 * obtemos um undefined
*/
console.log(aprovados[3])

/**Podemos adicionar um elemento atribuindo um índice que ainda 
 * não foi ocupado
 */
aprovados[3] = 'Paulo'
console.log(aprovados[3])

/**Mas a forma mais simples e comum de adicionar um novo elemento
 * é pelo método .push(), pois nesse caso não precisamos saber
 * qual o próximo índice vazio
 */
aprovados.push('Abia')

/**Para saber o tamanho de um array usamos .length*/
console.log( aprovados.length )

/**Nesse exemplo o array possui 5 elementos, se tentarmos
 * adicionar um novo elemento ao índice 9 não há problema
 * algum. O que acontece é que os ídices de 5 a 8 terão valores
 * undefined e o tamanho do array vai pra 10
 */
aprovados[9] = 'Rafael'
console.log( aprovados.length )

/**Os índices intermediários agora são undefined */
console.log( aprovados[8] === undefined )

console.log( aprovados )

/**O método .sort() altera o array original para ordená-lo*/
aprovados.sort()
console.log( aprovados )

/**Podemos usar o operador delete para excluir um item de um array 
 * depois de executar teremos undefined na posição de índice 1
*/
delete aprovados[1]
console.log( aprovados[1] )
console.log( aprovados[2] )

aprovados = ['Bia', 'Carlos', 'Ana']

/**A função .splice() pode ser usada para adicionar um novo elemento
 * a um índice, deletar um elemento de um índice ou fazer as duas coisas de 
 * uma vez
 * Argumentos:
 * 1° O índice que vamos usar (int)
 * 2° Quantos elementos vamos excluir a partir desse índice (int)
 * 3° Qual elemento vamos adicionar, podemos ter mais de um separado por vírgulas
*/
aprovados.splice(1, 2) // Excluir 2 elementos a partir do índice 1
console.log( aprovados )

/**A partir do índice 1, excluir 2 elementos e adicionar dois elementos a partir do índice 1 */
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log( aprovados )

/**Podemos passar 0 para o segundo argumento, dessa forma ele apenas adiciona dois elementos
 * sem excluir nenhum
*/
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log( aprovados )

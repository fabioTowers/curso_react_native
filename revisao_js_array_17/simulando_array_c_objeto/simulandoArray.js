/**Simulando o comportamento de um array com um objeto */

const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }

console.log( quaseArray )

/**Inserindo no objeto uma propriedade para imprimir
 * os itens como um Array
 */
Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.values(this)},//Imprime os valores do objeto, referenciando o objeto atual
    enumerable: false // Ao exibir o objeto essa função não vai aparecer
})

console.log( quaseArray[0] )

const meuArray = ['Rafael', 'Ana', 'Bia'] // Um Array original
console.log( quaseArray.toString(), meuArray ) // Comparando vemos que ambos são exibidos da mesma forma

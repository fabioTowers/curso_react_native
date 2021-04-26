//Lista de produtos
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de ´Plástico', preco: 18.99, fragil: false }
]

/**filter utiliza uma função de callback  que 
 * pode receber 3 elementos: o elemento atual, 
 * o índice e o array. É possível ainda passar como 
 * argumentos qual o this que deverá ser usado dentro da função
 * callback.
 * 
 * A função callback deve retornar true ou false.
*/
console.log(produtos.filter(function(produtoAtual) {
    return produtoAtual.preco > 2400
}))

/**Recuperando os produtos frágeis e caros 
 * Para isso usamos o método filter duas vezes
*/
const retornaCaro = produto => produto.preco >= 500

const retornaFragil = produto => produto.fragil

console.log(produtos.filter(retornaCaro).filter(retornaFragil))

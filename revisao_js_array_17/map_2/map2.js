/**Um array de 4 elementos no formato JSON */
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

/**Desafio: usando map retornar um array contendo apenas os preços */

// Minha resposta:
/*
let precos = carrinho.map(function(e){
    return e["preco"]
})

console.log(precos) // não funcionou
*/

// A correção:
//converter cada elemento para um objeto:
/**Recebe um json que será convertido em objeto */
const paraObjeto = json => JSON.parse(json)

/**Recupera o preço de um objeto e o retorna */
const apenasPreco = produto => produto.preco

/**Chamar duas vezes o map */
const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log( resultado )

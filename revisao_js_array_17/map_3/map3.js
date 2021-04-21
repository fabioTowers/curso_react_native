Array.prototype.map2 = function(callback){  //callback é a função que passamos a map
    const newArray = [] // map retorna um novo array
    for(let x=0; x<this.length; x++){
        newArray.push(callback(this[x], x, this))   //passando 3 args elemento, indice e array
    }
    return newArray // Retorna o array modificado
}

/**
 * Criando uma implementação própria de map
 * 
 * Um array de 4 elementos no formato JSON */
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

/**Desafio: usando map retornar um array contendo apenas os preços */

/**Recebe um json que será convertido em objeto */
const paraObjeto = json => JSON.parse(json)

/**Recupera o preço de um objeto e o retorna */
const apenasPreco = produto => produto.preco

/**Chamar duas vezes o map */
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log( resultado )

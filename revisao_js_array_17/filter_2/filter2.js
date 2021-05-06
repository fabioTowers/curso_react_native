/**Implementando uma versao própria de filter */
Array.prototype.filter2 = function(callback){  //callback é a função que passamos filter
    const newArray = [] // map retorna um novo array
    for(let x=0; x<this.length; x++){
        if( callback(this[x], x, this) ){ // Se for true, o elemento será adicionado no novo array
            newArray.push(this[x])   //passando 3 args elemento, indice e array
        }
    }
    return newArray // Retorna o array modificado
}

//Lista de produtos
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de ´Plástico', preco: 18.99, fragil: false }
]

const retornaCaro = produto => produto.preco >= 500

const retornaFragil = produto => produto.fragil

console.log(produtos.filter2(retornaCaro).filter2(retornaFragil))

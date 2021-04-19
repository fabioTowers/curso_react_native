/**Criar uma função que implementa um forEach
 * 
 * Minha resposta:
 */

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2 = function(funcao){
    for(let x=0; x<aprovados.length; x++){
        funcao(aprovados[x], x)
    }
}

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

/**Solução:*/

/**
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        //Chamar a função callback passando os 3 parâmetros
        callback(this.[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})
 */

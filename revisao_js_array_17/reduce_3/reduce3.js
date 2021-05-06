/**Implementação de um reduce 'na unha' */
Array.prototype.reduce2 = function(callback, valorInicial) {
    //se valorInicial estiver setado indiceInicial = 0; se não é igual a 1
    const indiceInicial = valorInicial ? 0 : 1
    //o valorInicial é opcional, se não for passado é usado o valor do elemento de índice zero
    let acumulador = valorInicial || this[0]
    for (let i=indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

//Teste:
const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]

console.log(nums.reduce2(soma, 21))

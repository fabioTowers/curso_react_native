/**Fazendo uma variável receber uma função anônima (sem nome)*/
const soma = function(x, y) {
    return x + y
}

/**A seguir temos uma função que recebe dois valores e uma 
 * operação. A operação, se não for passada, assumirá por 
 * default a função soma
 * 
 * Note qua passamos uma função como argumento
 */
const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)

//Chamando explícitamente a função soma
imprimirResultado(3, 4, soma)

// Passando uma função anônimas diretamente
//ao chamar a função
/**A declaração da função é feita diretamente na chamada */
imprimirResultado(3, 4, function (x, y) {
    return x - y
})

/**Agora vamos passar uma função Arrow como argumento */
imprimirResultado(3, 4, (x, y) => x * y)

/**O atributo falar do objeto pessoa recebe uma função */
const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()

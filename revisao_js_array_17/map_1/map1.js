/**Gerar um novo array onde cada elemento é o dobro do elemento
 * correspondente no array original
 */

// Array original
const nums = [1, 2, 3, 4, 5]

/**Usando um map 
 * 
 * Da mesma forma que um forEach o map precisa de uma 
 * função de callback, que pode receber 3 parâmetros:
 * -> O elemento do array na iteração atual;
 * -> O índice;
 * -> O próprio array;
*/
let resultado = nums.map(function(e) {
    /**É obrigatório que map retorne alguma coisa
     * do contrário vamos obter undefined
     */
    return e * 2
})

console.log(resultado, nums)

//Função arrow
const soma10 = e => e + 10

const triplo = e => e * 3

// Transforma para o formato de reais
/**A seguir temos a notação Template String que torna mais legível e fácil de 
 * escrever strings interpolando com variáveis. Convertemos o valor para float,
 * ajustamos para duas casas decimais após a vírgula e substituimos o ponto 
 * por vírgula, para termos o formato usado no Brasil
*/
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

/**Chamando o map de forma encadeada para executar as 3 funções criadas acima */
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)

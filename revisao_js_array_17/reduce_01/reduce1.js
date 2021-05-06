/**Um array de alunos, cada 
 * elemento é um objeto
 */
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsita: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

/**Aplicando a função reduce */

/**Reduce recebe uma função de callback, onde especificamos o que 
 * deve ser feito a cada iteração.
 * A função de callback deve receber o acumulador e o 
 * elemento atual, opcionalmente também pode ser passado o 
 * índice e o array.
 * 
 * O segundo argumento (o primeiro é a callback) do reduce
 * é opcional, é o valor inicial de acumulador, se não for 
 * passado o valor default é o do elemento de índice zero
 * 
 * O valor do acumulador pode ser um array, um objeto, um número
 * , etc
 */

//o array completo
console.log(alunos.map(a => a.nota))

//Extrair de alunos apenas a nota
//Após o map executamos o reduce
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    //a cada iteração faz:
    console.log(acumulador, atual)
    return acumulador + atual
    //O reduce vai somar todas as notas dos alunos
}, 0)//valor inicial 10 (é opcional)

//resultado final
console.log(resultado)

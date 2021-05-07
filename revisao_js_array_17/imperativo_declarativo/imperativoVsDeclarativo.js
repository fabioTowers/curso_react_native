/**Array de objetos */
const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Calcular a média dos elementos do array alunos

/**Abordagem de escrita de código imperativa */

let total1 = 0 //Os valores serão acumulados para depois calcular a média

for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

// Exibir a média
console.log( total1/alunos.length )

/**Abordagem de escrita de código declarativa */
const getNota = aluno => aluno.nota //Função que pegas as notas dos alunos
const soma = (total, atual) => total + atual

//Usando as funções anteriores com map e reduce
const total2 = alunos.map(getNota).reduce(soma)

//Exibir a média
console.log( total2/alunos.length )

/**Na abordagem imperativa foi definido todo o passo a passo e execução
 *  do laço, enquenato o declarativo usou funções que fazem isso internamente,
 * por que não é interessante nem necessário, nesse caso, definir como o laço 
 * for será executado.
 */

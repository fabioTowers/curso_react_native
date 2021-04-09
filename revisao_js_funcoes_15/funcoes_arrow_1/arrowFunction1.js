// Usando uma função normal
let dobro = function (a) {
    return 2 * a
}

// Sobrescrevendo a variavel dobro (que armazena a função)
//usando a sintaxe arrow
dobro = (a) => {
    return 2 * a
}

// Funções arrow sempre são anônimas, para chamá-las depois
//precisamos armazenar em alguma variável ou constante

/** Escrevendo de uma forma mais reduzida
 * retirando os parenteses se houver um único parâmetro
 * 
 * quando não há as chaves existe um return implícito
*/
dobro = a => 2 * a

console.log( dobro(Math.PI) )

// Outro exemplo de função tradicional
let ola = function () {
    return 'Olá'
}

// Refatorando para a sintaxe arrow
ola = () => 'Olá' // Realmente não possui parâmetros

// Outra forma de função arrow sem parâmetros
ola = _ => 'Olá' // Possui um parâmetro, mas é ignorado

console.log( ola() )

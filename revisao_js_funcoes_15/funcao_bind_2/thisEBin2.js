function Pessoa() {
    this.idade = 0

    //setInterval() dispara uma outra função a cada intervalo de tempo definido (1000 milisegundos)
    //veja que podemos passar uma função como parametro para outra, no caso, 
    //estamos passando uma função anônima definida aqui mesmo
    setInterval( function(){
        this.idade++
        console.log( this.idade )
    }, 1000 )
}

// Criando um objeto (instanciando pessoa) para pode executar a função
new Pessoa

/**A função anônima não está sendo invocada pela classe Pessoa, na verdade é setInterval
 * e seu temporizador interno que está executando a função, então o this.idade vai se 
 * comportar de forma diferente do esperado (um NaN).
 * 
 * Observação: CTRL + alt + N executa
 *             CTRL + alt + M interrompe a execução do programa
 */

/**Uma forma de fazer idade apontar para o contexto correto é colocar a função
 * bind apontando para o próprio contexto onde a função esta definida, da forma
 * que estava antes o contexto era o de execução da função. Veja:
 */

function Pessoa2() {
    this.idade = 0

    setInterval( function(){
        this.idade++
        console.log( this.idade )
    }.bind(this), 1000 )
}

new Pessoa2

/**Podemos ainda criar uma constante, declarada no contexto em que queremos 
 * que o this seja interpretado e depois substituir o this pela constante.
 * É uma forma interessante porque uma constante nunca terá seu valor alterado
 * por isso não importa o contexto de execução da função, o escopo será o que 
 * definiu a função. Por uma convenção, essa constante se chama self, mas podemos dar
 * qualquer nome. Veja o exemplo:
 */

 function Pessoa3() {
    this.idade = 0

    const self = this
    setInterval( function(){
        self.idade++
        console.log( self.idade )
    }, 1000 )
}

new Pessoa3

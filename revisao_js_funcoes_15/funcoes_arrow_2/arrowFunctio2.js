/**
 * Esse é o mesmo código usada na aula para explicar porque o this varia
 * criamos a classe pessoa e quando usamos uma função normal o this é
 * interpretado pelo contexto de execução da função (um temporizador interno nesse caso) e não no contexto de 
 * escrita (classe Pessoa). Mas como usamos uma arrow function o contexto do
 * this estará atrelado à classe Pessoa
 */

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

//Instanciando
new Pessoa

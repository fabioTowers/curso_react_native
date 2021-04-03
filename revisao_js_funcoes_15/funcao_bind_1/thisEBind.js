// O objeto pessoa tem como um de seus atributos uma função. Inserido no ES6
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        // Chamando saudacao do contexto objeto pessoa
        console.log(this.saudacao)
    }
}

pessoa.falar()

/**Quando executamos o código abaixo ontemos undefined, 
 * porque não estamos chamando a função falar a partir do
 * contexto pessoa, logo o this muda de escopo, seu comportamento muda
 */

//Associar a função falar() em uma variável
const falar = pessoa.falar
falar()

/**Para resolver esse problema podemos "amarrar" o contexto pessoa
 * ao this usando bind
 * 
 * Estamos definindo, qual deve ser o contexto do this? O contexto
 * deve ser o objeto pessoa, por isso o passamos como parametro 
 * para a função bind(), dessa forma obtemos 'Bom dia!'
 */
const falarDePessoa = pessoa.falar.bind( pessoa )
falarDePessoa()

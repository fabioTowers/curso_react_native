/**
 * Essa função compara o parâmetro passado
 * com o this para ver se ele são estritamente 
 * igual*/
let comparaComThis = function (param) {
    console.log(this === param)
}

/**No contexto do Node JS o objeto global se chama global e 
 * no contexto do navegador se chama window, a caomparação retorna
 * true nesse contexto
 */
comparaComThis(global)

/**A seguir, usando o bind, teremos o this apontando para o contexto de
 * obj e não para o contexto global, logo retorna false
 */
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)

/**Agora comparando com obj obtemos true */
comparaComThis(obj)

/**Esse foi o comportamento com funções normais, a seguir vamos ver 
 * o comportamento com funções arrow
 */

/**Dentro do node, os códigos são interpretados dentro de módulos
 * então o contexto (ou escopo) da função é o módulo, então
 * quando comparamos com global obteremos false.
 */
let comparaComThisArrow = param => console.log(this === param)

// retorna false
comparaComThisArrow(global)

// Fazendo o teste de comparar com o módulo corrente (retorna true):
comparaComThisArrow(module.exports)

/**Usando o bind dentro de  uma função arrow, pra ver se ele muda o 
 * contexto do this
 */
 comparaComThisArrow = comparaComThisArrow.bind(obj)

 /**Obtemos false por que nem o bindo consegue mudar a referência do 
  * this para uma função arrow
  */
 comparaComThisArrow(obj)

 /**Retorna true por que a função arrow continua apontando para 
  * o contexto do módulo, logo retorna true
 */
 comparaComThisArrow(module.exports)

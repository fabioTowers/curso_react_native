// Operadores destructuring são um novo recurso da especificação ES6

/**Para desestrutura um objeto usamos chaves (e não colchetes como em objetos) */

// O objeto a seguir é o exemplo
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua Abc',
        numero: 1000
    }
}

/**
 * COMO RETIRAR NOME E IDADE DA ESTRUTURA pessoa?
 * 
 * Há duas opções:
 */

// A forma tradicional:
//const nome = pessoa.nome
//const idade = pessoa.idade

// e usando um operador de desestruturação:
/**
 * Criamos as constantes nome e idade que recebem como valor os 
 * atributos nome e idade da estrutura pessoa
 */
const { nome, idade } = pessoa
console.log(nome, idade)

// Pode-se dar qualquer nome às variáveis, não precisa ser 
//obrigatoriamente o mesmo da estrutura, é necessário apenas 
//especificar quais os atributos da estrutura que queremos
//seguindo o padrão atributo: nome
const { nome: n, idade: i } = pessoa
console.log(n, i)

/**
 * O QUE OCORRE SE TENTARMOS USAR UM ATRIBUTO QUE NÃO EXISTE 
 * NO OBJETO?
 * Nesse caso a variável fica com o valor undefined, mas é possível 
 * atribuir um valor dafault, como no exemplo a seguir com a 
 * variável bemHumorada:
 */
//bemHumorada tem o valor default true
const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

/**COMO ACESSAR ELEMENTOS QUE ESTÃO DE ESTRUTURAS INTERNAS?
 * Como por exemplo acessar o elemento logradouro que está
 * dentro de endereço que por sua vez está dentro de pessoa
 */
const { endereco: {logradouro, numero, cep} } = pessoa
/**Observação: Não é criada uma constante para endereço, apenas 
 * para logradouro, numero e cep (que nem faz parte da estrutura original)
 */
console.log(logradouro, numero, cep)

/**Observação: se tentarmos acessar elementos de uma sub estrutura de um 
 * objeto (como feito acima) mas a subestrutura não existir no objeto 
 * ocorrerá uma exceção que vai interromper a execução.
 */

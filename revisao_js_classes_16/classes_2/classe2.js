class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

/**Como Avo tem sobrenome e Pai extende de Avo então Pai também tem um sobrenome */
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        // Chama o construtor de avo para que ele defina o sobrenome
        super(sobrenome)
        this.profissao = profissao
    }
}

/**O filho é quem está definindo qual deve ser o sobrenome, ele faz isso
 * executando o construtor do Pai com o parâmetro 'Silva' e o Pai
 * por sua vez chama o construtor do Avo que define que o sobrenome será
 * 'Silva'.
 */
class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)

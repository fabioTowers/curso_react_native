class Lancamento{
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    //Pode receber 1 ou mais lancamentos
    addLancamentos(...lancamentos) {
        /**Passamos um array para esse método, percorremos esse array, e cada elemento dele
         * é adicionado ao array lancamentos da classe (declarado no construtor)
         */
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(4, 2021)
contas.addLancamentos( salario, contaDeLuz )

console.log( contas.sumario() )

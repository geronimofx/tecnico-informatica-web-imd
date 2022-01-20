class ContaCorrente {

    nome_correntista: string;
    cpf_correntista: string;
    saldo: number;

    setNome(nome: string): void{
        this.nome_correntista = nome;
    }

    setCpf(cpf: string): void{
        this.cpf_correntista = cpf;
    }

    setSaldo(saldo: number): void{
        this.saldo = saldo;
    }

    depositar(valor : number) : void {
        this.saldo = this.saldo + valor;
    }

    sacar(valor : number) : void {
        this.saldo = this.saldo - valor;
    }

    mostrarInformacoes() : void {
        console.log(this.nome_correntista, this.cpf_correntista, this.saldo);
    }

}

let pessoa = new ContaCorrente();
pessoa.setNome("Gilgamesh, O Rei dos reis");
pessoa.setCpf("999.999.999-99");
pessoa.setSaldo(1500);

pessoa.depositar(137.34);
pessoa.sacar(25.83);
// pessoa.depositar(15);

pessoa.mostrarInformacoes();
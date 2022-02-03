var ContaCorrente = /** @class */ (function () {
    function ContaCorrente() {
    }
    ContaCorrente.prototype.setNome = function (nome) {
        this.nome_correntista = nome;
    };
    ContaCorrente.prototype.setCpf = function (cpf) {
        this.cpf_correntista = cpf;
    };
    ContaCorrente.prototype.setSaldo = function (saldo) {
        this.saldo = saldo;
    };
    ContaCorrente.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    ContaCorrente.prototype.sacar = function (valor) {
        this.saldo = this.saldo - valor;
    };
    ContaCorrente.prototype.mostrarInformacoes = function () {
        console.log(this.nome_correntista, this.cpf_correntista, this.saldo);
    };
    return ContaCorrente;
}());
var pessoa = new ContaCorrente();
pessoa.setNome("Gilgamesh, O Rei dos reis");
pessoa.setCpf("999.999.999-99");
pessoa.setSaldo(1500);
pessoa.depositar(137.34);
pessoa.sacar(25.83);
// pessoa.depositar(15);
pessoa.mostrarInformacoes();

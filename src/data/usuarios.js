let usuarios = [
    {
        id: 1,
        nome: "João Silva",
        email: "joao@email.com"
    },
    {
        id: 2,
        nome: "Maria Souza",
        email: "maria@email.com"
    }
];

let proximoId = 3;

function gerarId() {
    return proximoId++;
}

module.exports = {
    usuarios,
    gerarId
};
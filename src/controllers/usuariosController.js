const { usuarios, gerarId } = require("../data/usuarios");

// GET - Listar todos os usuários
function listarUsuarios(req, res) {
    return res.status(200).json(usuarios);
}

// GET - Buscar usuário por ID
function buscarUsuarioPorId(req, res) {
    const id = Number(req.params.id);

    const usuario = usuarios.find((u) => u.id === id);

    if (!usuario) {
        return res.status(404).json({
            error: "Usuário não encontrado."
        });
    }

    return res.status(200).json({
        data: usuario
    });
}

// POST - Cadastrar usuário
function cadastrarUsuario(req, res) {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({
            error: "Os campos nome e email são obrigatórios."
        });
    }

    const novoUsuario = {
        id: gerarId(),
        nome,
        email
    };

    usuarios.push(novoUsuario);

    return res.status(201).json({
        data: {
            mensagem: "Usuário cadastrado com sucesso!",
            usuario: novoUsuario
        }
    });
}

// PUT - Atualizar usuário
function atualizarUsuario(req, res) {
    const id = Number(req.params.id);

    const indice = usuarios.findIndex((u) => u.id === id);

    if (indice === -1) {
        return res.status(404).json({
            error: "Usuário não encontrado."
        });
    }

    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({
            error: "Os campos nome e email são obrigatórios."
        });
    }

    usuarios[indice] = {
        id,
        nome,
        email
    };

    return res.status(200).json({
        data: {
            mensagem: "Usuário atualizado com sucesso!",
            usuario: usuarios[indice]
        }
    });
}

// DELETE - Remover usuário
function removerUsuario(req, res) {
    const id = Number(req.params.id);

    const indice = usuarios.findIndex((u) => u.id === id);

    if (indice === -1) {
        return res.status(404).json({
            error: "Usuário não encontrado."
        });
    }

    usuarios.splice(indice, 1);

    return res.status(200).json({
        data: {
            mensagem: "Usuário removido com sucesso!"
        }
    });
}

module.exports = {
    listarUsuarios,
    buscarUsuarioPorId,
    cadastrarUsuario,
    atualizarUsuario,
    removerUsuario
};
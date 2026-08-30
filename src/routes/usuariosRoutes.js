const express = require("express");

const {
    listarUsuarios,
    buscarUsuarioPorId,
    cadastrarUsuario,
    atualizarUsuario,
    removerUsuario
} = require("../controllers/usuariosController");

const router = express.Router();

// GET - Listar todos os usuários
router.get("/", listarUsuarios);

// GET - Buscar usuário por ID
router.get("/:id", buscarUsuarioPorId);

// POST - Cadastrar novo usuário
router.post("/", cadastrarUsuario);

// PUT - Atualizar usuário
router.put("/:id", atualizarUsuario);

// DELETE - Remover usuário
router.delete("/:id", removerUsuario);

module.exports = router;
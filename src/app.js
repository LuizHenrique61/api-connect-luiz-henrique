const express = require("express");
const usuariosRoutes = require("./routes/usuariosRoutes");

const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Rota inicial para teste
app.get("/", (req, res) => {
    return res.status(200).json({
        mensagem: "API Connect funcionando corretamente!"
    });
});

// Rotas de usuários
app.use("/usuarios", usuariosRoutes);

module.exports = app;
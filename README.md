# API Connect

API REST desenvolvida como MVP para gerenciamento de usuários.

## Objetivo

A API Connect foi criada para permitir o gerenciamento de usuários por meio de operações de cadastro, consulta, atualização e remoção de registros.

Para simplificar o MVP, os dados são armazenados temporariamente em memória durante a execução do servidor.

## Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- Postman
- Git
- GitHub

## Como executar o projeto

Primeiro, clone o repositório:

```bash
git clone https://github.com/LuizHenrique61/api-connect-luiz-henrique.git

Acesse a pasta do projeto:

cd api-connect

Instale as dependências:

npm install

Inicie o servidor:

node src/server.js

O servidor será executado em:

http://localhost:3000
Endpoints
Método	Endpoint	Descrição
GET	/usuarios	Lista todos os usuários
GET	/usuarios/:id	Busca um usuário pelo ID
POST	/usuarios	Cadastra um novo usuário
PUT	/usuarios/:id	Atualiza os dados de um usuário
DELETE	/usuarios/:id	Remove um usuário
Exemplo de cadastro
POST /usuarios

Corpo da requisição:

{
  "nome": "Carlos Oliveira",
  "email": "carlos@email.com"
}

Resposta esperada:

{
  "data": {
    "mensagem": "Usuário cadastrado com sucesso!",
    "usuario": {
      "id": 3,
      "nome": "Carlos Oliveira",
      "email": "carlos@email.com"
    }
  }
}

Status:

201 Created
Validação de dados

Caso o cliente não envie os campos obrigatórios:

{
  "nome": "Carlos Oliveira"
}

A API retorna:

{
  "error": "Os campos nome e email são obrigatórios."
}

Status:

400 Bad Request
Busca por usuário inexistente

Exemplo:

GET /usuarios/999

Resposta:

{
  "error": "Usuário não encontrado."
}

Status:

404 Not Found
Observação

Os dados são armazenados em memória. Portanto, quando o servidor é reiniciado, os usuários cadastrados durante a execução são perdidos.

// Importar o Express
const express = require('express');


// Criar a instância do app
const app = express();

// Configurar o servidor para escutar na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

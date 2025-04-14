import express from 'express';
import { createUsuario, login, readUsuario, updateUsuario } from './controllers/UsuarioController';
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');

const port = 3000;
app.use(cors());
app.use(express.json());

// Criar a instância do app
const app = express();

// Configurar o servidor para escutar na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

// Rota de cadastro
app.post('/register', async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const hash = await bcrypt.hash(senha, 10);

        const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
        db.query(sql, [nome, email, hash], (err, result) => {
            if (err) return res.status(500).json({ erro: 'Erro ao cadastrar usuário' });
            res.status(200).json({ mensagem: 'Usuário cadastrado com sucesso!' });
        });
    } catch (err) {
        res.status(500).json({ erro: 'Erro interno no servidor' });
    }
});

// Rota de login
app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    const sql = 'SELECT * FROM usuarios WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
        if (err) return res.status(500).json({ erro: 'Erro no servidor' });
        if (results.length === 0) return res.status(401).json({ erro: 'Usuário não encontrado' });

        const usuario = results[0];
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) return res.status(401).json({ erro: 'Senha incorreta' });

        res.status(200).json({ mensagem: 'Login realizado com sucesso', usuario: { id: usuario.id, nome: usuario.nome } });
    });
});




app.use(express.json())

//CRUD
app.post('/usuario', createUsuario)
app.get('/usuario', readUsuario)
app.put('/usuario/:id_usuario', updateUsuario)
app.delete('/usuario/:id_usuario', deleteUsuario)

app.post('/login/', login)

app.listen(port, () => {
    console.log(`API funcionando na porta ${port}`);
});
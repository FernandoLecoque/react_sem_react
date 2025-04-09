import express from 'express';
import { createUsuario, login, readUsuario, updateUsuario } from './controllers/UsuarioController';

const port = 3000;
const app = express();

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
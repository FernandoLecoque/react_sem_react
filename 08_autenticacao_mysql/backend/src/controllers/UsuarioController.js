import { criandoUsuario, deletarUsuario } from '../models/UsuarioModel.js';

export const createUsuario = async (req, res) => {
    console.log("UsuarioController :: createUsuario")
    const { nome, email, senha, tipo } = req.body
    try {
        const [status, resposta] = await criandoUsuario(nome, email, senha, tipo)
        return res.status(status).json(resposta)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Erro ao criar usuario" })
    }
}

export const readUsuario = async (req, res) => {
    console.log("UsuarioController :: readUsuario")
    try {
        const [status, resposta] = await mostrandoUsuarios();
        return res.status(status).json(resposta)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Erro ao mostrar usuario" })
    }
}

export const updateUsuario = async (req, res) => {
    console.log("UsuarioController :: updateUsuario")
    const { nome, email, senha, tipo } = req.body
    const { id_usuario } = req.params
    try {
        const [status, resposta] = await atualizandoUsuario(nome, email, senha, tipo, id_usuario)
        return res.status(status).json(resposta)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Erro ao criar usuario" })
    }
}

export const deleteUsuario = async (req, res) => {
    console.log("UsuarioController :: updateUsuario")
    const { id_usuario } = req.params
    try {
        const [status, resposta] = await deletarUsuario(id_usuario)
        return res.status(status).json(resposta)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Erro ao deletar usuario" })
    }
}

export const login = async (req, res) => {
    console.log("UsuarioController :: login")
    const { email, senha } = req.body
    try {
        const [status, resposta] = await loginUsuario(email, senha)
        return res.status(status).json(resposta)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Erro ao logar usuario" })
    }
}
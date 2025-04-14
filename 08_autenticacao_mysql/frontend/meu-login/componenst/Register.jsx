import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ goToLogin }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/register', {
        nome,
        email,
        senha,
      });

      setMensagem(response.data.mensagem);
      setTimeout(() => goToLogin(), 2000); // vai pro login depois de cadastrar
    } catch (error) {
      setMensagem(
        error.response?.data?.erro || 'Erro ao cadastrar. Tente novamente.'
      );
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
      <p>{mensagem}</p>
      <button onClick={goToLogin}>Já tem conta? Fazer login</button>
    </div>
  );
};

export default Register;

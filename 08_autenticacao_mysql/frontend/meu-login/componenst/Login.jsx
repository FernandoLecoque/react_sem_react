import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ goToRegister }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        senha,
      });

      setMensagem(response.data.mensagem);
      // Aqui você pode redirecionar para o dashboard ou salvar o usuário
      console.log('Usuário logado:', response.data.usuario);
    } catch (error) {
      setMensagem(
        error.response?.data?.erro || 'Erro ao fazer login. Verifique os dados.'
      );
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Entrar</button>
      </form>
      <p>{mensagem}</p>
      <button onClick={goToRegister}>Não tem conta? Cadastre-se</button>
    </div>
  );
};

export default Login;

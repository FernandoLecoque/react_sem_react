import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

function App() {
  const [tela, setTela] = useState('login');

  return (
    <div>
      {tela === 'login' ? (
        <Login goToRegister={() => setTela('register')} />
      ) : (
        <Register goToLogin={() => setTela('login')} />
      )}
    </div>
  );
}

export default App;

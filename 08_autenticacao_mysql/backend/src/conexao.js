const db = mysql.createConnection({
    host: 'localhost',
    user: 'SEU_USUARIO',
    password: 'SUA_SENHA',
    database: 'SEU_BANCO'
  });
  
export default db;
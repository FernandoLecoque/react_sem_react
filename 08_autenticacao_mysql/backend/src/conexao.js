const db = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: '',
    database: 'login'
});
export default db;
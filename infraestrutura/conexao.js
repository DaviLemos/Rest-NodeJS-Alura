const msql = require('mysql');

const conexao = msql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: 'admin',
  database: 'agenda-petshop',
});

module.exports = conexao;

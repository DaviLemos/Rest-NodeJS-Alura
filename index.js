const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

conexao.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('conectado com sucesso');

    Tabelas.init(conexao);

    const app = customExpress();
    app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
  }
});

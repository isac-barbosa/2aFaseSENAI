const express = require("express");
const mysql = require("mysql2/promise");
const app = express();
const port = 3000;

let connection;

async function initDB() {
  connection = await mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    database: "crud_aula",
    user: "root",
    password: "senai",
  });
  console.log("Conectado ao banco de dados!");
}

initDB().catch((err) => {
  console.error("Erro ao conectar ao banco:", err);
  process.exit(1);
});

app.use(express.json());

app.post("/clientes", async (req, res) => {
  const { nome, endereco, email, telefone } = req.body;
  try {
    const [result] = await connection.query(
      "INSERT INTO cliente (nome, endereco, email, telefone) VALUES (?, ?, ?, ?)",
      [nome, endereco, email, telefone]
    );
    // O que a query realmente retorna:
    // const resultado = await connection.query("INSERT INTO...");
    // resultado = [dados, campos]
    // resultado[0] = dados (o que queremos , os dados inseridos)
    // resultado[1] = campos (metadados, que serve para coisas mais avanÃ§adas, como por exemplo saber o tipo de dado de cada campo, geralmente nÃ£o precisamos disso)
    // Do jeito que tamo fazendo seria a mesma coisa que: result = resultado[0]
    res.status(201).json({
      id: result.insertId,
      nome,
      endereco,
      email,
      telefone,
    });
    // Acima acessamos o ID do novo cliente com result.insertId porque a estrutura que estamos pegando  Ã© o primeiro item do array ou seja , result = resultado[0]. Sempre que o mysql tem uma coluna AI , quando Ã© feito um insert ele retorna, abaixo:
    // {
    //   fieldCount: 0,
    //   affectedRows: 1,      // quantas linhas foram afetadas
    //   insertId: 5,          // â† O ID que foi gerado automaticamente pelo MySQL
    //   info: '',
    //   serverStatus: 2,
    //   warningStatus: 0
    // }
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({ erro: "Falha do servidor ao criar o cliente" });
  }
});

app.get("/clientes", async (req, res) => {
  try {
    const [clientes] = await connection.query("SELECT * FROM cliente");
    res.json(clientes);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ erro: "Falha do servidor ao listar clientes" });
  }
});

app.get("/clientes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [cliente] = await connection.query(
      "SELECT * FROM cliente WHERE id = ?",
      [id]
    );
    if (cliente.length === 0) {
      return res.status(404).json({ erro: "Cliente nÃ£o encontrado" });
    }
    res.json(cliente[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ erro: "Falha do servidor ao buscar cliente" });
  }
});

// put
app.put('/', (req, res) => {
  res.send('PUT request to homepage')
})

// delete
app.delete('/', (req, res) => {
  res.send('DELETE request to homepage')
})


// Middleware de tratamento e log de erros (fica apÃ³s as rotas)
// Qualquer erro nÃ£o tratado em rotas cairÃ¡ aqui
app.use((err, req, res, next) => {
  const timestamp = new Date().toISOString();
  console.error(`[${timestamp}] ERROR ${req.method} ${req.url}:`, err);
  if (res.headersSent) return next(err);
  res.status(500).json({ erro: "Falha interna do servidor" });
});

app.listen(port, () => {
  console.log("API Funcionando");
});
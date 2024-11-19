const express = require('express'); // Importa o framework Express para criar o servidor
const mysql = require('mysql'); // Importa o módulo MySQL para interagir com o banco de dados
const bodyParser = require('body-parser'); // Importa o body-parser para ler o corpo das requisições
const cors = require('cors'); // Importa o cors para permitir requisições de diferentes origens

const app = express(); // Cria uma instância do aplicativo Express
const port = 5000; // Define a porta em que o servidor irá rodar

app.use(cors()); // Habilita o CORS para permitir requisições de outros domínios
app.use(bodyParser.json()); // Configura o body-parser para analisar requisições JSON

// Configura a conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Usuário do MySQL
    password: '123t456i', // Senha do MySQL
    database: 'feedback_db' // Nome do banco de dados
});

// Conecta ao banco de dados e exibe uma mensagem de sucesso ou erro
db.connect(err => {
    if (err) throw err; // Se houver um erro, lança uma exceção
    console.log('Conectado ao banco de dados MySQL'); // Mensagem de sucesso
});

// Rota para receber feedback via POST
app.post('/feedback', (req, res) => {
    const { name, email, feedback } = req.body; // Extrai os dados do corpo da requisição
    const query = 'INSERT INTO feedback (name, email, feedback) VALUES (?, ?, ?)'; // Consulta SQL para inserir feedback
    db.query(query, [name, email, feedback], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message }); // Retorna erro se a consulta falhar
        }
        res.status(201).json({ message: 'Feedback enviado com sucesso!' }); // Retorna sucesso se a consulta for bem-sucedida
    });
});

// Inicia o servidor e escuta na porta definida
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`); // Mensagem indicando que o servidor está ativo
});
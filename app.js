const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');


const usuarioRouter = require('./routes/usuario');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(usuarioRouter);

app.use(bodyParser.json());


/*

Isso para o professor:

Cadastro de Professores
Cadastro de Turmas
Cadastro de Alunos
Cadastro de Disciplinas
Cadastro de Provas
Gerar um PDF com declarações de provas
*/


/*
Isso para mim: Criar chat e armazenar arquivos;

Cadastro de pessoa;
Cadastro de grupo;
Cadastro de mensagem;
Cadastro de diretórios;


*/

app.get('/',(req, res, next) => {
    res.send("<h1>Chat e Armazenamento de Arquivos</h1>");
});

app.use((req, res, next) => {
    console.log('Página não encontrada.');    
    res.status(404).send();
});

const server = http.createServer(app);

server.listen(3000);
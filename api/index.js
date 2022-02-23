const express = require('express')
const sql = require('mysql2')
const server = express()

const bodyParser = require('body-parser')
const banco = sql.createPool({
    database: 'bdchegadalua',
    user: 'root',
    password: '',
    host: 'localhost',
    port: '3306'
})

const cors = require('cors')
const corsOptions = {
	origin: 'http://localhost:4200',
	optionSuccessStatus: 200,
}
server.use(cors(corsOptions));

server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())

server.post('/usuario', (req, res) => {
  let body = req.body
  const query = `insert into usuario (email, nome, senha) values('${body.email}', '${body.nome}', '${body.senha}')`

  banco.getConnection((error, conn) => {
      if(error) return res.status(500).send({detalhes: error})

      conn.query(query, error => {
          conn.release()

          if(error) return res.status(501).send({detalhes: error})

          return res.status(201).send({
            mensagem: 'Usuário cadastrado com sucesso!'
          })
      })
  })
})

server.listen(3000, () => { console.log('Server running...') })

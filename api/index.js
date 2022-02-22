const express = require('express')
const sql = require('mysql2')
const server = express()

const bodyParser = require('body-parser')
const banco = sql.createPool({
    database: 'bdChegadaLua',
    user: 'root',
    password: 'minas',
    host: 'localhost',
    port: '3306'
})

// const cors = require('cors')
// const corsOptions = {
// 	origin: 'http://localhost:4200',
// 	optionSuccessStatus: 200,
// }
// server.use(cors(corsOptions));

server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())

server.get('/', (req, res) => {
    const QUERY = 'select * from usuario'
    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).send({ detalhes: error })
        }
        conn.query(QUERY, (erro, resultados) => {
            conn.release()
            if(error) {
                return res.status(500).send({ detalhes: error })
            }
            return res.status(200).send({
              data: resultados
            })
        })
    })
})

server.listen(3000, () => { console.log('Server running...') })
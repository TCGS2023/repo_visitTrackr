//npm init -y
//se instaló modulo express con npm install express
//se instaló nodemon para que el servidor se refresque automaticamente con npm i nodemon --save-dev
//se instaló dos modulos con: npm i mysql express-myconnection

const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 9000)

const dboptions = {
    host: '192.185.113.226',
    port: 3306,
    user: 'ab7287_tcgs_dba',
    password: 'P@ssw0rd123',
    database: 'ab7287_VisitTrackr_db'
}

//middewares ---------------------------------------------
app.use(myconn(mysql, dboptions, 'single'))

// routes -------------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})

app.use('/api', routes)

//server running -------------------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server runnig on port', app.get('port'))
})
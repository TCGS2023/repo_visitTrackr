
const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('select * from tbl_compania', (err, rows)=>{
            if(err) return res.send(err)
            
            res.json(rows)
        })
    })
})

module.exports = routes
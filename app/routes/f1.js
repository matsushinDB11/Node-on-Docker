const express = require('express');
const mysql = require('mysql')
const router = express.Router();

const connection = mysql.createConnection({
    host: 'db',
    user: 'apiuser',
    password: 'apipasswd',
    database: 'sample01'
});

/* GET home page. */
router.get('/', (req, res)=> {
    connection.query(
        'SELECT * FROM items',
        (error, results) => {
            res.render('f1.ejs', { items: results });
        }
    );
});

module.exports = router;

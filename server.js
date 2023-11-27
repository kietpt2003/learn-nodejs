const mysql = require('mysql2')
const express = require('express')
const app = express();
const port = 8081

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/test', function (req, res) {
    res.send('test route')
})

app.get('/kiet', function (req, res) {
    res.send('<h1>test kiet route</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, //default 3306
    user: 'root',
    password: '123456', //default empty
    database: 'nodejsdb'
});

// simple query
connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log("result: ", results); // results contains rows returned by server
        console.log("fields: ", fields); // fields contains extra meta data about results, if available
    }
);
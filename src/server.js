const mysql = require('mysql2');
const path = require('path');
const env = require('dotenv');
env.config();
console.log('check .env', process.env);
const express = require('express');
const app = express();
const port = process.env.PORT;

app.set('views', path.join(__dirname, 'viewsfolder'));
app.set('view engine', 'ejs');

//config static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('/test', function (req, res) {
    res.send('test route');
})

app.get('/kiet', function (req, res) {
    res.render('sample.ejs');
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

// create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, //default 3306
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, //default empty
    database: process.env.DB_NAME
});

// simple query
connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log("result: ", results); // results contains rows returned by server
        console.log("fields: ", fields); // fields contains extra meta data about results, if available
    }
);
const mysql = require('mysql2');
require('dotenv').config();
console.log('check .env', process.env);
const express = require('express');
const app = express();
const port = process.env.PORT;
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

//config template engine and config static files
configViewEngine(app);

//Khai báo routes
app.use('/', webRoutes);

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
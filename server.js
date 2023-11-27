const http = require('http');

const hostname = 'localhost';
const port = 3000;
// get the client
const mysql = require('mysql2');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

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

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 
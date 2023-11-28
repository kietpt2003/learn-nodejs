require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

//config template engine and config static files
configViewEngine(app);

//Khai báo routes
app.use('/', webRoutes);

// simple query
connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log("result: ", results); // results contains rows returned by server
        // console.log("fields: ", fields); // fields contains extra meta data about results, if available
    }
);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
const connection = require("../config/database");

const getHomepage = (req, res) => {
    //process data
    //call model
    let users = [];
    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            users = results;
            console.log("result: ", users); // results contains rows returned by server
            res.send(JSON.stringify(users));
        }
    );
}

const getTest = (req, res) => {
    res.send('test route');
}

const getKiet = (req, res) => {
    // res.send('<h1>kiet route</h1>');
    res.render('sample.ejs');
}

module.exports = {
    getHomepage,
    getTest,
    getKiet
}
const connection = require("../config/database");

const getHomepage = (req, res) => {
    // //process data
    // //call model
    // let users = [];
    // connection.query(
    //     'SELECT * FROM Users u',
    //     function (err, results, fields) {
    //         users = results;
    //         console.log("result: ", users); // results contains rows returned by server
    //         res.send(JSON.stringify(users));
    //     }
    // );
    return res.render('home.ejs');
}

const getTest = (req, res) => {
    res.send('test route');
}

const getKiet = (req, res) => {
    // res.send('<h1>kiet route</h1>');
    res.render('sample.ejs');
}

const postCreateUser = (req, res) => {
    res.send(`create a new user ${req.body.mail}`);
}

module.exports = {
    getHomepage,
    getTest,
    getKiet,
    postCreateUser
}
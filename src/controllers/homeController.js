const connection = require("../config/database");
const { getAllUsers, updateUser, getUserByID, deleteUserByID } = require("../services/CRUDService");

const getHomepage = async (req, res) => {
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
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results });
}

const getUpdatePage = async (req, res) => {
    // //process data
    const userID = req.params.id;
    const user = await getUserByID(userID);
    return res.render('edit.ejs', { user: user });
}

const getTest = (req, res) => {
    res.send('test route');
}

const getCreateForm = (req, res) => {
    // res.send('<h1>kiet route</h1>');
    res.render('create.ejs');
}

const postCreateUser = async (req, res) => {
    let { mail, myName, myCity } = req.body;

    //query dạng callback
    // connection.query(
    //     `INSERT INTO Users (email, name, city)
    //     VALUES (?, ?, ?)`,
    //     [mail, myName, myCity],
    //     function (err, results) {
    //         console.log(results);
    //         res.send(`Create a new user Success!`);
    //     }
    // );

    const [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city)
        VALUES (?, ?, ?)`,
        [mail, myName, myCity],
    );
    if (results) {
        res.send(`Create a new user Success!`);
    } else {
        res.send(`Create a new user Fail!`);
    }
}

const postUpdateUser = async (req, res) => {
    let { userID, mail, myName, myCity } = req.body;

    const isSuccess = await updateUser({ userID, mail, myName, myCity });

    if (isSuccess) {
        res.redirect('/');
    } else {
        res.send('Update User Fail!!');
    }
}

const postDeleteUser = async (req, res) => {
    let { id } = req.params;
    const user = await getUserByID(id);

    res.render('delete.ejs', { user: user });
}

const postHandleDeleteUser = async (req, res) => {
    let { userID } = req.body;
    const isDeleted = await deleteUserByID(userID);

    if (isDeleted) {
        res.redirect('/');
    } else {
        res.send('Delete User Fail!!');
    }
}

module.exports = {
    getHomepage,
    getTest,
    getCreateForm,
    postCreateUser,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleDeleteUser
}
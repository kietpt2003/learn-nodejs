const connection = require("../config/database");
const { getAllUsers, updateUser, getUserByID, deleteUserByID } = require("../services/CRUDService");

const getHomepage = async (req, res) => {
    // //process data
    // //call model
    // let users = [];
    // connection.execute(
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
    // connection.execute(
    //     `INSERT INTO Users (email, name, city)
    //     VALUES (?, ?, ?)`,
    //     [mail, myName, myCity],
    //     function (err, results) {
    //         console.log(results);
    //         res.send(`Create a new user Success!`);
    //     }
    // );

    const [results, fields] = await connection.execute(
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

const getUploadPage = async (req, res) => {
    return res.render('uploadFile.ejs');
}

const handleUploadFile = async (req, res) => {
    console.log(req.file);

    if (req.fileValidationError) {
        return res.send(req.fileValidationError);
    }
    else if (!req.file) {
        return res.send('Please select an image to upload');
    }

    // Display uploaded image for user validation
    res.send(`You have uploaded this image: <hr/><img src="images/${req.file.filename}" width="500"><hr /><a href="/upload">Upload another image</a>`);
}

const handleUploadMultipleFiles = async (req, res) => {
    console.log(req.files);
    if (req.fileValidationError) {
        return res.send(req.fileValidationError);
    }
    else if (!req.files) {
        return res.send('Please select images to upload');
    }
    let result = "You have uploaded these images: <hr />";
    const files = req.files;

    // Loop through all the uploaded images and display them on frontend
    for (let index = 0; index < files.length; index++) {
        result += `<img src="images/${files[index].filename}" width="300" style="margin-right: 20px;">`;
    }
    result += '<hr/><a href="/upload">Upload more images</a>';
    res.send(result);
}

module.exports = {
    getHomepage,
    getTest,
    getCreateForm,
    postCreateUser,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleDeleteUser,
    getUploadPage,
    handleUploadFile,
    handleUploadMultipleFiles
}
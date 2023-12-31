const connection = require("../config/database");

const getAllUsers = async () => {
    let [results, fields] = await connection.execute('SELECT * FROM Users');
    return results;
}

const getUserByID = async (id) => {
    let [results, fields] = await connection.execute(`SELECT * FROM Users WHERE id = ?`, [id]);
    let user = results && results.length > 0 ? results[0] : {}
    return user;
}

const updateUser = async (user) => {
    const [results, fields] = await connection.execute(
        `UPDATE Users
        SET email = ?, name = ?, city = ?
        WHERE id = ?`,
        [user.mail, user.myName, user.myCity, user.userID],
    );
    if (results) {
        return true;
    }
    return false;
}

const createNewUser = async (user) => {
    const [results, fields] = await connection.execute(
        `INSERT INTO Users (email, name, city)
        VALUES (?, ?, ?)`,
        [user.mail, user.myName, user.myCity],
    );
    if (results) {
        return true;
    } else {
        return false;
    }
}

const deleteUserByID = async (userID) => {
    const [results, fields] = await connection.execute(
        `DELETE FROM Users WHERE id = ?`,
        [userID],
    );
    if (results) {
        return true;
    }
    return false;
}

module.exports = {
    createNewUser,
    getAllUsers,
    getUserByID,
    updateUser,
    deleteUserByID
}
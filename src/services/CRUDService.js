const connection = require("../config/database");

const getAllUsers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM Users');
    return results;
}

const getUserByID = async (id) => {
    let [results, fields] = await connection.query(`SELECT * FROM Users WHERE id = ?`, [id]);
    let user = results && results.length > 0 ? results[0] : {}
    return user;
}

const updateUser = async (user) => {
    const [results, fields] = await connection.query(
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

module.exports = {
    getAllUsers,
    getUserByID,
    updateUser
}
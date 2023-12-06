import { createNewUser, deleteUserByID, getAllUsers, updateUser } from "../services/CRUDService"

const getUsers = async (req, res) => {
    const data = await getAllUsers();
    return res.status(200).json({
        message: "ok",
        data: data
    })
}

const createUser = async (req, res) => {
    let { mail, myName, myCity } = req.body;

    if (!mail || !myName || !myCity) {
        return res.status(200).json({
            message: "Missing required params",
        })
    }

    const results = await createNewUser({ mail, myName, myCity });

    if (results) {
        return res.status(200).json({
            message: "ok",
        })
    } else {
        return res.status(404).json({
            message: "create error",
        })
    }
}

const updateAnUser = async (req, res) => {
    let { userID, mail, myName, myCity } = req.body;

    if (!userID || !mail || !myName || !myCity) {
        return res.status(200).json({
            message: "Missing required params",
        })
    }

    const isSuccess = await updateUser({ userID, mail, myName, myCity });

    if (isSuccess) {
        return res.status(200).json({
            message: "ok",
        })
    } else {
        return res.status(404).json({
            message: "update error",
        })
    }
}

const deleteAnUser = async (req, res) => {
    let userID = req.params.id;

    if (!userID) {
        return res.status(200).json({
            message: "Missing required params",
        })
    }

    const isDeleted = await deleteUserByID(userID);

    if (isDeleted) {
        return res.status(200).json({
            message: "ok",
        })
    } else {
        return res.status(404).json({
            message: "update error",
        })
    }
}

export {
    getUsers,
    createUser,
    updateAnUser,
    deleteAnUser
}
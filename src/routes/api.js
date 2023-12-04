import { getUsers, createUser, updateUser, updateAnUser, deleteAnUser } from "../controllers/apiController";

const router = require("express").Router();

const iniAPIRoute = (app) => {
    router.get('/users', getUsers); //method get <=> read data

    router.post('/create-user', createUser); //method post <=> create data

    router.put('/update-user', updateAnUser); //method put <=> udate data

    router.delete('/delete-user/:id', deleteAnUser); //method delete <=> delete data

    return app.use('/api/v1/', router);
}

export {
    iniAPIRoute
};
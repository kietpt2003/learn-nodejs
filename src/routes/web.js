import { getHomepage, getTest, getCreateForm, postCreateUser, getUpdatePage, postUpdateUser, postDeleteUser, postHandleDeleteUser } from "../controllers/homeController"

const router = require("express").Router();

const iniWebRoute = (app) => {
    router.get('/', getHomepage);

    router.get('/test', getTest);

    router.get('/create', getCreateForm);

    router.get('/update/:id', getUpdatePage);

    router.post('/update-user/', postUpdateUser);

    router.post('/create-user', postCreateUser);

    router.post('/delete-user/:id', postDeleteUser);

    router.post('/delete-user', postHandleDeleteUser);

    return app.use('/', router);
}

export {
    iniWebRoute
};
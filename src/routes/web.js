const { getHomepage, getTest, getCreateForm, postCreateUser, getUpdatePage, postUpdateUser, postDeleteUser, postHandleDeleteUser } = require("../controllers/homeController");

const router = require("express").Router();

router.get('/', getHomepage);

router.get('/test', getTest);

router.get('/create', getCreateForm);

router.get('/update/:id', getUpdatePage);

router.post('/update-user/', postUpdateUser);

router.post('/create-user', postCreateUser);

router.post('/delete-user/:id', postDeleteUser);

router.post('/delete-user', postHandleDeleteUser);

module.exports = router;
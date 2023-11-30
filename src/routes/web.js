const { getHomepage, getTest, getCreateForm, postCreateUser, getUpdatePage, postUpdateUser } = require("../controllers/homeController");

const router = require("express").Router();

router.get('/', getHomepage);

router.get('/test', getTest);

router.get('/create', getCreateForm);

router.get('/update/:id', getUpdatePage);

router.post('/update-user/', postUpdateUser);

router.post('/create-user', postCreateUser);

module.exports = router;
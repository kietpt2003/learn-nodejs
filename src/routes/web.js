const { getHomepage, getTest, getCreateForm, postCreateUser, getUpdatePage } = require("../controllers/homeController");

const router = require("express").Router();

router.get('/', getHomepage);

router.get('/test', getTest);

router.get('/create', getCreateForm);

router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser);

module.exports = router;
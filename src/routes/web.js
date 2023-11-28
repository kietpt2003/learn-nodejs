const { getHomepage, getTest, getCreateForm, postCreateUser } = require("../controllers/homeController");

const router = require("express").Router();

router.get('/', getHomepage);

router.get('/test', getTest);

router.get('/create', getCreateForm);

router.post('/create-user', postCreateUser);

module.exports = router;
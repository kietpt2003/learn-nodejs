const { getHomepage, getTest, getKiet, postCreateUser } = require("../controllers/homeController");

const router = require("express").Router();

router.get('/', getHomepage);

router.get('/test', getTest);

router.get('/kiet', getKiet);

router.post('/create-user', postCreateUser);

module.exports = router;
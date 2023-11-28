const { getHomepage, getTest, getKiet } = require("../controllers/homeController");

const router = require("express").Router();

router.get('/', getHomepage);

router.get('/test', getTest);

router.get('/kiet', getKiet);

module.exports = router;
const router = require("express").Router();

router.get('/', function (req, res) {
    res.send('Hello World');
})

router.get('/test', function (req, res) {
    res.send('test route');
})

router.get('/kiet', function (req, res) {
    res.render('sample.ejs');
})

module.exports = router;
const getHomepage = (req, res) => {
    //process data
    //call model
    res.send('Hello World');
}

const getTest = (req, res) => {
    res.send('test route');
}

const getKiet = (req, res) => {
    // res.send('<h1>kiet route</h1>');
    res.render('sample.ejs');
}

module.exports = {
    getHomepage,
    getTest,
    getKiet
}
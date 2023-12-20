require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const configViewEngine = require('./config/viewEngine');
const { iniWebRoute } = require('./routes/web');
const { configData } = require('./config/configSendData');
const { iniAPIRoute } = require('./routes/api');
const morgan = require('morgan');
app.use(morgan('combined'))

//create my middleware
app.use((req, res, next) => {
    console.log('running into my middleware');
    console.log(req.method);
    next();
})

//config send data
configData(app);

//config template engine and config static files
configViewEngine(app);

//config route
iniWebRoute(app);

//init API
iniAPIRoute(app);

//handle 404 not found
app.use((req, res) => {
    return res.render("404.ejs");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
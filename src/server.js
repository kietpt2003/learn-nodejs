require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const configViewEngine = require('./config/viewEngine');
const { iniWebRoute } = require('./routes/web');
const { configData } = require('./config/configSendData');
const { iniAPIRoute } = require('./routes/api');

//config send data
configData(app);

//config template engine and config static files
configViewEngine(app);

//config route
iniWebRoute(app);

//init API
iniAPIRoute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
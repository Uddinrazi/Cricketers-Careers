const express = require('express');
const path = require('path');
const sequelize = require('./util/db')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

app.use(express.static(path.join(__dirname, "/public")))









sequelize.sync({force: false})
.then((resulst) => {
    appendFile.listen(4000)
}).catch(err => {
    console.log(err)
})
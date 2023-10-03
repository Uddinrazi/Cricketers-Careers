const express = require('express');
const path = require('path');
const sequelize = require('./util/db')
const cors = require('cors')


app.use(express.json());
app.use(cors())
app.use(express.static(path.join(__dirname, "/public")))









sequelize.sync({force: false})
.then((resulst) => {
    app.listen(4000)
}).catch(err => {
    console.log(err)
})
const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./routes/user');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/user',userRouter);




module.exports = app;

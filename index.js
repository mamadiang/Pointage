const express = require('express');




const RoleRouter = require('./Routes/RoleRoute')

const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/Role', RoleRouter);

module.exports = app;

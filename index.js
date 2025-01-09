const express = require('express');




const RoleRouter = require('./Routes/RoleRoute')
const UtilisateurRoute = require('./Routes/UtilisateurRoute')

const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/Role', RoleRouter);
app.use('/Utilisateur', UtilisateurRoute);

module.exports = app;

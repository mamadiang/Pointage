const express = require('express');


const RoleRouter = require('./Routes/RoleRoute')
const UtilisateurRoute = require('./Routes/UtilisateurRoute')
const HoraireRouter = require('./Routes/HoraireRoute')

const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/Role', RoleRouter);
app.use('/Utilisateur', UtilisateurRoute);
app.use('/horaire', HoraireRouter)

module.exports = app;

const express = require('express');


const RoleRouter = require('./Routes/RoleRoute')
const UtilisateurRoute = require('./Routes/UtilisateurRoute')
const HoraireRouter = require('./Routes/HoraireRoute')
const PlanningRouter = require('./Routes/PlanningRoute')
const AbsenceRouter = require('./Routes/AbsenceRoute')

const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/Role', RoleRouter);
app.use('/Utilisateur', UtilisateurRoute);
app.use('/horaire', HoraireRouter);
app.use('/planning', PlanningRouter);
app.use('/absence', AbsenceRouter);

module.exports = app;

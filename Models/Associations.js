const sequelize = require('../Config/Sequelize');
const Absence = require('./Absence');

const Horaire = require("./Horaire");
const Planning = require('./Planning');
const Utilisateur = require("./Utilisateur");

Utilisateur.hasMany(Horaire, {as:'horaires', foreignKey: 'utilisateur_id'})
Horaire.belongsTo(Utilisateur, {as: 'utilisateur', foreignKey: 'utilisateur_id'})

Planning.belongsTo(Utilisateur, {as: 'utilisateur', foreignKey: 'utilisateur_id'})
Utilisateur.hasMany(Planning, {as: 'plannings', foreignKey: 'utilisateur_id'})

Absence.belongsTo(Utilisateur, {as: 'utilisateur', foreignKey: 'utilisateur_id'})
Utilisateur.hasMany(Absence, {as: 'absences', foreignKey: 'utilisateur_id'})

module.exports = {sequelize, Utilisateur, Horaire, Planning, Absence};
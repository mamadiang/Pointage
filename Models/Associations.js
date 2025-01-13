const sequelize = require('../Config/Sequelize')

const Horaire = require("./Horaire");
const Utilisateur = require("./Utilisateur");

Utilisateur.hasMany(Horaire, {as:'horaires', foreignKey: 'utilisateur_id'})
Horaire.belongsTo(Utilisateur, {as: 'utilisateur', foreignKey: 'utilisateur_id'})

module.exports = {sequelize, Utilisateur, Horaire};
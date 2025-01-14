const {Model, DataTypes} = require('sequelize')

const sequelize = require('../Config/Sequelize');
class Horaire extends Model{

}

Horaire.init({

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    utilisateur_id:{
        type: DataTypes.INTEGER,
        references:{
            model: "Utilisateur",
            key: "id"
        }
    },

    entree:{
        type: DataTypes.TIME,
        allowNull: false
    },

    sortie:{
        type: DataTypes.TIME,
        allowNull: true
    },

    absence_id:{
        type: DataTypes.INTEGER,
        references:{
            model: "Absence",
            key: 'id'
        }
    },

    planning_id:{
        type: DataTypes.INTEGER,
        references:{
            model: "Planning",
            key: "id"
        }
    },

    date_creation:{
        type: DataTypes.DATE,
        allowNull: false
    },

    mise_a_jour:{
        type: DataTypes.DATE,
        allowNull: false
    },

}, {
    sequelize,
    modelName: 'Horaire',
    tableName: 'horaire',
    timestamps: false
})


module.exports = Horaire;
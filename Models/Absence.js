const{Model, DataTypes} = require('sequelize')
const sequelize = require('../Config/Sequelize')


class Absence extends Model{

}

Absence.init({

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    utilisateur_id:{
        type: DataTypes.INTEGER,
        references:{
            model: "Utilisateur",
            key: 'id'
        }
    },

    type:{
        type: DataTypes.ENUM('Congé Payé', 'Congé Parental', 'Congé Paternité/Maternité', 'Congé Sabatique', 'Congé Maladie', 'Autres'),
        allowNull: false
    },

    date_debut:{
        type: DataTypes.DATE,
        allowNull: false
    },

    date_fin:{
        type: DataTypes.DATE,
        allowNull: false
    },

    etat:{
        type: DataTypes.ENUM ('Approuvé', 'Rejeté', 'En attente'),
        allowNull: true
    },

    commentaire:{
        type: DataTypes.TEXT,
        allowNull: false
    },

    planning_id:{
        type: DataTypes.INTEGER,
        references:{
            model: "Planning",
            key: 'id'
        }
    }


}, {
    sequelize,
    tableName: 'absence',
    modelName: 'Absence',
    timestamps: false
})

module.exports = Absence;
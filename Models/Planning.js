const {Model, DataTypes} = require('sequelize')
const sequelize = require('../Config/Sequelize')


class Planning extends Model{

}

Planning.init({

    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    debut:{
        type: DataTypes.TIME,
        allowNull: false
    },

    fin:{
        type: DataTypes.TIME,
        allowNull: false
    },

    jour:{
        type: DataTypes.ENUM('Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'),
        allowNull: false
    },

    utilisateur_id:{
        type: DataTypes.INTEGER,
        references:{
            model: "Utilisateur",
            key: 'id'
        }
    },

},{
    sequelize,
    modelName: 'Planning',
    tableName: 'planning',
    timestamps: false
})

module.exports = Planning;
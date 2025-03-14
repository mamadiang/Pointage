const {Model, DataTypes} = require('sequelize')
const sequelize = require('../Config/Sequelize')
const Role = require('./Role');
//const Horaire = require('./Horaire');
class Utilisateur extends Model{

}

Utilisateur.init({

    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    prenom:{
        type: DataTypes.STRING,
        allowNull: false
    },

    nom:{
        type: DataTypes.STRING,
        allowNull: false
    },

    date_naissance:{
        type: DataTypes.DATE,
        allowNull: false
    },

    email:{
        type: DataTypes.STRING,
        allowNull: false
    },

    mot_passe:{
        type: DataTypes.STRING,
        allowNull: false
    },

    adresse:{
        type: DataTypes.STRING,
        allowNull: false
    },

    ville:{
        type: DataTypes.STRING,
        allowNull: false
    },

    code_postal:{
        type: DataTypes.STRING,
        allowNull: false
    },

    role_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references:{
            model: Role,
            key: 'id'
        }
    },

    fonction:{
        type: DataTypes.STRING,
        allowNull: false
    }

},{
    sequelize,
    modelName: "Utilisateur",
    tableName: 'utilisateur',
    timestamps: false
})

Utilisateur.belongsTo(Role, {as: 'role', foreignKey: 'role_id'});
//Utilisateur.hasMany(Horaire, {as: 'horaires', foreignKey: 'utilisateur_id'})


module.exports = Utilisateur;
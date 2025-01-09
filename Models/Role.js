const {Model, DataTypes} = require("sequelize")

const sequelize = require('../Config/Sequelize')

class Role extends Model{

}

Role.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    titre: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    tableName: 'role',
    modelName: 'Role',
    timestamps: false
})

module.exports = Role;
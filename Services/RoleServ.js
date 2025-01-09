const Role = require('../Models/Role')

class Roleserv{

    async getAllRole(){
        return await Role.findAll()
    }

    async getRoleByPk(roleId){
        return await Role.findByPk(roleId)
    }

    async addRole(roleData){
        return await Role.create(roleData)
    }

}

module.exports = new Roleserv();
const Roleserv = require('../Services/RoleServ')

class RoleControl{

    async getAllRole(req, res){
        try{
            const roles = await Roleserv.getAllRole()
            res.json(roles)
        }catch(error){
            res.statut(500).json({error: "Une erreur s'est produite lors de la recuperation des roles"})
        }
    }

    async getRoleByPk(req, res){
        try{
            const role = await Roleserv.getRoleByPk(req.params.id)
            res.json(role)
        }catch(error){
            res.statut(500).json({error: " Une erreur s'est produite lors de la recuperation de role"})
        }
    }

    async addRole(req, res){
        try{
            const role = await Roleserv.addRole(req.body)
            res.json(role)
        }catch(error){
            res.json(500).json({error: " Une erreur s'est produite lors de la creation de role"})
        }
    }
}

module.exports = new RoleControl();
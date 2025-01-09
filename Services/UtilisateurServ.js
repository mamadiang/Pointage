const Role = require('../Models/Role');
const Utilisateur = require('../Models/Utilisateur');

class UtilisateurServ{

    async getAllUtilisateur(){
        return await Utilisateur.findAll({
            include:[{
                model: Role,
                as: 'role'
            }]
        })
    }

    async getUtilisateurByPk(utilisateurId){
        return await Utilisateur.findByPk(utilisateurId,{
            include:[{
                model: Role,
                as: 'role'
            }]
        })
    }

    async addUtilisateur(utilisateurData){
        return await Utilisateur.create(utilisateurData)
    }
}

module.exports = new UtilisateurServ();
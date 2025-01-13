const Role = require('../Models/Role');
const{ Utilisateur, Horaire, Planning} = require('../Models/Associations')

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

    async getUtilisateurAvecHoraires(utilisateurIdAvecHoraire){
        return await Utilisateur.findByPk(utilisateurIdAvecHoraire, {include:[{
            model: Horaire,
            as: 'horaires'
        }]})
    }

    async getUtilisateurAvecPlannings(utilisateurAvecPlanning){
        return await Utilisateur.findByPk(utilisateurAvecPlanning, {include:[{
            model: Planning,
            as: 'plannings'
        }]})
    }
}

module.exports = new UtilisateurServ();
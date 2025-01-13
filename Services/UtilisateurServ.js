const Role = require('../Models/Role');
const{ Utilisateur, Horaire} = require('../Models/Associations')

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
        console.log("Tentative de récupération de l'utilisateur avec ses horaires pour l'ID:", utilisateurIdAvecHoraire);
        return await Utilisateur.findByPk(utilisateurIdAvecHoraire, {include:[{
            model: Horaire,
            as: 'horaires'
        }]})
    }
}

module.exports = new UtilisateurServ();
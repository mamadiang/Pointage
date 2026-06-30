const {Absence, Utilisateur} = require('../Models/Associations')

class AbsenceServ{

    async getAllAbsence(){
        return await Absence.findAll({include:[{
            model: Utilisateur,
            as: 'utilisateur'
        }]})
    }

    
    async getAbsenceByUtilisateurId(utilisateurId){
        return await Absence.findAll({
            where: { utilisateur_id: utilisateurId },
            include: [{
                model: Utilisateur,
                as: 'utilisateur'
            }],
        });
    }


    async addAbsence(absenceData){
        return await Absence.create(absenceData, {include:[{
            model: Utilisateur,
            as: 'utilisateur'
        }]})
    }

    async updateAbsence(absenceId, absenceData){
        return await Absence.update(absenceData,{
                where: { id: absenceId }
            }
        );
    }

}

module.exports = new AbsenceServ();
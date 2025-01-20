const {Absence, Utilisateur} = require('../Models/Associations')

class AbsenceServ{

    async getAllAbsence(){
        return await Absence.findAll({include:[{
            model: Utilisateur,
            as: 'utilisateur'
        }]})
    }

    async getAbsenceByPk(absenceId){
        return await Absence.findByPk(absenceId, {include:[{
            model: Utilisateur,
            as: 'utilisateur'
        }]})
    }

    async addAbsence(absenceData){
        return await Absence.create(absenceData, {include:[{
            model: Utilisateur,
            as: 'utilisateur'
        }]})
    }

}

module.exports = new AbsenceServ();
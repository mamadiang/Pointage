const {Planning, Utilisateur} = require('../Models/Associations')

class PlanningServ{

    async getAllPlanning(){
        return await Planning.findAll({include:[{
            model: Utilisateur,
             as: 'utilisateur'
        }]})
        
    }

    async getPlanningByPk(planningId){
        return await Planning.findByPk(planningId, {include:[{
            model: Utilisateur,
            as: 'utilisateur'
        }]})
    }

    async addPlanning(planningData){
        return await Planning.create(planningData, {include:[{
            model: Utilisateur,
            as: 'utilisateur'
        }]})
    }

    async getPlanningAbsences(planningAbsences){
        return await Planning.findByPk(planningAbsences, {include:[{
            model: 'Absence',
            as: 'absences'
        }]})
    }

}

module.exports = new PlanningServ();
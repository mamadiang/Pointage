const {Planning, Utilisateur} = require('../Models/Associations')
const { Op } = require('sequelize');

class PlanningServ{

    async getAllPlanning(){
        return await Planning.findAll({include:[{
            model: Utilisateur,
             as: 'utilisateur'
        }]})
        
    }


    async getPlanningByPk(userId, dateQuery) {
    // Si une date est fournie, on filtre par date, sinon on rend tout
    let whereCondition = { utilisateur_id: userId };

    if (dateQuery) {
        // Crée un intervalle de 00:00:00 à 23:59:59 pour la date donnée
        const startOfDay = new Date(dateQuery);
        startOfDay.setHours(0, 0, 0, 0);
        
        const endOfDay = new Date(dateQuery);
        endOfDay.setHours(23, 59, 59, 999);

        whereCondition.debut = {
            [Op.between]: [startOfDay, endOfDay]
        };
    }

    return await Planning.findAll({
        where: whereCondition,
        include: [{
            model: Utilisateur,
            as: 'utilisateur'
        }]
    });
}



    async addPlanning(planningData){
        return await Planning.create(planningData, {include:[{
            model: Utilisateur,
            as: 'utilisateur'
        }]})
    }


}

module.exports = new PlanningServ();
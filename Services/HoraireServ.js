const {Horaire, Utilisateur} = require('../Models/Associations')

class HoraireServ{

    async getAllHoraire(){
        return await Horaire.findAll({include:[({
            model: Utilisateur,
            as: 'utilisateur'
         })]})
    }

    async getHoraireByPk(horaireId){
        return await Horaire.findByPk(horaireId, {include:[{
            model: Utilisateur,
            as: 'utilisateur'
        }]})
    }

    async addHoraire(horaireData){
        return await Horaire.create(horaireData)
    }
}

module.exports = new HoraireServ();
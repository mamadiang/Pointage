const HoraireServ = require('../Services/HoraireServ')

class HoraireControl{

    async getAllHoraire(req, res){
        try{
            const horaire = await HoraireServ.getAllHoraire()
            res.json(horaire)
        }catch(error){
            res.status(500).json({error: "Une erreur s'est produite lors de la récuperation des heures"})
        }
    }

    async getHoraireByPk(req, res){
        try{
            const horaire = await HoraireServ.getHoraireByPk(req.params.id)
            res.json(horaire)
        }catch(error){
            res.status(500).json({error: "Une erreur s'est produite lors de la récuperation de l'horaire"})
        }
    }

    async addHoraire(req, res){
        try{
            const horaire = await HoraireServ.addHoraire(req.body)
            res.json(horaire)
        }catch(error){
            res.status(500).json({error: "Une erreur s'est produite lors de l'ajout de l'horaire"})
        }
    }
}

module.exports = new HoraireControl();
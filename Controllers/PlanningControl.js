const PlanningServ = require('../Services/PlanningServ')

class PlanningControl{

    async getAllPlanning(req, res){
        try{
            const planning = await PlanningServ.getAllPlanning()
            res.json(planning)
        }catch(error){
            res.status(500).json({error: "Une erreur s'est produite lors de la récuperation des plannings" })
        }
    }

    async getPlanningByPk(req, res){
        try{
            const planning = await PlanningServ.getPlanningByPk(req.params.id)
            res.json(planning)
        }catch(error){
            res.status(500).json({error: " Une erreur s'est produite lors de la recuperation du planning"})
        }
    }

    async addPlanning(req, res){
        try{
            const planning = await PlanningServ.addPlanning(req.body)
            res.json(planning)
        }catch(error){
            res.status(500).json({error: " Une erreur s'est produite lors de la création de planning"})
        }
    }

    async getPlanningHoraires(req, res){
        try{
            const planning = await PlanningServ.getPlanningHoraires(req.params.id)
            res.json(planning)
        }catch(error){
            res.json(500).json({error: " Une erreur s'est produite lors de la récuperation des horaires du planning"})
        }
    }

    async getPlanningAbsences(req, res){
        try{
            const planning = await PlanningServ.getPlanningAbsences(req.params.id)
            res.json(planning)
        }catch(error){
            res.json(500).json({error: " Une erreur s'est produite lors de la récuperation des absences du planning"})
        }
    }
}

module.exports = new PlanningControl();
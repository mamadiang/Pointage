const { destroy } = require('../Models/Absence')
const AbsenceServ = require('../Services/AbsenceServ')

class AbsenceControl{

    async getAllAbsence(req, res){
        try{
            const absence = await AbsenceServ.getAllAbsence()
            res.json(absence)
        }catch(error){
            res.status(500).json({error: "Une erreur s'est produite lors de la récuperation des absences"})
        }

    }

    async getAbsenceByPk(req, res){
        try{
            const absence = await AbsenceServ.getAbsenceByUtilisateurId(req.params.id)
            res.json(absence)
        }catch(error){
            res.status(500).json({error: "Une erreur s'est produite lors de la récuperation de l'absence"})
        }
    }

    async addAbsence(req, res){
        try{
            const absence = await AbsenceServ.addAbsence(req.body)
            res.json(absence)
        }catch(error){
            res.status(500).json({error: " Une erreur s'est produite lors de l'ajout d'absence ",})
        }
    }


    async updateAbsence(req, res){
        try{
            const absence = await AbsenceServ.updateAbsence(
                req.params.id,
                req.body
            );
            res.json(absence);
        }catch(error){
            res.status(500).json({
                error: "Erreur de modification"
            });
        }
    }

}

module.exports = new AbsenceControl();
const UtilisateurServ = require('../Services/UtilisateurServ')

class UtilisateurControl{

    async getAllUtilisateur(req, res){
        try{
            const utilisateur = await UtilisateurServ.getAllUtilisateur()
            res.json(utilisateur)
        }catch(error){
            res.status(500).json({error: " Une erreur s'est produite lors de la récuperation des utilisateurs"})
        }
    }

    async getUtilisateurByPk(req, res){
        try{
            const utilisateur = await UtilisateurServ.getUtilisateurByPk(req.params.id)
            res.json(utilisateur)
        }catch(error){
            res.status(500).json({error: "Une erreur s'est produite lors de la recuperation de l'utilisateur"})
        }
    }

    async addUtilisateur(req, res){
        try{
            const utilisateur = await UtilisateurServ.addUtilisateur(req.body)
            res.json(utilisateur)
        }catch(error){
            res.status(500).json({error: "Une erreur s'est produite lors de la creation d'utilisateur"})
        }
    }

    async getUtilisateurAvecHoraires(req, res){
        try{
            const utilisateur = await UtilisateurServ.getUtilisateurAvecHoraires(req.params.id)
            res.json(utilisateur)
        }catch(error){
            res.status(500).json({error: "Une erreur s'est produite lors de la récuperation des heures de l'utilisateur"})
        }

    }

    async getUtilisateurAvecPlannings(req, res){
        try{
            const utilisateur = await UtilisateurServ.getUtilisateurAvecPlannings(req.params.id)
            res.json(utilisateur)
        }catch(error){
            console.log(error)
            res.status(500).json({error: " Une erreur s'est produite lors de la récuperation des plannings de l'utilisateur"})
        }
    }
}

module.exports = new UtilisateurControl();
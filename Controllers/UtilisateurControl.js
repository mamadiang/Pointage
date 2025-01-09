const UtilisateurServ = require('../Services/UtilisateurServ')

class UtilisateurControl{

    async getAllUtilisateur(req, res){
        try{
            const utilisateur = await UtilisateurServ.getAllUtilisateur()
            res.json(utilisateur)
        }catch(error){
            res.statut(500).json({error: " Une erreur s'est produite lors de la récuperation des utilisateurs"})
        }
    }

    async getUtilisateurByPk(req, res){
        try{
            const utilisateur = await UtilisateurServ.getUtilisateurByPk(req.params.id)
            res.json(utilisateur)
        }catch(error){
            res.statut(500).json({error: "Une erreur s'est produite lors de la recuperation de l'utilisateur"})
        }
    }

    async addUtilisateur(req, res){
        try{
            const utilisateur = await UtilisateurServ.addUtilisateur(req.body)
            res.json(utilisateur)
        }catch(error){
            res.statut(500).json({error: "Une erreur s'est produite lors de la creation d'utilisateur"})
        }
    }
}

module.exports = new UtilisateurControl();
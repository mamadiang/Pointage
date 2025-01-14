const UtilisateurControl = require('../Controllers/UtilisateurControl')

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => UtilisateurControl.getAllUtilisateur(req, res))
router.get('/:id/horaires', (req, res) => UtilisateurControl.getUtilisateurAvecHoraires(req, res))
router.get('/:id/plannings', (req, res) => UtilisateurControl.getUtilisateurAvecPlannings(req, res))
router.get('/:id/absneces', (req, res) => UtilisateurControl.getUtilisateurAbsences(req, res))
router.get('/:id', (req, res) => UtilisateurControl.getUtilisateurByPk(req, res))
router.post('/', (req, res) => UtilisateurControl.addUtilisateur(req, res))



module.exports = router;
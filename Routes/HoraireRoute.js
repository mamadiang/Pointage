const HoraireControl = require('../Controllers/HoraireControl')

const express = require('express')
const router = express.Router();


router.get('/', (req, res) => HoraireControl.getAllHoraire(req, res))
router.get('/:id', (req, res) => HoraireControl.getHoraireByPk(req, res))
router.get('/utilisateur/:userId', (req, res) => HoraireControl.getHoraireByUtilisateurId(req, res))
router.post('/', (req, res) => HoraireControl.addHoraire(req, res))


module.exports = router;
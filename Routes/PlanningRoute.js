const PlanningControl = require('../Controllers/PlanningControl')

const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>PlanningControl.getAllPlanning(req, res))
router.get('/:id/horaires', (req, res) => PlanningControl.getPlanningHoraires(req, res))
router.get('/:id/absences', (req, res) => PlanningControl.getPlanningAbsences(req, res))
router.get('/:id', (req, res) => PlanningControl.getPlanningByPk(req, res))
router.post('/', (req, res) => {console.log('post planning'); PlanningControl.addPlanning(req, res)})



module.exports = router;
const AbsenceControl = require('../Controllers/AbsenceControl')

const express = require('express')
const router = express.Router();

router.get('/', (req, res) => AbsenceControl.getAllAbsence(req, res))
router.get('/:id/horaires', (req, res) => AbsenceControl.getAbsenceHoraires(req, res))
router.get('/:id', (req, res) => AbsenceControl.getAbsenceByPk(req, res))
router.post('/', (req, res) => AbsenceControl.addAbsence(req, res))

module.exports = router;
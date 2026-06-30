const AbsenceControl = require('../Controllers/AbsenceControl')

const express = require('express')
const router = express.Router();

router.get('/', (req, res) => AbsenceControl.getAllAbsence(req, res))
router.get('/utilisateur/:id',(req, res) => AbsenceControl.getAbsenceByPk(req, res))
router.post('/', (req, res) => AbsenceControl.addAbsence(req, res))
router.patch('/:id', (req, res) => AbsenceControl.updateAbsence(req, res))

module.exports = router;
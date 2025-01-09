const RoleControl = require('../Controllers/RoleControl')

const express = require('express')
const router = express.Router();

router.get('/', (req, res) => RoleControl.getAllRole(req, res))
router.get('/:id', (req, res) => RoleControl.getRoleByPk(req, res))
router.post('/', (req, res) => RoleControl.addRole(req,res))

module.exports = router;
const AuthenticateControl = require('../Controllers/AuthenticateControl')

const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => AuthenticateControl.login(req, res))
router.post('/register', (req, res) => AuthenticateControl.register(req, res))

module.exports = router;
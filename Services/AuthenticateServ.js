const jwt = require('jsonwebtoken')
const config = require('../Config/config.json');

const Utilisateur = require('../Models/Utilisateur')

class AuthenticateServ{

    async register(utilisateurData){
        const utilisateur = await Utilisateur.create(utilisateurData)
        return this.generateToken(utilisateur);
    }

    async login(email, password){
        const utilisateur = await Utilisateur.findOne({where: {email: email}})
        if(!utilisateur || !await utilisateur.validatePassword(password)){
            throw new Error(" l'email ou le password est incorrect")
        }
        return this.generateToken(utilisateur);
    }

    generateToken(utilisateur){
        const payload = {
            id: utilisateur.id,
            email: utilisateur.email
        }
        return jwt.sign(payload, config.SECRET, {expiresIn: '1h'})
    }

}

module.exports = new AuthenticateServ();
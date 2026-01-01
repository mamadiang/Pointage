const AuthenticateServ = require('../Services/AuthenticateServ')

const jwt = require('jsonwebtoken')
const config = require('../Config/config.json')

class AuthenticateControl{

    async register(req, res){
        try{
            const token = await AuthenticateServ.register(req.body)
            res.json({token: token});
        }catch(error){
            res.status(500).json({error: " Une erreur s'est produite lors de l'inscription"})
        }
    }

    async login(req, res) {

            try {
            const { email, password } = req.body;

            const result = await AuthenticateServ.login(email, password);

            res.json({
                token: result.token,
                user: result.user
            });

        } catch (error) {
            res.status(401).json({ message: "Email ou mot de passe incorrect" });
        }
    }


    authenticateToken(req, res, next){
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if(!token){
            return res.status(401).json({error: " Vous n'avez pas accés à cette route"});
        }

        jwt.verify(token, config.SECRET, (error, utilisateur) => {
            if(error){
                return res.status(401).json({error: " Votre token n'est pas valide"})
            }
            req.user = utilisateur;
            next();
        })
    }
}

module.exports = new AuthenticateControl();
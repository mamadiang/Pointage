import { useState } from 'react';
import '../Styles/Connexion.css';
import Navbar from '../Composants/Navbar';
import Footer from '../Composants/Footer';
import { useNavigate } from 'react-router-dom';


const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('')

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError("L'email saisi est invalide");
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!validatePassword(e.target.value)) {
      setPasswordError('Le champ mot de passe est invalide, il doit contenir au moins 8 caractères avec au moins 1 chiffre et 1 caractère spécial');
    } else {
      setPasswordError('');
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError(''); // On vide les erreurs précédentes

    // 1. On vérifie d'abord la validation locale (Regex)
    if (validateEmail(email) && validatePassword(password)) {
      try {
        // 2. Appel à ton API
        const response = await fetch('http://172.20.10.8:3000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password
          }),
        });

        const data = await response.json();
        console.log('USER REÇU DU BACKEND :', data.user);
        console.log('DATA COMPLETE :', data);
        console.log('DATA.USER :', data.user);


        if (response.ok) {
          // 3. SI SUCCÈS : 
          // On enregistre souvent un Token ou les infos user dans le navigateur
          localStorage.setItem('userToken', data.token); 
          localStorage.setItem('userData', JSON.stringify(data.user));

          // On redirige vers l'accueil collab
          navigate('/accueilCollab');
        } else {
          // 4. SI ERREUR (Mauvais mdp, utilisateur inconnu...)
          setLoginError(data.message || "Identifiants invalides");
        }
      } catch (error) {
        // En cas de problème réseau (serveur éteint, etc.)
        setLoginError("Impossible de contacter le serveur.");
      }
    }
  };
  

  
  return (
    <>

    <Navbar/>
    
            <div className="login-container">

                <form onSubmit={handleSubmit} className="login-form">

                    <h2 className='connexion-title'>Connexion</h2>

                    {loginError && <div className="error-main">{loginError}</div>}

                    <div className="form-group">

                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            placeholder="Email" />
                            <br />
                        {emailError && <span className="error">{emailError}</span>}

                    </div>

                    <div className="form-group">

                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            placeholder="Mot de passe" />
                            <br />
                        {passwordError && <span className="error">{passwordError}</span>}
                        <p className="p-forgot">Mot de passe oublié?</p>
                    </div>

                    <button type="submit" disabled={!validateEmail(email) || !validatePassword(password)} >
                        Se connecter
                    </button>
                </form>

            </div>

      <Footer/>

    </>
  );
};

export default Connexion;
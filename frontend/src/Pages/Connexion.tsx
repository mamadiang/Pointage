import React, { useState } from 'react';
import '../Styles/Connexion.css';
import Navbar from '../Composants/Navbar';
import Footer from '../Composants/Footer';

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email) && validatePassword(password)) {
      console.log('Email:', email);
      console.log('Password:', password);
      // Vous pouvez ajouter la logique de connexion ici
    }
  };

  
  return (
    <>

    <Navbar/>
    
            <div className="login-container">

                <form onSubmit={handleSubmit} className="login-form">

                    <h2 className='connexion-title'>Connexion</h2>

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
import {useState} from "react";

import '../Styles/Inscription.css';


function Inscription(){

    const[formData, setFormData] = useState({

        prenom: '', nom:'', date_naissance:'', email:'', mot_passe:'', adresse:'', ville:'', code_postal:'', fonction:'', role_id:'', matricule:''
    })

    const[error, setError] = useState('');
    const[successMessage, setSuccesMessage] = useState('');

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {

        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccesMessage('');

    try {
      const response = await fetch('http://172.20.10.8:3000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), 
      });

      const data = await response.json();

      if (response.ok) {
       
        setSuccesMessage("Votre compte a été créé avec succès ! Vous pouvez maintenant vous connecter.");

        setFormData({
            prenom: '', nom:'', date_naissance:'', email:'', mot_passe:'', adresse:'', ville:'', code_postal:'', fonction:'', role_id:'', matricule:''
        });

        setTimeout(() => {
            setSuccesMessage('');
        }, 5000);

      } else {
        setError(data.error || "Erreur lors de l'inscription");
      }
    } catch (err) {
      setError("Impossible de contacter le serveur.");
    }
  };
    

    return(
        <>

        <div className="register-container">

            <form onSubmit={handleSubmit} className="register-form">

                <h1 className="new-user">Créer un Utilisateur</h1>

                {error && <p className="error">{error}</p>}
                {successMessage && <p className="success">{successMessage}</p>}

                <input name="prenom" value={formData.prenom} placeholder="prenom" onChange={handleChange} />
                <input name="nom" value={formData.nom} placeholder="nom" onChange={handleChange} />
                <input name="date_naissance" value={formData.date_naissance} type="date" placeholder="date de naissance" onChange={handleChange} />
                <input name="email" value={formData.email} type="email" placeholder="email" onChange={handleChange} />
                <input name="mot_passe" value={formData.mot_passe} type="password" placeholder="mot de passe" onChange={handleChange} />
                <input name="adresse" value={formData.adresse} placeholder="adresse" onChange={handleChange} />
                <input name="ville" value={formData.ville} placeholder="ville" onChange={handleChange} /> 
                <input name="code_postal" value={formData.code_postal} placeholder="code postal" onChange={handleChange} />
                <input name="fonction" value={formData.fonction} placeholder="fonction" onChange={handleChange} />
                <input name="role_id" value={formData.role_id} type="number" placeholder="role id" onChange={handleChange} />
                <input name="matricule" value={formData.matricule} placeholder="matricule" onChange={handleChange} /> 
                    <br />
                <button type="submit">Créer</button>

            </form>
        
        </div>
            
        </>
    )
}

export default Inscription;


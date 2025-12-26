import {useEffect, useState} from "react";
import CollabFooter from "../../Composants/CollabFooter";


import logo from '../../assets/Al-Rayan-logo.png'
import profile from '../../assets/utilisateur.png'

import '../../Styles/AbsenceCollab.css';


function AbsenceCollab(){

const [prenom, setPrenom] = useState('')
const [absence, setAbsence] = useState('absence')

const [formData, setFormData] = useState({

    date_debut: '', date_fin:'', type:'', utilisateur_id:'', etat:'', commentaire:''
})

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {

    setFormData({   
        ...formData,
        [e.target.name] : e.target.value
    })
};

const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch('http:/http://172.20.10.8:3000/absence', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
        if (response.ok) {
            console.log('Demande d\'absence soumise avec succès');
        } else {
            console.error('Erreur lors de la soumission de la demande d\'absence');
        }
    } catch (error) {
      console.error('Erreur réseau:', error);
    }
    };
    

    useEffect(() => {

        const userData = localStorage.getItem('userData');

        if (userData) {
        const user = JSON.parse(userData);
        setPrenom(user.prenom);
    }

    }, []);


    return(

        <>
            
            <div className= "Collab-Navbar">

                    <img src={logo} className=" image-logo" alt="logo"  />
                    <span className="user">{prenom}</span>
                    <img src={profile} className="porfile" alt="profileUtilisateur"  />

            </div>

            <div>
            
                <div  className="page1">
                   
                    {absence === 'absence' && (

                    <>        
                        <div>
                            <span className="Abs">Absences/Congés</span>
                        </div> 

                        <div className="conges">
                            
                                <span className="statut">{formData.etat}</span>
                                <span className="dateDebut">Du {formData.date_debut}</span>
                                <span className="dateFin">Au {formData.date_fin}</span>

                        </div>

                        <div>
                                <span className="demander" onClick={() => setAbsence('suivante')}>Nouvelle demande ?</span>
                        </div>

                    </>

                    )}
                    
                </div>

                <div className="page2">

                    {absence === 'suivante' && (

                    <>       
                        <div>
                            <span className="Abs">Absences/Congés</span>
                        </div> 
                        {}
                        
                         <form onSubmit={handleSubmit} className="formAbsence">
                            {}

                                <div>

                                    <input type="date" value={formData.date_debut} onChange={handleChange} name="date_debut" id="" />
                                    <input type="date" value={formData.date_fin} onChange={handleChange} name="date_fin" id="" />
                                
                                </div>

                                <div>

                                    <select name="type" value={formData.type} onChange={handleChange} id="typeDeConge">

                                        <option value=""></option>
                                        <option value="Congé Payé">Congé Payé</option>
                                        <option value="Congé Parental">Congé Parental</option>
                                        <option value="Congé Paternité/Maternité">Congé Paternité/Maternité</option>
                                        <option value="Congé Sabatique">Congé Sabatique</option>
                                        <option value="Congé maladie">Congé Maladie</option>
                                        <option value="Autres">Autres</option>

                                    </select>

                                <br />
                                <br />

                                <div>
                                    <textarea name="commentaire" value={formData.commentaire}
                                    onChange={handleChange}  
                                    id="commenatire" 
                                    cols={30} rows={10}>
                                    </textarea>
                                    </div>

                                </div>
                                <button type="submit" >Envoyer la demande</button>

                            </form>

                        

                    </> )}

                </div> 
               
            
            </div>

        <CollabFooter/>
        </>
    )
}

export default AbsenceCollab;
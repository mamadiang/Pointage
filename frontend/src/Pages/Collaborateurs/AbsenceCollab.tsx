import {useEffect, useState} from "react";
import CollabFooter from "../../Composants/CollabFooter";


import logo from '../../assets/Al-Rayan-logo.png'
import profile from '../../assets/utilisateur.png'

import '../../Styles/AbsenceCollab.css';


function AbsenceCollab(){

const [prenom, setPrenom] = useState('')


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
                <span className="Abs">Absences/Congés</span>
            </div>

            <div className="conges">
                
                <span className="statut">Statut de la demande</span>
                <span className="dateDebut">Du JJ/MM/AAAA</span>
                <span className="dateFin">Au JJ/MM/AAAA</span>
            </div>

            <div>
                <span className="demander">Nouvelle demande ?</span>
            </div>

        <CollabFooter/>
        </>
    )
}

export default AbsenceCollab;
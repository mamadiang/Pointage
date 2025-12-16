import profile from '../../assets/utilisateur.png'
import logo from '../../assets/Al-Rayan-logo.png';

import '../../Styles/AccueilCollab.css'
import CollabFooter from '../../Composants/CollabFooter';



function AccueilCollab(){

    return(

        <>
        
            <div className= "Collab-Navbar">

                    <img src={logo} className=" image-logo" alt="logo"  />
                    <img src={profile} className="porfile" alt="profileUtilisateur"  />

            </div>

            <div className="en-tete">
                <h3 className="bjr"> Bonjour</h3>
                <span className="date">Nous sommes le</span>
            </div>

            <div className="heures">
                <span className="compteur">Compteur</span>
                <br />
                <span>hh</span>
            </div>
        

        <CollabFooter/>
        
        </>
    )
}

export default AccueilCollab;
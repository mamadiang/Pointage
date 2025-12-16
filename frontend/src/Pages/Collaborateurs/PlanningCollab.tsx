import CollabFooter from "../../Composants/CollabFooter";

import logo from '../../assets/Al-Rayan-logo.png';
import profile from '../../assets/utilisateur.png'

import '../../Styles/PlanningCollab.css'

function PlanningCollab(){


    return(

        <>
             
            <div className= "Collab-Navbar">

                    <img src={logo} className=" image-logo" alt="logo"  />
                    <span className="user">Mamad</span>
                    <img src={profile} className="porfile" alt="profileUtilisateur"  />

            </div>
        
            <div>
                <span className="Mplanning">Mon planning</span>
            </div>

            <div>
                <span className="jour">Jour JJ/MM/AAAA</span>
            </div>

            <div>
                <span className="horaires">hh:mn / hh:mn</span>
            </div>

        <CollabFooter/>
        
        </>
    )

}

export default PlanningCollab;
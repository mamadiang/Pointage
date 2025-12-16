import temps from '../assets/temps.png';
import planning from '../assets/planning.png';
import absence from '../assets/absence.png';

import { Link } from 'react-router-dom';


import '../Styles/CollabFooter.css'

function CollabFooter(){

    return(

        <>
        
            <div className="Collabfooter">

            <Link to="/planningCollab">
                <img src={planning} alt="gestionPlanning" />
             </Link>

            <Link to="/accueilCollab">
                 <img src={temps} alt="accueil" />
            </Link>

             <Link to="/absenceCollab">
                <img src={absence} alt="gestionAbsence" />
            </Link>
            </div>
        
        </>

    )

}

export default CollabFooter;
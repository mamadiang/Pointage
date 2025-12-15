import logo from '../assets/Al-Rayan-logo.png';
import verso from '../assets/connexion.png'
import '../Styles/Accueil.css';
import { Link } from 'react-router-dom';


function Accueil(){

    return(
    
        <>
           <div className="accueil"> 

               <Link to="/connexion"> 

                    <h1 className="connexion">
                        <span>Se Connecter</span>
                        <img src={verso} alt="" className="verso-img"/>
                    </h1>

                </Link>

                <div className='imageAccueil'>
                    <img src={logo} alt="" />
                </div>

            </div>
        
        </>
    )
        
}

export default Accueil;
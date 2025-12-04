import logo from '../assets/Al-Rayan-logo.png';
import '../Styles/Accueil.css';

function Accueil(){

    return(
    
        <>
           <div className="accueil"> 

                <h1>Bienvenue</h1>

                <div className='imageAccueil'>
                    <img src={logo} className='logo' alt="" />
                </div>

            </div>
        
        </>
    )
        
}

export default Accueil;
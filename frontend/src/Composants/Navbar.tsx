import logo from '../assets/Al-Rayan-logo.png';
import '../Styles/Navbar.css'


function Navbar(){

    return(

        <>
            <div className="navbar">
                <img src={logo} className= "logo "alt="imageLogo"  />
            </div>
        
        </>
    )

}

export default Navbar;
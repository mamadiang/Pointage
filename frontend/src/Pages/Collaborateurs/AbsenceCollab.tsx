import CollabFooter from "../../Composants/CollabFooter";


import logo from '../../assets/Al-Rayan-logo.png'
import profile from '../../assets/utilisateur.png'

function AbsenceCollab(){


    return(

        <>
            
            <div className= "Collab-Navbar">

                    <img src={logo} className=" image-logo" alt="logo"  />
                    <span className="user">Mamad</span>
                    <img src={profile} className="porfile" alt="profileUtilisateur"  />

            </div>


        <CollabFooter/>
        </>
    )
}

export default AbsenceCollab;
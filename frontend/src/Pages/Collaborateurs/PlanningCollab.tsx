import {useState, useEffect} from "react";
import CollabFooter from "../../Composants/CollabFooter";

import logo from '../../assets/Al-Rayan-logo.png';
import profile from '../../assets/utilisateur.png'

import '../../Styles/PlanningCollab.css'

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'

function PlanningCollab(){

    const [date, setDate] = useState<Date | null>(new Date());
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
                <span className="Mplanning">Mon planning</span>
            </div>
 
            <div className="calendrier-container">

                <Calendar
                    onChange={(value) => setDate(value as Date | null)} 
                    value={date}     
                />

            </div>

            <div>

                <span className="jour">

                        {date ? date.toLocaleDateString('fr-FR', { 
                            weekday: 'long' , 
                            day: '2-digit',    
                            month: 'long',     
                            year: 'numeric' 
                        }) : 'Sélectionnez une date'}

                </span>

            </div>

            <div>
                <span className="horaires">hh:mn / hh:mn</span>
            </div>

        <CollabFooter/>
        
        </>
    )

}

export default PlanningCollab;
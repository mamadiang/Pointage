import { useState, useEffect } from "react";
import CollabFooter from "../../Composants/CollabFooter";
import logo from '../../assets/Al-Rayan-logo.png';
import profile from '../../assets/utilisateur.png';
import '../../Styles/PlanningCollab.css';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function PlanningCollab() {
    const [date, setDate] = useState<Date>(new Date());
    const [prenom, setPrenom] = useState('');
    // On utilise un tableau pour stocker plusieurs plannings
    const [plannings, setPlannings] = useState<any[]>([]);

    // Fonction de formatage compatible Mobile (iOS/Android)
    const formatHeure = (dateString: string | null) => {
        if (!dateString) return null;
        try {
            const time = new Date(dateString);
            if (isNaN(time.getTime())) return null;
            
            return time.toLocaleTimeString('fr-FR', {
                hour: '2-digit',
                minute: '2-digit',
            });
        } catch (e) {
            return null;
        }
    };

    useEffect(() => {
        const userData = localStorage.getItem('userData');
        if (userData) {
            const user = JSON.parse(userData);
            setPrenom(user.prenom);
        }
    }, []);

    useEffect(() => {
        const userData = localStorage.getItem('userData');
        const token = localStorage.getItem('token');

        if (userData && date) {
            const user = JSON.parse(userData);
            
            // Formatage YYYY-MM-DD local
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const localDateString = `${year}-${month}-${day}`;

            // Reset des plannings avant l'appel
            setPlannings([]);

            fetch(`http://172.20.10.8:3000/planning/collaborateur/${user.id}?date=${localDateString}`, {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${token}` }
            })
            .then(response => response.ok ? response.json() : [])
            .then(data => {
                // On s'assure que data est toujours un tableau
                const results = Array.isArray(data) ? data : [data];
                setPlannings(results);
            })
            .catch((err) => {
                console.error("Erreur fetch:", err);
                setPlannings([]);
            });
        }
    }, [date]);

    return (
        <>
            <div className="Collab-Navbar">
                <img src={logo} className="image-logo" alt="logo" />
                <span className="user">{prenom}</span>
                <img src={profile} className="porfile" alt="profile" />
            </div>

            <div><span className="Mplanning">Mon planning</span></div>

            <div className="calendrier-container">
                <Calendar 
                    onChange={(val) => setDate(val as Date)} 
                    value={date} 
                />
            </div>

            <div className="affichage-date">
                <span className="jour">
                    {date.toLocaleDateString('fr-FR', {
                        weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'
                    })}
                </span>
            </div>

            <div className="horaires-container">
                {plannings.length > 0 ? (
                    plannings.map((p, index) => {
                        const hDebut = formatHeure(p.debut);
                        const hFin = formatHeure(p.fin);
                        
                        return (
                            <div key={p.id || index} style={{ marginBottom: '10px' }}>
                                <span className="horaires">
                                    {hDebut && hFin 
                                        ? `Heure de travail : de ${hDebut} à ${hFin}` 
                                        : 'Horaire mal défini'}
                                </span>
                            </div>
                        );
                    })
                ) : (
                    <span className="horaires">Aucun planning disponible pour cette date</span>
                )}
            </div>

            <CollabFooter />
        </>
    );
}

export default PlanningCollab;
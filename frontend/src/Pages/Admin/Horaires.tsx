import { useState, useEffect } from "react";

import '../../Styles/CollaborateurList.css'

function Horaires(){

    interface heures{
        id?: number;
        utilisateur?:{
            prenom: string;
            nom: string;
        }
        prenom: string;
        nom: string;
        entree: string;
        sortie: string;
        date_creation: string;
    }

    const [heure, setHeure] = useState<heures[]>([])
    const [error, setError] = useState('')

    useEffect(()=>{

        fetch('http://172.20.10.8:3000/horaire')
        .then(response =>{
            if(!response.ok){
                throw new Error('il n\'y a aucune reponse')
            }
            return response.json()
            })
            .then(data =>{
                if(data){
                    console.log('Recuperation obtenu', data)
                    setHeure(data)
                }
            })
            .catch(error =>{
                console.log('Erreur de recuperation des données' + error.message)
            })
        
    }, []);

    useEffect(()=>{

        fetch('http://172.20.10.8:3000/horaire/:id')

        .then(response =>{
            if(!response.ok){
                throw new Error(' aucune reponse obtenu')  
            }return response.json()
        })
        .then(data =>{
            if(data){
                console.log('recuperation reussi', data);
                setHeure(data)  
            }
        })
        .catch(error =>{
            setError('Erreur de recuperation de ses heures' + error.message)
        })

    }, []);

    return(

        <>
            <div className="Admin-Navbar">

            </div>

            <h2>Horaires</h2>
         {error && <p style={{ color: 'red' }}>{error}</p>}

         <table>

            <thead>
                <tr>
                    <th>Prénom</th>
                    <th>Nom</th>
                    <th>Entrée</th>
                    <th>Sortie</th>
                    <th>Date</th>
                    
                </tr>
            </thead>

            <tbody>
                {heure.map(horaires =>(

                <tr key={horaires.id}>

                    <td>{horaires.utilisateur?.prenom}</td>
                    <td>{horaires.utilisateur?.nom}</td>
                    <td>{horaires.entree}</td>
                    <td>{horaires.sortie}</td>
                    <td>{horaires.date_creation}</td>
                </tr>
            ))}
            </tbody>


         </table>


        
        </>
    )
}

export default Horaires;
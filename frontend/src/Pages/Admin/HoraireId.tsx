import { useState, useEffect } from "react";
import {Link, useParams } from "react-router-dom";




function HoraireId(){

    interface User{
        id?: number,
        utilisateur?:{
            prenom: string,
            nom: string
        }
        entree: string,
        sortie: string,
        date_creation: string
    }

    const [user, setUser] = useState<User[]>([])
    const [erreur, setErreur ] = useState('')

    const {id} = useParams();


    useEffect(() =>{

        fetch(`http://172.20.10.8:3000/horaire/utilisateur/${id}`)
        .then(response =>{
            if(!response.ok){
                throw new Error("Aucune reponse")
            }
            return response.json();
        })
        .then(data =>{
            if(data){
                console.log(" recuperation des données reussi")
                setUser(data)
            }
        })
        .catch(error =>{
            setErreur(" Erreur de recuperation des données de l'utilisateur" + error.message)
        })
    }, [])

    return(
        <>

            <Link to="/horaire">

                <h3 style={{cursor: 'pointer'}}> Retour </h3>    
            
            </Link>

                    {erreur&& <p style={{color: 'red'}}>{erreur}</p>}
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
                {user.map( users=>(

                <tr key={users.id}
            
                >

                    <td>{users.utilisateur?.prenom}</td>
                    <td>{users.utilisateur?.nom}</td>
                    <td>{users.entree}</td>
                    <td>{users.sortie}</td>
                    <td>{
                        new Date(users.date_creation).toLocaleDateString('fr-FR')}
                    </td>
                </tr>
            ))}
            </tbody>


         </table>




        </>
    )


}

export default HoraireId;
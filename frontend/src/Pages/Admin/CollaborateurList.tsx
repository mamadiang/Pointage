import { useState, useEffect } from "react";

import '../../Styles/CollaborateurList.css'


function CollabList(){

    interface Collaborateur{

        prenom: string, 
        nom: string 
        matricule: string
        fonction: string, 
        id: number, 
        ville: string, 
        code_postal: string
        date_naissance: string,
        email: string 
        role?:{
            id: number, titre: string
            };
        adresse: string;
    }


    const [collabs, setCollabs] = useState<Collaborateur[]>([])

     const[error, setError] = useState('');

    useEffect(()=>{

        fetch('http://172.20.10.8:3000/utilisateur')
        .then(response =>{
            if(!response.ok){
                throw new Error("Il n'y a aucune reponse")
            }
            return response.json()
        })
        .then(data =>{
            console.log('Recupertaion des données', data);
            setCollabs(data)
        })
        .catch(error =>{
            setError('Erreur de récupération des données: ' + error.message)
        })

    }, [])

    return(

        <>
        
            <div className="Admin-Navbar">

            </div>

            <div>

                <h2>Collaborateurs</h2>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                <table>

                    <thead>
                        <tr>
                            <th>Prenom</th>
                            <th>Nom</th>
                            <th>Fonction</th>
                            <th>Matricule</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Date de Naissance</th>
                            <th>Ville</th>
                            <th>Code Postal</th>
                            <th>Adresse</th>
                        </tr>
                    </thead>

                    <tbody>
                            {collabs.map(collaborateur=>(
                        <tr key={collaborateur.id}>

                            <td>{collaborateur.prenom}</td>
                            <td>{collaborateur.nom}</td>
                            <td>{collaborateur.fonction}</td>
                            <td>{collaborateur.matricule}</td>
                            <td>{collaborateur.role?.titre}</td>
                            <td>{collaborateur.email}</td>
                            <td>{collaborateur.date_naissance}</td>
                            <td>{collaborateur.ville}</td>
                            <td>{collaborateur.code_postal}</td>
                            <td>{collaborateur.adresse}</td>

                        </tr>
                            
                        ))}

                    </tbody>

                </table>


            </div>
        
        </>
    )

}

export default CollabList;
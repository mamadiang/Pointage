import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Absence(){


    interface Conges{

        id : number,
        utilisateur?:{
            id?: number
            prenom: string,
            nom: string
        },
        type: string,
        date_debut: string,
        date_fin: string,
        etat: string,
        commentaire: string
    }



    const [repos, setRepos] = useState<Conges[]>([])
    const [ erreur, setErreur] = useState('');

    const navigate = useNavigate();


    useEffect(()=>{

         fetch('http://172.20.10.8:3000/absence')
         .then(response =>{
            if(!response.ok){
                throw new Error('aucune reponse')
            }
            return response.json()
         })
         .then(data =>{
            console.log("données recuperées ", data);
            setRepos(data)
         })
         .catch(error =>{
            setErreur('Il y a erreur de recuperation' + error.message)
         })

    }, [])


    return(

        <>
        
            <div>

            </div>

            <h2>Les demandes d'absences</h2>

            {erreur && <p style={{ color: 'red' }}>{erreur}</p>}

            <table>
                <thead>
                    <tr>

                        <th>Prenom</th>
                        <th>Nom</th>
                        <th>Nature</th>
                        <th>Debut</th>
                        <th>Fin</th>
                        <th>Commentaire</th>
                        <th>Statut</th>
                        
                    </tr>
                </thead>

                <tbody>

                    {repos.map(conge=>(
                    <tr key={conge.id}
                    
                        onClick={()=> navigate(`/AbsenceId/${conge.utilisateur?.id}`)}
                        style={{cursor: 'pointer'}}
                    >

                        <td>{conge.utilisateur?.prenom}</td>
                        <td>{conge.utilisateur?.nom}</td>
                        <td>{conge.type}</td>
                        <td>{
                            new Date(conge.date_debut).toLocaleDateString('fr-FR')}
                        </td>
                        <td>{
                             new Date(conge.date_fin).toLocaleDateString('fr-FR')}
                        </td>
                        <td>{conge.commentaire}</td>
                        <td>{conge.etat}</td>
                        
                    </tr>
                    
                    ))}
                </tbody>
            </table>

        
        </>
    )
}

export default Absence;
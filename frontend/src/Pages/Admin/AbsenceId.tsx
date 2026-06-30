import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

interface Absence {
    id?: number;
    utilisateur?: {
        prenom: string;
        nom: string;
    };
    type: string;
    date_debut: string;
    date_fin: string;
    commentaire: string;
    etat: string;
}

function AbsenceId() {
    const [absences, setAbsences] = useState<Absence[]>([]);
    const [erreur, setErreur] = useState('');
    const { id } = useParams();

   
    useEffect(() => {
        fetch(`http://172.20.10.8:3000/absence/utilisateur/${id}`)
            .then(response => {
                if (!response.ok) throw new Error("Sans réponse");
                return response.json();
            })
            .then(data => {
                setAbsences(data);
            })
            .catch(error => {
                setErreur("Erreur de récupération de ses absences : " + error.message);
            });
    }, [id]);

    const handleEtatChange = (absenceId: number | undefined, nouvelEtat: string) => {
        if (!absenceId) return;
        
        setAbsences(prevAbsences =>
            prevAbsences.map(abs =>
                abs.id === absenceId ? { ...abs, etat: nouvelEtat } : abs
            )
        );
    };

    const handleValider = (absence: Absence) => {
        if (!absence.id) return;

        fetch(`http://172.20.10.8:3000/absence/${absence.id}`, {
            method: "PATCH", // ou PUT selon votre API
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ etat: absence.etat }) 
        })
        .then(response => {
            if (!response.ok) throw new Error("Échec de la mise à jour");
            alert(`L'absence a bien été mise à jour en : ${absence.etat}`);
        })
        .catch(error => {
            setErreur("Erreur lors de la validation : " + error.message);
        });
    };

    return (
        <>
            <Link to="/absence">
                <h3>Retour</h3>
            </Link>

            {erreur && <p style={{ color: 'red' }}>{erreur}</p>}

            <table>
                <thead>
                    <tr>
                        <th>Prénom</th>
                        <th>Nom</th>
                        <th>Nature</th>
                        <th>Début</th>
                        <th>Fin</th>
                        <th>Commentaire</th>
                        <th>Statut</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {absences.map(abs => (
                        <tr key={abs.id}>
                            <td>{abs.utilisateur?.prenom}</td>
                            <td>{abs.utilisateur?.nom}</td>
                            <td>{abs.type}</td>
                            <td>{new Date(abs.date_debut).toLocaleDateString('fr-FR')}</td>
                            <td>{new Date(abs.date_fin).toLocaleDateString('fr-FR')}</td>
                            <td>{abs.commentaire}</td>
                            <td>
                                <select 
                                    value={abs.etat} 
                                    onChange={(e) => handleEtatChange(abs.id, e.target.value)}
                                >
                                    <option value="En attente">En attente</option>
                                    <option value="Approuvé">Approuvé</option>
                                    <option value="Rejeté">Rejeté</option>
                                </select>
                            </td>
                            <td>
                                <button onClick={() => handleValider(abs)}>Valider</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default AbsenceId;

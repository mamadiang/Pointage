// import Planning from "./Pages/Planning"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Accueil from "./Pages/Accueil";
import Connexion from "./Pages/Connexion";
import Inscription from "./Pages/Inscription";
import AccueilCollab from "./Pages/Collaborateurs/AccueilCollab";
import AbsenceCollab from "./Pages/Collaborateurs/AbsenceCollab";
import PlanningCollab from "./Pages/Collaborateurs/PlanningCollab";
import CollabList from "./Pages/Admin/CollaborateurList";
import Horaires from "./Pages/Admin/Horaires";
import Absences from "./Pages/Admin/Absence";
import HorairesId from "./Pages/Admin/HoraireId";
import AbsenceId from "./Pages/Admin/AbsenceId";

function App() {
 
  return(
    
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Accueil/>} />
        <Route path="/connexion" element={<Connexion/>} />
        <Route path="/inscription" element={<Inscription/>} />
        <Route path="/accueilCollab" element={<AccueilCollab/>} />
        <Route path="/absenceCollab" element={<AbsenceCollab/>} />
        <Route path="/planningCollab" element={<PlanningCollab/>} />
        <Route path="/inscription" element={<Inscription/>} />
        <Route path="/collaborateurList" element={<CollabList/>} />
        <Route path="/horaire" element={<Horaires/>} />
        <Route path="/absence" element={<Absences/>} />
        <Route path="/horaireId/:id" element={<HorairesId/>} />
        <Route path="/absenceId/:id" element={<AbsenceId/>} />
        

      </Routes>
      
    
    </BrowserRouter>

  
  )
}

export default App

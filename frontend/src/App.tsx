// import Planning from "./Pages/Planning"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Accueil from "./Pages/Accueil";
import Connexion from "./Pages/Connexion";
import Inscription from "./Pages/Inscription";
import AccueilCollab from "./Pages/Collaborateurs/AccueilCollab";
import AbsenceCollab from "./Pages/Collaborateurs/AbsenceCollab";
import PlanningCollab from "./Pages/Collaborateurs/PlanningCollab";

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
        

      </Routes>
      
    
    </BrowserRouter>

  
  )
}

export default App

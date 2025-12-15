// import Planning from "./Pages/Planning"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Accueil from "./Pages/Accueil";
import Connexion from "./Pages/Connexion";
import Inscription from "./Pages/Inscription";

function App() {
 
  return(
    
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Accueil/>} />
        <Route path="/connexion" element={<Connexion/>} />
        <Route path="/inscription" element={<Inscription/>} />

      </Routes>
      
    
    </BrowserRouter>

  
  )
}

export default App

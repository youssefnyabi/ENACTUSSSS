import './App.css';
import Navbar from './projet/navbar';
import Accueil from './projet/accueil';
import Membres from './projet/membres';
import Evenements from './projet/Evenements';
import Contact from './projet/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rejoindre from './projet/rejoindre';
import SousAccueil from './projet/sousaccueil';
import WaveDivider from './WaveDivider';
function App() {
  return (
    <div className="App">
     <Router>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/sousaccueil" element={<SousAccueil />} />

        <Route path="/membres" element={<Membres />} />
        <Route path="/evenements" element={<Evenements />} />
        <Route path="/rejoindre" element={<Rejoindre />} />
      </Routes>
    </Router>
         <WaveDivider/>
    
      <Contact/>
      
      
    </div>
  );
}

export default App;

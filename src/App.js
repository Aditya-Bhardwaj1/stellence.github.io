import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BOD from './components/BOD/BOD';

import NavBar from './components/Global-components/NavBar';
import Infrastructure from './components/Infrastructure/Infrastructure';
import MeetTeam from './components/MeetTheTeam/MeatTeam';
import Timeline from './components/Timeline/Timeline';
import Aboutus from './components/Aboutus/Aboutus';
import APIs from './components/APIs/APIs';
import HEIs from './components/HEIs/HEIs';
import Nutraceuticals from './components/Nutraceuticals/Nutraceuticals';
import HomePage from './components/HomePage/HomePage';
import ContactUs from './components/ContactUs/ContactUs';
import VisionMission from './components/VisionMission/VisionMission';
import SCK from './components/SpecializedChemistryKnowledge/SCK';
import PeptideT from './components/PeptideTechnology/PeptideT';
import Diagnostics from './components/Diagnostics-RTPCR/Diagnostics';
import Rtpcr from './components/CaseStudies/Rtpcr/Rtpcr';
import FormDev from './components/CaseStudies/FormulationDevelopment/FormDev';
import StellenceNutra from './components/CaseStudies/StellenceNutra/StellenceNutra';



function App() {
  return (<>
    <Router>
    <NavBar/>
    <Routes>
     <Route exact path='/' element={<HomePage/>}/>       
     <Route exact path='/contact-us' element={<ContactUs/>}/>
     <Route exact path='/aboutus' element={<Aboutus/>}/>  
     <Route exact path='/aboutus/vision' element={<VisionMission/>}/>
     <Route exact path='/aboutus/BOD' element={<BOD/>}/>  
     <Route exact path='/aboutus/keymanagement' element={<MeetTeam/>}/>  
     <Route exact path='/aboutus/infrastructure' element={<Infrastructure/>}/>  
     <Route exact path='/aboutus/timeline' element={<Timeline/>}/>  
     <Route exact path='/technology/chemistryknowledge' element={<SCK/>}/> 
     <Route exact path='/technology/peptide' element={<PeptideT/>}/>
     <Route exact path='/technology/diagnostics' element={<Diagnostics/>}/>
     <Route exact path='/products/api' element={<APIs/>}/>
     <Route exact path='/products/nutraceuticals' element={<Nutraceuticals/>}/>
     <Route exact path='/products/specialitychemicals' element={<HEIs/>}/>
     <Route exact path='/casestudies/formulations' element={<FormDev/>}/>
     <Route exact path='/casestudies/stellencenutra' element={<StellenceNutra/>}/>
     <Route exact path='/casestudies/rtpcr' element={<Rtpcr/>}/>
        
    </Routes>
    </Router>
    </>
  );
}

export default App;

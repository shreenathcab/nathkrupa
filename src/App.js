import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shirdi from './Pages/List/Shirdi';
import Mahabaleshwar from './Pages/List/Mahabaleshwar';
import PuneToMumbai from './Pages/List/PuneToMumbai';
import PuneToNashik from './Pages/List/PuneToNashik';
import PuneToTrimbakeshwar from './Pages/List/PuneToTrimbakeshwar';
import PuneToAurangabad from './Pages/List/PuneToAurangabad';
import PuneToKolhapur from './Pages/List/PuneToKolhapur';
import PuneToGoa from './Pages/List/PuneToGoa';
import PuneToLavasa from './Pages/List/PuneToLavasa';
import PuneToBhimashankar from './Pages/List/PuneToBhimashankar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/shirdi" element={<Shirdi />} />
          <Route path="/maha" element={<Mahabaleshwar />} />
          <Route path="/mumbai" element={<PuneToMumbai />} />
          <Route path="/nashik" element={<PuneToNashik />} />
          <Route path="/trimbakeshwar" element={<PuneToTrimbakeshwar />} />
          <Route path="/aurangabad" element={<PuneToAurangabad />} />
          <Route path="/kolhapur" element={<PuneToKolhapur />} />
          <Route path="/goa" element={<PuneToGoa />} />
          <Route path="/lavasa" element={<PuneToLavasa />} />
          <Route path="/bhimashankar" element={<PuneToBhimashankar />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

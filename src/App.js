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
import PuneToPandharpur from './Pages/List/PuneToPandharpur';
import PuneToLonavala from './Pages/List/PuneToLonavala';
import PuneToAkkalkot from './Pages/List/PuneToAkkalkot';
import PuneToGanpatipule from './Pages/List/PuneToGanpatipule';
import PuneToAshtavinayak from './Pages/List/PuneToAshtavinayak';
import PuneToTuljapur from './Pages/List/PuneToTuljapur';
import PuneToAjanta from './Pages/List/PuneToAjanta';
import PuneToTirupati from './Pages/List/PuneToTirupati';
import PuneToHampi from './Pages/List/PuneToHampi';
import PuneToGujarat from './Pages/List/PuneToGujrat';
import Ujjain from './Pages/List/Ujjain';
import Omkareshwar from './Pages/List/Omkareshwar';
import Ayodhya from './Pages/List/Ayodhya';

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
          <Route path="/pandharpur" element={<PuneToPandharpur />} />
          <Route path="/lonavala" element={<PuneToLonavala />} />
          <Route path="/akkalkot" element={<PuneToAkkalkot />} />
          <Route path="/ganpatipule" element={<PuneToGanpatipule />} />
          <Route path="/ashtavinayak" element={<PuneToAshtavinayak />} />
          <Route path="/tuljapur" element={<PuneToTuljapur />} />
          <Route path="/ajanta" element={<PuneToAjanta />} />
          <Route path="/tirupati" element={<PuneToTirupati />} />
          <Route path="/hampi" element={<PuneToHampi />} />
          <Route path="/gujarat" element={<PuneToGujarat />} />
          <Route path="/ujjain" element={<Ujjain />} />
          <Route path="/omkareshwar" element={<Omkareshwar />} />
          <Route path="/ayodhya" element={< Ayodhya/>} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

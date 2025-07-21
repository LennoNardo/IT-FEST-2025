import React from 'react';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Competition from './pages/competition/Competition'
import Training from './pages/training/Training';
import Webinar from './pages/Seminar';
import Footer from './components/Footer';
import Android from './pages/training/Android';
import Web from './pages/training/Web';
import Fotografi from './pages/competition/Fotografi';
import MobileLegend from './pages/competition/MobileLegend';
import Pubg from './pages/competition/Pubg';
import WebDesign from './pages/competition/WebDesign';
import Poster from './pages/competition/Poster';
import NotFound from './pages/NotFound';
import Seminar from './pages/Seminar';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kompetisi" element={<Competition />} />
          <Route path="/pelatihan" element={<Training />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/pelatihan/android" element={<Android />} />
          <Route path="/pelatihan/web" element={<Web />} />
          <Route path="/kompetisi/fotografi" element={<Fotografi />} />
          <Route path="/kompetisi/ml" element={<MobileLegend />} />
          <Route path="/kompetisi/pubg" element={<Pubg />} />
          <Route path="/kompetisi/webdesign" element={<WebDesign />} />
          <Route path="/kompetisi/poster" element={<Poster />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

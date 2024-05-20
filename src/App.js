import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductWall from './components/ProductWall';
import Footer from './components/Footer';
import Nav from './components/Nav';
import VintageKits from './components/VintageKits';
import NewKits from './components/NewKits';
import NationalTeams from './components/NationalTeams';
import PremierLeague from './components/PremierLeague';
import LaLiga from './components/LaLiga';
import SerieA from './components/SerieA';
import Bundesliga from './components/Bundesliga';
import Ligue1 from './components/Ligue1';
import Mls from './components/Mls';
import Other from './components/Other';
import FAQ from './components/faq';
import Email from './components/Email';
import Pdt from './components/Pdt';
import jsonData from './data.json';

function App() {
  return (
    <Router>
      <div>
        <Email />
        <Nav />
        <Routes>
          <Route path="/" element={<ProductWall products={jsonData} />} />
          <Route path="/vintageKits" element={<VintageKits products={jsonData} />} />
          <Route path="/newKits" element={<NewKits products={jsonData} />} />
          <Route path="/nationalTeams" element={<NationalTeams products={jsonData} />} />
          <Route path="/premierLeague" element={<PremierLeague products={jsonData} />} />
          <Route path="/laLiga" element={<LaLiga products={jsonData} />} />
          <Route path="/serieA" element={<SerieA products={jsonData} />} />
          <Route path="/bundesliga" element={<Bundesliga products={jsonData} />} />
          <Route path="/ligue1" element={<Ligue1 products={jsonData} />} />
          <Route path="/mls" element={<Mls products={jsonData} />} />
          <Route path="/other" element={<Other products={jsonData} />} />
          <Route path="/faq" element={<FAQ products={jsonData} />} />
          <Route path="/product/:id" element={<Pdt products={jsonData} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

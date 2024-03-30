// App.js
import React, { useEffect, useState } from 'react';
import ProductWall from './components/ProductWall';
import Footer from './components/Footer';
import Nav from './components/Nav';
import VintageKits from './components/VintageKits';
import NewKits from './components/NewKits';
import FAQ from './components/faq';
import Email from './components/Email';
// import Subscriber from './components/Subscriber';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import jsonData from './data.json'; // Import data.json

// Add inline styles for fade-in effect
const styles = {
  fadeIn: {
    opacity: 0,
    transition: 'opacity 1.5s ease-in-out',
  },
  fadeInShow: {
    opacity: 1,
  },
};

function App() {
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false);
    setShowContent(true); // Set showContent to true when data is fetched
  }, []);

  return (
    <div style={{ ...styles.fadeIn, ...(showContent && styles.fadeInShow), width: '100%' }}>
      <Router>
        <Email />
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<ProductWall products={jsonData} />}
          />
          <Route
            path="/vintageKits"
            element={<VintageKits products={jsonData} />}
          />
          <Route
            path="/newKits"
            element={<NewKits products={jsonData} />}
          />
          <Route
            path="/faq"
            element={<FAQ products={jsonData} />}
          />
          {/* <Route
            path="/newsletter"
            element={<Subscriber />}
          /> */}
          {/* Add other routes for different pages */}
        </Routes>
      </Router>
      {loading && <p>Loading...</p>}
      {/* {error && <p>Error: {error}</p>} */}
      <Footer />
    </div>
  );
}

export default App;

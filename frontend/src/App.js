// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './Main';
import Kontakt from './Kontakt';
import Katalog from './Katalog';
import Red from './Red';
import Yellow from './Yellow';
import Blue from './Blue';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/red" element={<Red />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/yellow" element={<Yellow />} />
      </Routes>
    </>
  );
}

export default App;
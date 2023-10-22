import React from 'react';
import Design from './Design';
import Askramus from './Askramus';
import Comingsoon from './Comingsoon';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Askramus/>}>
        </Route>
        <Route path="/About" element={< Comingsoon/>}>
        </Route>
        <Route path="/Gallery" element={< Comingsoon/>}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;

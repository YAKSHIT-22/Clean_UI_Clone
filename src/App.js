import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './Pages/LandingPage';

function App() {
  
  return (
    <>
    <Header/>
      <Routes>
      <Route exact path='/' element={<LandingPage/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

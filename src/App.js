import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog/Blog";
import LandingPage from "./Pages/LandingPage";
import Portfolio from "./Pages/Portfolio/Portfolio";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/portfolio" element={<Portfolio />} />
      <Route exact path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;

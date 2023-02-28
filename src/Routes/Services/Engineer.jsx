import React from "react";
import { Route, Routes } from "react-router";

export default function Engineer() {
  return (
    <Routes>
      <Route path="/ios" element={<h1>ios</h1>} />
      <Route path="/android" element={<h1>android</h1>} />
      <Route path="/flutter" element={<h1>flutter</h1>} />
      <Route path="/react_native" element={<h1>react_native</h1>} />
      <Route path="/software_development" element={<h1>software_development</h1>} />
      <Route path="/web_development" element={<h1>web_development</h1>} />
      <Route path="/chatbot" element={<h1>chatbot</h1>} />
    </Routes>
  );
}

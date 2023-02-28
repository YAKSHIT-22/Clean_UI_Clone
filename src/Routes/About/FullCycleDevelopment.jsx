import React from "react";
import { Route, Routes } from "react-router";

export default function FullCycleDevelopment() {
  return (
    <Routes>
      <Route path="/product_managment" element={<h1>product_managment</h1>} />
      <Route path="/mvp" element={<h1>mvp</h1>} />
    </Routes>
  );
}

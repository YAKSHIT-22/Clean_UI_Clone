import React from "react";
import { Route, Routes } from "react-router";
import Descover from "./Descover";
import Engineer from "./Engineer";

export default function Services() {
  return (
    <Routes>
      <Route path="/descover/*" element={<Descover />} />
      <Route path="/design" element={<h1>design</h1>} />
      <Route path="/engineer/*" element={<Engineer />} />
    </Routes>
  );
}

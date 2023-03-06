import React from "react";
import { Route, Routes } from "react-router";
import FullCycleDevelopment from "./FullCycleDevelopment";

export default function About() {
  return (
    <Routes>
      <Route path="/our_company" element={<>our company</>} />
      <Route path="/agile_development" element={<>agile_development</>} />
      <Route path="/carers" element={<>carers</>} />
      <Route
        path="/full_cycle_developemt/*"
        element={<FullCycleDevelopment />}
      />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

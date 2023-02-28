import React from "react";
import { Route, Routes } from "react-router";

export default function Descover() {
  return (
    <Routes>
      <Route path="/digital_marketing" element={<h1>digital_marketing</h1>} />
      <Route path="/seo" element={<h1>seo</h1>} />
      <Route path="/smo" element={<h1>smo</h1>} />
      <Route path="/ppc" element={<h1>ppc</h1>} />
      <Route path="/email_marketing" element={<h1>email_marketing</h1>} />
    </Routes>
  );
}

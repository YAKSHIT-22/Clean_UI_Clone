import React from "react";
import { Route, Routes } from "react-router";
import { Faqs } from "../components/Global";
import Blog from "../Pages/Blog";
import Portfolio from "../Pages/Portfolio";
import About from "./About";
import Services from "./Services";

export default function AllPages() {
  return (
    <Faqs>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/services/*" element={<Services />} />
      </Routes>
    </Faqs>
  );
}

import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Global({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

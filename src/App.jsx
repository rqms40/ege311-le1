import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <h1 className="text-4xl font-extrabold text-custom-violet hover:text-custom-violet-dark mb-4">
          LE 1 - Creative Output
        </h1>
        <h2 className="text-2xl font-semibold text-custom-violet hover:text-custom-violet-dark">
          Group 3
        </h2>
      </div>

      <Footer />
    </>
  );
};

export default App;

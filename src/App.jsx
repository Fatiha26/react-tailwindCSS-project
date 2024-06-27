import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import React from "react";
import Feature from "./components/Feature";
const App = () => {
  return (
    <>
    <NavBar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
       <Hero />
    </div>
    <Feature />
    </>
  );
};

export default App;

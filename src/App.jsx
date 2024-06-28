import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import React from "react";
import Feature from "./components/Feature";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
    <NavBar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
       <Hero />
    </div>
    <Feature />
    <Workflow />
    <Pricing />
    <Testimonial />
    <Footer />
    </>
  );
};

export default App;

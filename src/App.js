// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import FoodGrid from './components/FoodGrid';
import Home from './components/Home';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <FoodGrid/> */}
      <Home />
    <Footer />
    </div>
  );
}

export default App;


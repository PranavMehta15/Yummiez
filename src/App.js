// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FoodGrid from './components/FoodGrid';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <FoodGrid />
    </div>
  );
}

export default App;


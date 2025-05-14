// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Home from './components/Home';
import Footer from "./components/Footer";
import Partner from "./components/partnership";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div><Hero /><Home /><Footer /></div>} />
        <Route path="/partner" element={<Partner />} />
      </Routes>
    </Router>
  );
}

export default App;


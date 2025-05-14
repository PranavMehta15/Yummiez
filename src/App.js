// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './components/Home';
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from "../src/components/About.jsx";
import Error from "../src/components/Error.jsx"; // Import the Error component
import ContactUs from "../src/components/ContactUs.jsx"; // Import the ContactUs component
import RestaurantMenu from './components/RestaurantMenu.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Outlet />
      <Footer />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />, 
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contactUs",
        element: <ContactUs />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      },
    ]
  }
]);
function Root() {
  return <RouterProvider router={appRouter} />;
}

export default Root;


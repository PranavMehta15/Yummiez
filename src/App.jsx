// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Home from './components/Home.jsx';
import Footer from "./components/Footer.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import AboutUs from "./components/AboutUs.jsx";
import Careers from "./components/Careers.jsx";

import Error from "./components/Error.jsx"; // Import the Error component
import ContactUs from "./components/ContactUs.jsx"; // Import the ContactUs component
import RestaurantMenu from './components/RestaurantMenu.jsx';
import OrderSummary from './components/OrderSummary.jsx'; // Import the OrderSummary component
import PaymentGateway from './components/PaymentGateway.jsx';

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
        element: <AboutUs />
      },
      {
        path: "/contactUs",
        element: <ContactUs />
      },
      {
        path: "/careers",
        element: <Careers />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      },
      {
        path: "/orderSummary",
        element: <OrderSummary /> 
      },
      {
        path: "/PaymentGateway",
        element: <PaymentGateway />
      }
    ]
  }
]);
function Root() {
  return <RouterProvider router={appRouter} />;
}

export default Root;


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
import Team from './components/Team.jsx';
import Help from './components/Help.jsx';
import Partnership from './components/partnership.jsx';
import Error from "./components/Error.jsx"; // Import the Error component
import ContactUs from "./components/ContactUs.jsx"; // Import the ContactUs component
import RestaurantMenu from './components/RestaurantMenu.jsx';
import OrderSummary from './components/OrderSummary.jsx'; // Import the OrderSummary component
import PaymentGateway from './components/PaymentGateway.jsx';
import TNC from './components/TNC.jsx';//terms and conditions
import Privacy from './components/Privacy.jsx';  //privacy policy
import Cookie from './components/Cookie.jsx';//cookie policy
import Ride from './components/Ride.jsx';//ride with us
import AdminPanel from "./components/Admin.jsx";
import ManageRestaurantFood from "./components/ManageRestaurant.jsx";
import "./App.css"; 
import Location from './components/Location.jsx';

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
        element: <Location/>
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
        path: "/help",
        element: <Help />
      },
      {
        path: "/partner",
        element: <Partnership />
      },
       {
        path: "/team",
        element: <Team />
      },
      {
        path: "/terms",
        element: <TNC />
      },
      {
        path: "/privacy",
        element: <Privacy />
      },
      {
        path: "/cookies",
        element: <Cookie />
      },
       {
        path: "/ride",
        element: <Ride />
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
      },
       { path: "/admin/:restaurantId", element: <AdminPanel /> }, // Admin route
      { path: "/manage-restaurant-food/:restaurantId", element: <ManageRestaurantFood /> }, // Manage restaurant food route
      { path: "/manage-restaurant", element: <ManageRestaurantFood /> }, // Manage restaurant route
    ]
    
  }
]);
function Root() {
  return <RouterProvider router={appRouter} />;
}

export default Root;


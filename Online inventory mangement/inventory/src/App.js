/*import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

function App()
{
  return(
    <div className="App">
      
      <Home />

      
    </div>
  );
}
export default App;*/
import './App.css';
import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AboutUs from "./components/AboutUs";
import PendingOrders from "./components/PendingOrders";
import DeliveredOrders from "./components/DeliveredOrders";
import CancelledOrders from "./components/CancelledOrders";
import MyProfile from "./components/MyProfile";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Set the default route to the Login page */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/PendingOrders" element={<PendingOrders />} />
          <Route path="/DeliveredOrders" element={<DeliveredOrders />} />
          <Route path="/CancelledOrders" element={<CancelledOrders />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
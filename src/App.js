
import { useEffect } from "react";

import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import {useSelector } from "react-redux";
import  "./styles/global.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import User from "./pages/User";
import Register from "./pages/Register"
import Header from "./container/Header";


const Index = () => {
  const selector = useSelector((state) => state.auth);
  let token = localStorage.getItem("token")
  useEffect(() => {

  },[selector.is_auth])
  
  return (
    <div >
      <BrowserRouter>
      {/* {token ? <Header/> : ''}  */}
      <Header/>
         <Routes>
            <Route path="/" element={  <Home />  } /> 
            <Route path="/login" element={ !token ? <Login /> : <Navigate to="/profile" /> } /> 
            <Route path="/register" element={ !token ? <Register/> : <Navigate to="/profile" /> } /> 
            <Route path="/profile" element={ token ? <Profile /> : <Navigate to="/login" /> } /> 
            <Route path="/user/:id" element={ <User /> } /> 
         </Routes>
      </BrowserRouter>
    </div>
  );
}
 

export default Index;;

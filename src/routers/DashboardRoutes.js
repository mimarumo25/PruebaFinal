import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "../components/Home";


export const DashboardRoutes = () => {
  
  return (
    <div>
      <Routes>
      <Route exact path="/*" element={<Home/>} />       
      </Routes>
    </div>
  );
};



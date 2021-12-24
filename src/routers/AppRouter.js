import { getAuth, onAuthStateChanged } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { login } from "../actions/loginAction";
import "bootstrap/dist/css/bootstrap.min.css";
import { PrivateRoute } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoutes";
import {DashboardRoutes} from './DashboardRoutes'
import Login from '../components/users/login/Login.jsx'
import { Register } from "../components/users/user/Register";


const AppRouter = () => {
  const dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [dispatch,isLoggedIn]);
  return (
    <Router>
      <Routes>
      
        <Route
          path="/login"
          element={
            <PublicRoute isAuthenticated={isLoggedIn}>
              <Login isAuthenticated={isLoggedIn}/>
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute isAuthenticated={isLoggedIn}>
              <Register />
            </PublicRoute>
          }
        /> 
                
         
        <Route
          path="/*"
          element={
            <PrivateRoute isAuthenticated={isLoggedIn}>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
      {/*<Routes>
        <Route exact path="/" element={<Principal />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />       
  <Route exact path="/register" element={<Register />} />
        
      </Routes>
      */}
    </Router>
  );
};

export default AppRouter;

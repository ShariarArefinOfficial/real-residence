//import React from 'react';
import { useContext } from "react";
//import { AuthContext } from "../../authProvider/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProviders";

const PrivateRoutes = ({children}) => {
    const {user, loading}=useContext(AuthContext)
    const location = useLocation();
    console.log(location.pathname);

    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/signin"></Navigate>;
};

export default PrivateRoutes;
//import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from "../SharedComponent/NavBar/NavBar";
import Footer from "../SharedComponent/Footer/Footer";

const Root = () => {
    return (
        <div >
            
            <Outlet></Outlet>
            <Footer></Footer>

            
            
        </div>
    );
};

export default Root;
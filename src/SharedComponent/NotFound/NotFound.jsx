//import React from 'react';

import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import PageTitle from "../PageTitle/PageTitle";

const NotFound = () => {
    const title='404-Real Residence'
    return (
        <>
        <PageTitle title={title}></PageTitle>
        <NavBar></NavBar>
        <div className="text-center">
            <div className="text-center">
                <h1 className="text-[200px] font-bold">404</h1>
            </div>
            <div>
                <p className="text-5xl font-bold">Not Found</p>
                <Link to='/' className="underline text-center">Visit Home Page </Link>
            </div>
            
        </div>
        </>
        
    );
};

export default NotFound;
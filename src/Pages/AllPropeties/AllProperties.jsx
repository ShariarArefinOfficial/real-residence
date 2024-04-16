//import React from 'react';

//import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import NavBar from "../../SharedComponent/NavBar/NavBar";
import Properties from "../Properties/Properties";

const AllProperties = () => {
    const prop=useLoaderData()
    return (
        <div>
            
            <div className="bg-[#666666] p-10">
                <h1 className="text-3xl text-center font-bold text-white ">View All Properties</h1>
            </div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    prop.map(pro=><Properties
                    pro={pro}
                    key={pro.id}
                    ></Properties>)
                }
            </div>
            
        </div>
    );
};

export default AllProperties;
//import React from 'react';

//import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
//import NavBar from "../../SharedComponent/NavBar/NavBar";
import Properties from "../Properties/Properties";
import PageTitle from "../../SharedComponent/PageTitle/PageTitle";

const AllProperties = () => {
    const prop=useLoaderData()
    const title='All Properties-Real Residence'


    return (
        <div>
            <PageTitle title={title}></PageTitle>
            <div className="bg-[#666666] p-10">
                <h1 className="text-3xl text-center font-bold text-white ">View All Properties</h1>
            </div>
            <div className="flex justify-center items-center">
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    prop.map(pro=><Properties
                    pro={pro}
                    key={pro.id}
                    ></Properties>)
                }
            </div>
            </div>
            
        </div>
    );
};

export default AllProperties;
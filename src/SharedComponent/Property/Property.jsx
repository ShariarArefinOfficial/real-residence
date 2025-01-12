//import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Property = () => {
    const propertyDetails=useLoaderData();
    const {id}=useParams();
    const propertyId=parseInt(id);
    const currentProperty=propertyDetails.find((property) => parseInt(property.id) === propertyId);
    const {area
        ,
        description
       ,
        estate_title
        ,
        facilities
        ,
       
        image
        ,
        location
        ,
        price
        ,
        segment_name
        ,
        status
        ,type
        }=currentProperty;
    return (
        <div className=" max-w-screen-xl mx-auto">
            <NavBar></NavBar>
            <div className="bg-[#666] p-10 mb-10">
                <p className="text-center text-3xl text-white font-bold">{type} Property Details</p> 
            </div>
            <div className="flex flex-col md:flex-row justify-center items-start gap-5 mb-10">
              <div className="p-5 flex-1">
                <img src={image} alt={estate_title} className="w-96 mx-auto" />
              </div>
              <div className="flex-1 p-5 border-2 rounded-xl space-y-5">
              <p className="text-2xl text-[#666]"><span className="text-black  font-bold">Property Name:</span>{estate_title}</p>
              <p className="text-2xl text-[#666]"><span className="text-black  font-bold">Property Type:</span>{type}</p>
              <p className="text-2xl text-[#666]"><span className="text-black  font-bold">Property Status:</span>{status}</p>
              <p className="text-2xl text-[#666]"><span className="text-black  font-bold">Property Segment Name:</span>{segment_name}</p>
              <p className="text-2xl text-[#666]"><span className="text-black  font-bold">Property Name:</span>{area}</p>
              <p className="text-2xl text-[#666]">{description}</p>
              <div className=" flex flex-col justify-center items-center">
                <p className="text-2xl  font-bold">Facilities:</p>
              <ul>
              {
                facilities.map((data,idx)=><li
                key={idx}
                 className="text-xl font-medium text-center text-[#666]"><span>{idx+1}.</span>{data}</li>)
              }
              </ul>
              </div>
              <div className="flex flex-col justify-center items-center gap-5 my-3">
              <p className=" text-xl rounded-xl font-medium">Location : {location}</p>
              <p className=" text-xl rounded-xl font-medium">price:{price}</p>


            </div>
              

              </div>
            </div>
        </div>
    );
};

export default Property;
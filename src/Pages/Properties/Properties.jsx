//import React from 'react';

import { Link } from "react-router-dom";
import 'animate.css';

const Properties = ({pro}) => {
    const {id,estate_title,image,location,price,status,area,segment_name}=pro
    //console.log(pro)
  return (
    <div className="mr-0 md:mr-5">
      <div className=" p-4 bg-white border-2  w-96  image-full rounded-xl animate__animated  animate__fadeInUp">
        <figure >
          <img
           src={image} 
           alt={estate_title}
           className="w-full h-[250px] rounded-xl"
           />
        </figure>
        <div className="bg-blue-500  p-4 rounded-xl mt-5  w-full ">
            <h3 className="text-center font-bold text-2xl">{estate_title}</h3>
            <p className="text-center font-semibold text-xl">{location}</p>
            <div className="flex flex-row justify-center items-center gap-5 my-3">
              <p className="underline text-xl rounded-xl font-medium">{status}</p>
              <p className="underline text-xl rounded-xl font-medium">{area}</p>
              <p className="underline text-xl rounded-xl font-medium">{segment_name}</p>


            </div>
            <p className="text-center font-semibold text-xl text-white">Price : {price}</p>

        </div>
        <div className="flex justify-center items-center mt-3">
          <Link to={`/property/${id}`}>
          <button className="bg-[#666] text-white font-medium p-4 rounded-xl ">View Details</button>
          </Link>
        </div>
         
      </div>
    </div>
  );
};

export default Properties;

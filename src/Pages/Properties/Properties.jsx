//import React from 'react';

const Properties = ({pro}) => {
    const {estate_title,image,location,price}=pro
    console.log(pro)
  return (
    <div>
      <div className=" p-4 bg-white border-2  w-96  image-full rounded-xl">
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
            <p className="text-center font-semibold text-xl text-white">Price : {price}</p>

        </div>
        <div className="flex justify-center items-center mt-3">
            <button className="bg-[#666] text-white font-medium p-4 rounded-xl ">View Details</button>
        </div>
         
      </div>
    </div>
  );
};

export default Properties;

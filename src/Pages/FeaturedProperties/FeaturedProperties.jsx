import { useState } from "react";
import Properties from "../Properties/Properties";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const FeaturedProperties = ({data}) => {
    const [featureProperty,setFeatureProperty]=useState();
    
    

    console.log(data.slice(0,2))
    return (
        <div className="my-12">
            <h3 className="font-medium text-center text-3xl text-[#000]">FEATURED PROPERTIES</h3>
            <p className="font-medium text-xl text-[#666] text-center w-1/2 mx-auto">Welcome to a world of possibilities, where every door opens to a new adventure and every window frames a dream. </p>
            <div className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data.slice(0,6).map((pro)=><Properties
                    key={pro.id}
                    pro={pro}
                    ></Properties>)}
                </div>
                <div className="  flex justify-center items-center">

                    <Link to='/allProperties'>
                    <button className="p-4 bg-blue-500 rounded-xl border-2 mt-5 text-white">View All Properties</button>

                    </Link>

                </div>
            </div>
        </div>
    );
};

export default FeaturedProperties;
//import React from 'react';

import { useLoaderData } from "react-router-dom";
import NavBar from "../../SharedComponent/NavBar/NavBar";
import Slider from "../../SharedComponent/Slider/Slider";
import FeaturedProperties from "../FeaturedProperties/FeaturedProperties";

const Home = () => {
    const data=useLoaderData();
    return (
        <div className=" max-w-screen-xl mx-auto">
            <NavBar></NavBar>
            <Slider></Slider>
            <FeaturedProperties
            data={data}
            ></FeaturedProperties>

            
            
        </div>
    );
};

export default Home;
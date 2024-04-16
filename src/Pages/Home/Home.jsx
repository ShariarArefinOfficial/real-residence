//import React from 'react';

import { useLoaderData } from "react-router-dom";
//import NavBar from "../../SharedComponent/NavBar/NavBar";
import Slider from "../../SharedComponent/Slider/Slider";
import FeaturedProperties from "../FeaturedProperties/FeaturedProperties";
import PageTitle from "../../SharedComponent/PageTitle/PageTitle";

const Home = () => {
    const data=useLoaderData();
    const title='Home-Real Residence'
    return (
        <div >
           <PageTitle title={title}></PageTitle>
            <Slider></Slider>
            <FeaturedProperties
            data={data}
            ></FeaturedProperties>

            
            
        </div>
    );
};

export default Home;
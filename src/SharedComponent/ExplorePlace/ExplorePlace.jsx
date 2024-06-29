//import React from 'react';

const ExplorePlace = () => {
    return (   
        <div className="bg-[#f8f8f8] p-24 rounded-xl mt-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 ">
            <div>
                <h1 className="text-3xl font-bold text-black mb-5">EXPLORE PROPERTIES IN NEW YORK</h1>
                <p className="text-xl text-[#666] mt-5 mb-8">New York City's real estate market has something to offer everyone. With its dynamic neighborhoods, rich cultural tapestry, and unparalleled amenities, the Big Apple continues to captivate buyers and investors from around the globe.</p>
                <button className="py-4 px-5 rounded-xl bg-slate-600 text-white">Explore Now</button>
            </div>
            <div>
            <iframe width="560" className="w-[300px] lg:w-[560px] h-[200px] lg:h-[315px]" height="315" src="https://www.youtube.com/embed/hnvTDnmlvBg?si=8bROMQmgw8WA3T5P" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
            </div>
          </div>  
        </div>
    );
};

export default ExplorePlace;
//import React from 'react';

import Marquee from "react-fast-marquee";
import Properties from "../Properties/Properties";
import { useLoaderData } from "react-router-dom";

const RunningProperty = () => {
    const data=useLoaderData()
  return (
    <div>
      <Marquee pauseOnHover={true} speed={80}>
      <div className="flex justify-center items-start gap-5">
      {data.slice(0,6).map((pro)=><Properties
                    key={pro.id}
                    pro={pro}
                    ></Properties>)}
      </div>

      </Marquee>
    </div>
  );
};

export default RunningProperty;

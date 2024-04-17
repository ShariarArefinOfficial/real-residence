//import React from 'react';

const OurAgent = () => {
  return (
    <div className="p-10 my-5">
      <h1 className="text-center text-black font-bold text-3xl mb-5">
        Meet Our Agent
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div>
          <div className="card w-96 bg-base-100 border-2">
            <figure className="px-10 pt-10">
            
              <img
                src="https://i.ibb.co/C2rzRP9/Screenshot-2024-04-17-T064005-821.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Cathrin</h2>
              <p className="text-xl font-semibold text-blue-500">CEO</p>
              
            </div>
          </div>
        </div>
        <div>
        <div className="card w-96 bg-base-100 border-2">
            <figure className="px-10 pt-10">
            
              <img
                src="https://i.ibb.co/b1gZdKW/Screenshot-2024-04-17-T064242-414.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Lucy</h2>
              <p className="text-xl font-semibold text-blue-500">Agent</p>
              
            </div>
          </div>
        </div>
        <div>
        <div className="card w-96 bg-base-100 border-2">
            <figure className=" pt-10">
           
              <img
                src="https://i.ibb.co/Y3xK6mz/Screenshot-2024-04-17-T064602-028.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">John</h2>
              <p className="text-xl font-semibold text-blue-500">Agnet</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAgent;

//import React from 'react';

import { useForm } from "react-hook-form";
import NavBar from "../../SharedComponent/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProviders";
import PageTitle from "../../SharedComponent/PageTitle/PageTitle";

const UpdateProfile = () => {
    const {updateUserProifile}=useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      
      const onSubmit = (data) => {
        const {photo,name}=data;
         // create user
         updateUserProifile(name,photo)
        
        }
        const title='Update Profile-Real Residence'

    return (
        <div>
           <PageTitle title={title}></PageTitle>
            <div className=" min-h-screen flex flex-col justify-center items-center m-5">
            <div className="w-full md:w-1/2 border-2 border-blue-500 rounded-xl p-5">
                <h2 className="text-3xl my-10 text-center font-bold">Update Your Profile</h2>
                <form onSubmit={handleSubmit(onSubmit)} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" required name="name" {...register("name")} placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" required {...register("photo")} name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                     <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required {...register("email")} name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                   
                    
                       
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Profile</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
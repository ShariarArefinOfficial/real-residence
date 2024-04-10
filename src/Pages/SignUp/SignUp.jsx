//import React from 'react';

import { Link } from "react-router-dom";
import NavBar from "../../SharedComponent/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProviders";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
         // create user
         createUser(email, password)
         .then(result => {
             console.log(result.user)
         })
         .catch(error => {
             console.error(error)
         })

    

    }
    return (
        <div>
            <NavBar></NavBar>
            <div className=" min-h-screen flex flex-col justify-center items-center m-5">
            <div className="w-full md:w-1/2 border-2 border-blue-500 rounded-xl p-5">
                <h2 className="text-3xl my-10 text-center font-bold">Sign Up Now</h2>
                <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                       
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/signin">Login</Link></p>
            </div>
            </div>
        </div>
    );
};

export default SignUp;
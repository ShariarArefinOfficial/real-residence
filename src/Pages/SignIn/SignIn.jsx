//import React from 'react';
//import { useContext } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../SharedComponent/NavBar/NavBar";
import { useContext } from "react";

import { AuthContext }  from "../../authProvider/AuthProviders"


const SignIn = () => {
    //const { signIn } = useContext(AuthContext);
    const info = useContext(AuthContext)
    const {signIn,googleSignIn}=info;
    console.log(googleSignIn)
  const handleLogin = (e) => {   
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        // navigate after login
        // navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
   
  };
  return (
    <div >
      <div>
        <NavBar></NavBar>
        <div className=" min-h-screen flex flex-col justify-center items-center" >
          <div className="w-full md:w-1/2 border-2 border-blue-500 rounded-xl p-5">
          <h2 className="text-3xl my-10 text-center font-bold">Sign In Now</h2>
          <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                required
                name="password"
                placeholder="Password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
          <p className="text-center mt-4">
            Do not have an account{" "}
            <Link className="text-blue-600 font-bold" to="/signup">
              Sign Up
            </Link>
          </p>
          <div className="p-5 flex flex-row justify-center items-center gap-4">
          <button onClick={()=>googleSignIn()} className="btn btn-success">Sign In with Google</button>
          <button className="btn btn-success">Sign In with Github</button>

          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

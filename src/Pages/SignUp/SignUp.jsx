//import React from 'react';

import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../SharedComponent/NavBar/NavBar";
import { useContext, useState } from "react";
import { AuthContext } from "../../authProvider/AuthProviders";
import { useForm } from "react-hook-form";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
    const navigate=useNavigate();
  const location=useLocation();
  const form =location?.state || '/'
    const { createUser,updateUserProifile } = useContext(AuthContext);
    const [registerError,setRegisterError]=useState('');
    //const [registerSuccess,setRegisterSuccess]=useState('');
    const [show,setShow]=useState(false)

    // const location = useLocation();
    // console.log(location?.state);


    // const handleRegister = e => {
    //     e.preventDefault();
    //     console.log(e.currentTarget);
    //     const form = new FormData(e.currentTarget);

    //     const name = form.get('name');
    //     const photo = form.get('photo');
    //     const email = form.get('email');
    //     const password = form.get('password');
    //     console.log(name, photo, email, password);
    //      // create user
    //      createUser(email, password)
    //      .then(result => {
    //          console.log(result.user)
    //          updateUserProifile()
    //      })
    //      .catch(error => {
    //          console.error(error)
    //      })

    

    // }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      
      const onSubmit = (data) => {
        const {email,password,name,photo}=data;

        setRegisterError('');
       // setRegisterSuccess('')

        if(password.length<6){
            setRegisterError('Password Must Be 6 character')
            toast.error("Password Must Be 6 character");
            return;

        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('At leat One UpperCase needed');
            toast.error("At leat One UpperCase needed");
          return;
        }
        else if(!/[a-z]/.test(password)){
            setRegisterError('At leat One UpperCase needed');
            toast.error("At leat One LowerCase needed");
            return;
        }
        

          


         // create user
         createUser(email, password)
         .then(result => {
            toast.success("Sign Up SuccessFull!");
             updateUserProifile(name,photo)
             if(result.user){
                navigate(form);
              }
         })
         .catch(error => {
             console.error(error)
         })
      }

    return (
        <div>
            
            <div className=" min-h-screen flex flex-col justify-center items-center m-5">
            <div className="w-full md:w-1/2 border-2 border-blue-500 rounded-xl p-5">
                <h2 className="text-3xl my-10 text-center font-bold">Sign Up Now</h2>
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="flex flex-row items-center">
                        <input 
                        type={show ? "text" : "password"} 
                        required {...register("password", { required: true })} name="password" placeholder="Password" className="input input-bordered w-full" />
                        <span onClick={()=>setShow(!show)} className="-ml-10">
                            {
                                show ?
                                <MdOutlineRemoveRedEye></MdOutlineRemoveRedEye>
                                :
                                <FaRegEyeSlash></FaRegEyeSlash>
                            }
                            </span>
                        </div>
                       
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
             
             
                <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/signin">Login</Link></p>
            </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default SignUp;
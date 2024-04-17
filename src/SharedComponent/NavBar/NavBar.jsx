//import React from 'react';

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProviders";
import userPicture from "../../assets/user.png";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };

  console.log(user)
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allProperties">All Properties</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to="/updateProfile">Update Profile</NavLink>
          </li>
          <li>
            <NavLink to="/myprofile">My Profile</NavLink>
      </li>
        </>
      ) : (
        <></>
      )}
      <li>
            <NavLink to="/contactUS">Contact Us</NavLink>
      </li>
      

    </>
  );
  return (
    <div className="pt-4">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-2xl font-bold ">
            Real Residence
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="dropdown  dropdown-hover mr-0 md:mr-10 ">
                <div tabIndex={0} role="button" className="btn m-1">
                <Link>
                <img
                  src={user.photoURL}
                  alt=""
                  className="w-10 rounded-full mr-4"
                />
              </Link>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-20 menu  shadow bg-base-100 rounded-box w-40"
                >
                  <li>
                    <Link to='/myprofile'>{user.displayName}</Link>
                  </li>
                  <li>
                  <button onClick={handleSignOut} className="btn">
                Sign Out
              </button>
                  </li>
                </ul>
              </div>
              
            </>
          ) : (
            <>
              <Link to="/signin" className="btn bg-blue-600 mr-2">
                Sign In
              </Link>
              <Link to="/signup" className="btn bg-green-600">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

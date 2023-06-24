import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
// import {
//   FaGithub,
//   FaTwitter,
//   FaLinkedin,
// } from 'react-icons/fa';

function Navbar() {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav)
  }
  const [cookies, setCookies] = useCookies(["access_token"]);


  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    alert("Logged out Successfully")
    navigate("/");
  };
  return (
    <>
      <div className="navBar flex justify-between items-center p-[3rem] bg-black ">
        <div className="logoDiv">
          <div className="logo text-[25px] text-blueColor ">
            <strong>job</strong>INC.
          </div>
          <ul className={!nav ? 'hidden' : 'absolute bg-transperaent w-full p-[3rem] text-white'}>
            <li className='border-b-2 border-zinc-300 w-full'>Home</li>
            <li className='border-b-2 border-zinc-300 w-full'>About me</li>
            <li className='border-b-2 border-zinc-300 w-full'>Projects</li>
            <li className='border-b-2 border-zinc-300 w-full'>Contact me</li>
          </ul>
        </div>
        <ul className='hidden md:flex'>
          <div className="menu flex gap-8">
            <li className="menuList txt-[#6f6f6f] text-slate-400 hover:text-blueColor"><Link to="/">Jobs</Link></li>
            <li className="menuList txt-[#6f6f6f] text-slate-400 hover:text-blueColor"><Link to="/about">About</Link></li>
            <li className="menuList txt-[#6f6f6f] text-slate-400 hover:text-blueColor"><Link to="/blogs">Blogs</Link></li>
            <li className="menuList txt-[#6f6f6f] text-slate-400 hover:text-blueColor">
              {!cookies.access_token ? (
                <Link to="/login">Login/Register</Link>
              ) : (
                <button onClick={logout}> Logout </button>
              )}
            </li>
            <li className="menuList txt-[#6f6f6f] text-slate-400 hover:text-blueColor">
              {!cookies.access_token ? (
                <Link to="/login">Employeers</Link>
              ) : (
                <>
                  <Link to="/jobpost"> Post Job </Link>
                </>
              )}
            </li>
            <li className="menuList txt-[#6f6f6f] text-slate-400 hover:text-blueColor">
              {!cookies.access_token ? (
                <Link to="/login">Applied Job</Link>
              ) : (

                <Link to="/appliedjobs"> Applied Job </Link>
              )}
            </li>
          </div>
        </ul>
      </div>
      <div className='md:hidden mr-4' onClick={handleClick}>
        {!nav ? <MenuIcon className='w-5 bg-white' /> : <XIcon className='w-5 bg-white' />}

      </div>




    </>

  )
}

export default Navbar;


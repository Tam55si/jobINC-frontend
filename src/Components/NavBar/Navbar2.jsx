import React, { useState } from 'react';
// import sign3 from "../assets/sign3.png";
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import {
    FaGithub,
    FaTwitter,
    FaLinkedin,
    FaHome,
    FaCommentDots,
    FaReadme,
    FaInfoCircle
} from 'react-icons/fa';


function Navbar2() {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav)
    }
    return (
        <div className='w-screen h-[80px] z-10  fixed drop-shadow-lg text-white'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <div className="logo text-[25px] text-blueColor ">
                        <strong>job</strong>INC.
                    </div>
                    {/* <img src={sign3} alt="/" className='w-[50px] h-[50px] ml-4' /> */}
                    {/* <h1 className='text-3xl font-bold ml-4 sm:text-4xl font-Alkatra cursive'>Tanmoy</h1> */}
                    <ul className='hidden md:flex ml-8'>
                        <button className='border-none bg-transparent text-white mr-4 w-full px-3'><FaHome /></button>
                        <button className='border-none bg-transparent text-white mr-4 w-full px-3 '><FaInfoCircle /></button>
                        <button className='border-none bg-transparent text-white mr-4 w-full px-3 '><FaReadme /></button>
                        <button className='border-none bg-transparent text-white mr-4 w-full px-3 '><FaCommentDots /></button>
                    </ul>
                </div>
                {/* <div className='hidden md:flex pr-4 '>
                    <button className='border-none bg-transparent text-white mr-4 '><FaGithub /></button>
                    <button className='border-none bg-transparent text-white mr-4 '><FaLinkedin /></button>
                    <button className='border-none bg-transparent text-white mr-4 '><FaTwitter /></button>
                </div> */}
                <div className='md:hidden mr-4' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}

                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-[#081e30] w-full px-8 text-white'}>
                <li className='border-b-2 border-zinc-300 w-full'>Home</li>
                <li className='border-b-2 border-zinc-300 w-full'>About me</li>
                <li className='border-b-2 border-zinc-300 w-full'>Projects</li>
                <li className='border-b-2 border-zinc-300 w-full'>Contact me</li>
                <div className='flex flex-col my-4'>
                    <button className='border-none bg-transparent text-white mr-4 px-8 py-3 mb-4'><FaGithub /></button>
                    <button className='border-none bg-transparent text-white mr-4 px-8 py-3 mb-4'><FaLinkedin /></button>
                    <button className='border-none bg-transparent text-white mr-4 px-8 py-3 mb-4'><FaTwitter /></button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar2;

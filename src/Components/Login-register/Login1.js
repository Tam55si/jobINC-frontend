import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const handleClick = () => {
    toast("Login Successfull!");
}

function Login() {
    return (
        <div>
            <button onClick={handleClick}>Login</button>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default Login


import { useState, useRef } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Link, useNavigate, Outlet } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import r from '../../assets/registerbg.jpg';
import reg from '../../assets/registerbg.jpg';



export const Auth = () => {

    return (
        <>
            <Login />
        </>
    )
}


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [openRegister, setOpenregister] = useState(false);
    const navigate = useNavigate();

    const menuRef = useRef();

    window.addEventListener('click', (e) => {
        if (e.target !== menuRef.current && e.target) {
            setOpenregister(false);
        }
    })



    return (
        <div className="p-[5rem] mb-4  rounded-[10px] gap-8  m-auto">
            <h1 className='text-center text-gray-400 p-4 text-2xl'>Please Login here</h1>
            <div className='grid grid-cols-1 bg-[#040b29] rounded-[10px] p-[2rem] mb-2'>
                <form className='grid gap-4 bg-[#C7D2FE] rounded-[10px] p-[10rem]'>
                    {/* <div className='grid grid-cols-2'>
                        <h2 className=''>Registration Form</h2>
                        <h3>All the fields are important</h3>
                    </div> */}




                    <div className='grid grid-cols-2'>
                        <label htmlFor='username'>User Name: </label>
                        <input type='text' value={username} id='username' onChange={(e) => setUsername(e.target.value)} className='bg-[#C4B5FD] px-4' />
                    </div>
                    <div className='grid grid-cols-2'>
                        <label htmlFor='password'>Password: </label>
                        <input type='password' value={password} id='password' onChange={(e) => setPassword(e.target.value)} className='bg-[#C4B5FD] px-4' />
                    </div>
                    <button type='submit' className='bg-white'>Login</button>
                    <button className='text-center text-gray-400 p-4 text-2xl bg-white' onClick={() => openRegister(!openRegister)} ref={menuRef}>For Registration Click here</button>

                </form>
            </div>
            {
                openRegister && <Register ref={menuRef} />
            }
        </div>
    )

};


const Register = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [emailid, setEmailid] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("https://jobinc-backend.onrender.com/auth/register", { firstname, lastname, emailid, username, password });
            alert("Registration Completed! Now Login.")
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className="p-[5rem] mb-4  rounded-[10px] gap-8  m-auto">
            <h1 className='text-center text-gray-400 p-4 text-2xl'>Please Register here</h1>
            <div className='grid grid-cols-2 bg-[#C7D2FE] rounded-[10px] p-[2rem] mb-2'>

                <div className=' items-center justify-center'>

                    <img src={reg} className='p-[1.25rem]' alt='' />
                </div>
                <form onSubmit={onSubmit} className='grid gap-4'>
                    <div className='grid grid-cols-2'>
                        <h2 className=''>Registration Form</h2>
                        <h3>All the fields are important</h3>
                    </div>

                    <div className='grid grid-cols-2'>
                        <label htmlFor='firstname'>First Name: </label>
                        <input type='text' value={firstname} id='firstname' onChange={(e) => setFirstname(e.target.value)} className='bg-[#C4B5FD] px-1' />
                    </div>
                    <div className='grid grid-cols-2'>
                        <label htmlFor='lastname'>Last Name: </label>
                        <input type='text' value={lastname} id='lastname' onChange={(e) => setLastname(e.target.value)} className='bg-[#C4B5FD] px-4' />
                    </div>
                    <div className='grid grid-cols-2'>
                        <label htmlFor='emailid'>Email Id: </label>
                        <input type='email' value={emailid} id='emailid' onChange={(e) => setEmailid(e.target.value)} className='bg-[#C4B5FD] px-4' />
                    </div>
                    <div className='grid grid-cols-2'>
                        <label htmlFor='username'>User Name: </label>
                        <input type='text' value={username} id='username' onChange={(e) => setUsername(e.target.value)} className='bg-[#C4B5FD] px-4' />
                    </div>
                    <div className='grid grid-cols-2'>
                        <label htmlFor='password'>Password: </label>
                        <input type='password' value={password} id='password' onChange={(e) => setPassword(e.target.value)} className='bg-[#C4B5FD] px-4' />
                    </div>
                    <button type='submit' className='bg-white'>Register</button>

                </form>

            </div>

        </div>
    )

};
import React from 'react'
import bg from '../../assets/404.png';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <div className="container px-10 mx-auto">

                <section className=" text-slate-300 text-center flex gap-10 justify-center flex-wrap items-center py-5 mb-[4rem] mt-[8rem] bg-[#1E293B] rounded-[10px]">


                    <div className="grid md:grid-cols-2 gap-x-6 lg:gap-x-12 lg:p-8 md:p-4" >
                        <div className='pb-5'>
                            <h2 className="text-3xl font-thin mb-10 py-[4rem]">The Page you are looking for does not exist.</h2>
                            <h2 className='text-xl font-thin py-[1rem]'>Click here to go to Home Page</h2>
                            <button className='m-2 p-3 bg-lime-500 rounded-lg text-black hover:scale-110 duration-300'><Link to='/'>Home</Link></button>
                        </div>
                        <img src={bg} alt='' className='sm:w-[50%] xl:w-full pt-2' />
                    </div>
                </section>

            </div>
        </div>
    )
}

export default NotFound

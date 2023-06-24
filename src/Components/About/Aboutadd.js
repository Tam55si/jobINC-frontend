import React from 'react';
import bg from '../../assets/joinus.png'

function Aboutadd() {
    return (
        <div>
            <div className="container px-10 mx-auto">

                <section className=" text-slate-300 text-center flex gap-10 justify-center flex-wrap items-center py-5 mb-[4rem] mt-[8rem] bg-[#1E293B] rounded-[10px]">
                    <div className="grid md:grid-cols-1 gap-x-6 lg:gap-x-12 lg:p-8 md:p-4" >
                        <h2 className="text-3xl font-bold   py-[1rem]">About us</h2>

                    </div>
                    <div className="grid md:grid-cols-2 gap-x-6 lg:gap-x-12 lg:p-8 md:p-4">
                        <h2 className="text-xl font-thin mb-4 py-[4rem] italic">Our commitment is to provide exceptional service to both job seekers and employers. We strive to maintain the highest standards of integrity, transparency, and professionalism in all our interactions. Whether you are seeking a job or looking to hire top talent, we are dedicated to being your trusted partner in achieving your goals.</h2>
                        <img src={bg} alt='' className='sm:w-[50%] xl:w-full' />
                    </div>

                    <div className=" gap-x-6 lg:gap-x-12 lg:p-8 md:p-4" >
                        <h2 className="text-3xl font-thin mb-12 py-[4rem]">Join us today and let us help you navigate the job market with confidence, connecting you with meaningful opportunities that align with your skills, aspirations, and values.</h2>

                    </div>

                </section>

            </div>
        </div>
    )
}

export default Aboutadd

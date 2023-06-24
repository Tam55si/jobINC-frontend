import React from 'react';
import bg from '../../assets/add-bg.png';

function JobAdd() {
    return (
        <div>
            <div className="container px-10 mx-auto">

                <section className=" text-slate-300 text-center flex gap-10 justify-center flex-wrap items-center py-5 mb-[4rem] mt-[8rem] bg-[#1E293B] rounded-[10px]">


                    <div className="grid md:grid-cols-2 gap-x-6 lg:gap-x-12 lg:p-8 md:p-4" >
                        <h2 className="text-3xl font-thin mb-12 py-[4rem]">Let's make your next great hire. <span className='italic'>Fast.</span></h2>
                        <img src={bg} alt='' className='sm:w-[50%] xl:w-full' />
                    </div>
                </section>

            </div>
        </div>
    )
}

export default JobAdd

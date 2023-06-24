import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
    return (
        <div>
            <div className="container px-10 mx-auto">

                <section className=" text-slate-300 text-center flex gap-10 justify-center flex-wrap items-center py-5 mb-[4rem] mt-[8rem] bg-[#1E293B] rounded-[10px]">


                    <div className="grid md:grid-cols-2 gap-x-6 lg:gap-x-12 lg:p-8 md:p-4" >
                        <h1 className="text-3xl font-thin mb-12 py-[4rem]"><Link to='/jobpost'>Post a Job</Link></h1>
                        <h1 className="text-3xl font-thin mb-12 py-[4rem]"><Link to='/jobsdash'>Edit all the jobs posted</Link></h1>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Admin

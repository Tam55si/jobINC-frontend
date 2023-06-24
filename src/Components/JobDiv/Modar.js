<div className="py-12 h-screen bg-gray-300">
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md">
        <div className="md:flex">
            <div className="w-full p-2 py-10">

                <div className="flex justify-center">
                    <div className="relative">

                        <img src={imageUrl} alt='Company Logo' width="80" />
                        <span className="absolute border-white border-4 h-5 w-5 top-12 left-16 bg-green-700 rounded-full"></span>


                    </div>

                </div>

                <div className="flex flex-col text-center mt-3 mb-4">

                    <span className="text-2xl font-medium">{title}</span>
                    <span className="text-md text-gray-400">{postDate}</span>

                </div>

                <p className="px-16 text-center text-md text-gray-800">{description}</p>

                <div className="px-16 mt-3 text-center">

                    <span className="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200">{location}</span>
                    <span className="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200">{work}</span>
                    <span className="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200">{type}</span>

                </div>



               






            </div>

        </div>
    </div>

</div>


 <div className='text-center'>
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <p>{level} <span className='italic'>{postDate}</span></p>
                    <p>{description}</p>
                    <p>{location} {type}</p>
                    <p>{company} <span className='italic'>{work}</span></p>
                </div>
import { SiSimplenote } from 'react-icons/si';
import { TbSocial } from 'react-icons/tb';
import { VscWorkspaceTrusted } from 'react-icons/vsc';

const Data = [
  {
    id: 1,
    icon: <SiSimplenote />,
    title: 'Simplicity',
    desc: 'Things being made beautiful simple are at the heart of everything we do.',
  },
  {
    id: 2,
    icon: <TbSocial />,
    title: 'Social Good',
    desc: 'We believe in making things better for everyone, even if just a little bit!',


  },
  {
    id: 3,
    icon: <VscWorkspaceTrusted />,
    title: 'Trust',
    desc: 'We believe in creating trust which can be nurtured through authenticity and transparency',

  }
]

function Value() {
  return (
    // <div className="mb-[16rem] mt-[6rem] bg-[#1E293B] rounded-[10px] p-[3rem] flex flex-wrap">
    //   <h1 className="text-slate-200 text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] flex">The value that hold us true and to account</h1>
    //   <div className="flex gap-[10rem] grid-cols-3 items-center">

    //     <div className="singleGrid rounded-[10px] hover:bg-[#eef482] bg-[#f7fbb1] p-[1.5rem]">
    //       <div className="flex items-center gap-3">
    //         <div className="imgDiv p-[4px] rounded-[.8rem]  h-[40px] w-[20px] flex items-center justify-center">
    //           {/* <img src="" alt="" className="w-[70%]"/> */}
    //           <SiSimplenote className=" w-[35px] h-[35px]" />
    //         </div>

    //         <span className="font-semibold text-black text-[18px]">
    //           Simplicity
    //         </span>
    //       </div>
    //       <p className="text-[13px] text-textColor opacity-[.7] py-[1rem]">
    //         Things being made beautiful simple are at the heart of everything we do.
    //       </p>
    //     </div>

    //     <div className="singleGrid rounded-[10px] bg-[#99cdfb] hover:bg-[#64aff1] p-[1.5rem]">
    //       <div className="flex items-center gap-3">
    //         <div className="imgDiv p-[4px] rounded-[.8rem] h-[40px] w-[20px] flex items-center justify-center">
    //           {/* <img src="" alt="" className="w-[70%]"/> */}
    //           <TbSocial className=" w-[35px] h-[35px]" />
    //         </div>

    //         <span className="font-semibold text-black text-[18px]">
    //           Social Good
    //         </span>
    //       </div>
    //       <p className="text-[13px] text-textColor opacity-[.7] py-[1rem]">
    //         We believe in making things better for everyone, even if just a little bit!
    //       </p>
    //     </div>

    //     <div className="singleGrid rounded-[10px] bg-[#c5faa8] hover:bg-[#a2f377] p-[1.5rem]">
    //       <div className="flex items-center gap-3">
    //         <div className="imgDiv p-[4px] rounded-[.8rem] h-[40px] w-[20px] flex items-center justify-center">
    //           {/* <img src="" alt="" className="w-[70%]"/> */}
    //           <VscWorkspaceTrusted className=" w-[35px] h-[35px]" />
    //         </div>

    //         <span className="font-semibold text-black text-[18px]">
    //           Trust
    //         </span>
    //       </div>
    //       <p className="text-[13px] text-textColor opacity-[.7] py-[1rem]">
    //         We work on the basis of creating trust which can be nurtured through authenticity and transparency
    //       </p>
    //     </div>

    //   </div>
    // </div>

    <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-5 mb-[10rem] mt-[6rem] bg-[#1E293B] rounded-[10px]">
      <h1 className="text-slate-200 text-[25px] py-[4rem] font-bold flex px-5">The values that hold us true</h1>
      <div className="jobContainer flex gap-5 justify-center flex-wrap items-center py-10 bg-[#1E293B] rounded-[10px]">
        {
          Data.map(({ id, icon, title, desc }) => {
            return (
              <div key={id} className='group group/item singleJob w-[250px] p-[20px] bg-simplicity rounded-[10px] hover:bg-simplicityHover shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                <span className="flex justify-between items-center gap-4">
                  <span className='w-[10%]'>{icon}</span>
                  <h1 className="text-[16px] font-semibold text-textColor">{title} </h1>

                </span>

                <p className='text-[13px] text-slate-900 pt-[20px] border-t-[2px] mt-[20px] group-hover:text-green-900'>{desc}</p>
              </div>
            )
          })
        }
      </div>
    </div>

  )
}

export default Value;

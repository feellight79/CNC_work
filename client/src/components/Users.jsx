import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import LeftSide from './LeftSide';
// import { SearchIcon } from 'lucide-react';
function Users() {
    return (
        <div className='bg-[#FFF8F0] h-screen relative'>
            <img className='absolute' src="shape-top.png" alt="shape" />
            <img className='absolute bottom-0 w-screen' src="shape-btm.png" alt="shape" />
            <div className='flex'>
                <LeftSide/>
                <div className='z-10 rounded-l-[70px] shadow-[0px_15px_15px_rgba(0,0,0,0.2)] flex-1 h-screen bg-opacity-80 backdrop-blur-md'>
                    <Link className='left-0 top-0 w-full' to={"/"}>
                        <p className='text-[20px] text-start leading-[60px] ml-[53px] mr-[45px] border-b-2 border-b-[#5C4435]'><span className='text-[30px] pr-[5px]'>&larr;</span> All Templates /</p>
                    </Link>
                    <div className="p-[45px]">
                        <div className="flex justify-start items-center">
                            <div className="flex flex-col gap-4">
                                <label className="text-sm text-[#5d5e5f]">Label</label>
                                <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-b from-[#242F4D] to-[#38466B] text-white rounded-[18px] w-[150px] h-[38px] cursor-pointer">
                                    <div className="flex items-center">
                                        <span className='border border-[#93A3D9] px-[9px] inline-block rounded-full mr-2'>&#63;</span>
                                        <span>Select</span>                                            
                                    </div>
                                    <div className="flex items-center mt-[-5px]">
                                        <span className='right mr-2'>&#9013;</span>
                                    </div>
                                </div>
                            </div>    
                            <div className="flex flex-col gap-4 mx-4">
                                <label className="text-sm text-[#5d5e5f]">Label</label>
                                <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-b from-[#242F4D] to-[#38466B] text-white rounded-[18px] w-[150px] h-[38px] cursor-pointer">
                                    <div className="flex items-center">
                                        <span className='border border-[#93A3D9] px-[9px] inline-block rounded-full mr-2'>&#63;</span>
                                        <span>Select</span>                                            
                                    </div>
                                    <div className="flex items-center mt-[-5px]">
                                        <span className='right mr-2'>&#9013;</span>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='p-4 bg-[#6F8185]'>
                                <SearchIcon className='mt-[30px]'/>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;
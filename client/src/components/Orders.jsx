import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import LeftSide from './LeftSide';
function Orders() {
    return (
        <div className='bg-[#FFF8F0] h-screen relative'>
            <img className='absolute' src="shape-top.png" alt="shape" />
            <img className='absolute bottom-0 w-screen' src="shape-btm.png" alt="shape" />
            <div className='flex'>
                <LeftSide/>
                <div className='z-10 rounded-l-[70px] shadow-[0px_15px_15px_rgba(0,0,0,0.2)] flex items-center justify-center flex-1 h-screen bg-opacity-80 backdrop-blur-md relative'>
                    <Link className='absolute left-0 top-0 w-full' to={"/"}>
                        <p className='text-[20px] text-start leading-[60px] ml-[53px] mr-[45px] border-b-2 border-b-[#5C4435]'><span className='text-[30px] pr-[5px]'>&larr;</span> All Orders /</p>
                    </Link>
                    <div className="w-[353px] mx-auto mb-[66px]">
                        <h1 className="text-[28px] font-bold text-center mb-[34px]">Create New Order</h1>
                        <div>
                            <label className="block text-[#5d5e5f] mb-2">Size</label>
                            <div className="relative">
                                <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-b from-[#242F4D] to-[#38466B] text-white rounded-[16px] h-[38px] cursor-pointer">
                                    <div className="flex items-center">
                                        <span className='border border-[#93A3D9] px-[9px] inline-block rounded-full mr-2'>&#63;</span>
                                        <span>Select</span>                                            
                                    </div>
                                    <div className="flex items-center">
                                        <span className='right border border-[#93A3D9] px-[9px] inline-block rounded-full mr-2'>&#63;</span>
                                        <span className='right mr-2'>&#9013;</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-full border border-black rounded-lg p-4 h-[91px] my-[14px]">
                            <textarea placeholder="Notes" className="w-full h-full bg-transparent outline-none resize-none placeholder-[#5D5E5F]" />
                            </div>
                        </div>

                        <button className="w-full h-[34px] bg-[#A77C61] text-white py-3 rounded-[5px] flex items-center justify-center">
                            {/* <LayoutTemplate size={18} className="mr-2" /> */}
                            Clone Template
                        </button>

                        <div className="flex items-center justify-center gap-4 my-[14px]">
                            <div className="h-px bg-[#4F5051] flex-1"></div>
                            <span>Or Add Door</span>
                            <div className="h-px bg-[#4F5051] flex-1"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="border border-[#6F8185] text-[#6F8185] h-[34px] rounded-[5px] shadow-[0px_5px_5px_rgba(0,0,0,0.2)]">From Template</button>
                            <button className="border border-[#A77C61] text-[#A77C61] h-[34px] rounded-[5px] shadow-[0px_5px_5px_rgba(0,0,0,0.1)]">New Door</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Orders;
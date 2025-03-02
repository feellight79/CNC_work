import React from 'react';
import { Link } from 'react-router-dom';
import LeftSide from './LeftSide';
function Home() {
    return (
        <div className='h-screen relative'>
            <img className='absolute' src="shape-top.png" alt="shape" />
            <img className='absolute bottom-0' src="shape-btm.png" alt="shape" />
            <div className='flex'>
                <LeftSide />
                <div className='z-10 rounded-l-[70px] shadow-[0px_15px_15px_rgba(0,0,0,0.2)] flex justify-center items-center flex-1 h-screen bg-[url("../public/back-home.png")] bg-cover bg-center'>
                    <div className='w-[595px] h-[378px] mb-28 bg-[#F6F2EF] bg-opacity-[64%] p-8 text-center rounded-[10px] shadow-[0px_0px_4px_4px_rgba(0,0,0,0.04)]'>
                        <img className='m-auto w-[300px] h-auto' src='Brand logo.png' alt='mark'/>
                        <p className='text-[#A77C61] text-[20px] font-medium mt-[30px]'>Welcome to</p>
                        <h1 className='text-[#5C4435] text-[32px] font-bold mb-[15px]'>Your Site To Customize You Door</h1>
                        <Link to={"/orders"} className="shadow-[0px_10px_10px_rgba(0,0,0,0.1)] text-white text-[14px] px-[25px] py-[8px] bg-[#A77C61] rounded-[5px] font-medium">Start your Order</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
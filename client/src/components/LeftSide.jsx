import React, { useState, useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function LeftSide() {
    const location = useLocation();  
    // console.log(location.pathname); // Logs the path of the current URL
    // console.log(location.href); // This would log full URL if available in contex
    const navigate = useNavigate(); // Initialize navigate function
    
    // const currentUrl = window.location.href;
    const isOrdersRoute = location.pathname.startsWith('/orders');
    const isTemplatesRoute = location.pathname.startsWith('/templates');
    const isUsersRoute = location.pathname.startsWith('/users');
    const [activeIndex, setActiveIndex] = useState([isTemplatesRoute, isOrdersRoute, isUsersRoute]);

    return (
        <div className='w-[219px] border-l-[#A77C61] border-l-[3px] relative overflow-visible'>
            <img className='m-auto mt-[40px] mb-[30px] ml-[38px] w-[143px] h-[77px]' src='Brand logo.png' alt='mark'/>
            <ul className='text-[18px]'>
                <li className={`pl-[45px] leading-[36px] rounded-r-[10px] mr-[50px] hover:bg-[#A77C61] hover:text-white ${activeIndex[0] ? "bg-[#A77C61] text-white" : ""}`}>
                    <Link to={"/templates"}>Templates</Link>
                </li>
                <li className={`pl-[45px] leading-[36px]  rounded-r-[10px] mr-[50px] my-[40px] hover:bg-[#A77C61] hover:text-white ${activeIndex[1] ? "bg-[#A77C61] text-white" : ""}`}>
                    <Link to={"/orders"}>Orders</Link>
                </li>
                <li className={`pl-[45px] leading-[36px]  rounded-r-[10px] mr-[50px] hover:bg-[#A77C61] hover:text-white ${activeIndex[2] ? "bg-[#A77C61] text-white" :""}`}>
                    <Link to={"/users"}>Users</Link>
                </li>
            </ul>
        </div>
    );
}

export default LeftSide;

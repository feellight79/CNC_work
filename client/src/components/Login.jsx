import React, { useState, useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from "../Axios/axios.js"
import TokenContext from '../context/TokenContext.js';
function Login() {
    const [formData, setFormData] = useState({});
    const { userToken, tokenDispatch, userDispatch } = useContext(TokenContext);
    const [error, setError] = useState();
    const navigate = useNavigate(); // Initialize navigate function

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("/user/login", formData)
            if (result && result.data) {
                tokenDispatch({ type: "SET_TOKEN", payload: result.data.token });
                userDispatch({ type: "SET_USER", payload: result.data.user });
                localStorage.setItem("authToken", JSON.stringify(result.data.token));
            }
            else {
                throw new Error("Invalid response from server"); // Handle unexpected API responses
            }
            navigate("/home");
        } catch (error) {
            console.log(error);
            setError({ message: error.response.data.message })
        }
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value })
    }
    return (
        <div className='bg-[#F6F2EF] w-screen h-screen flex items-center justify-center'>
            {userToken && <Navigate to="/" />}
            <section className='w-[83.3%] h-[75.2%] rounded-[40px] shadow-xl bg-[url("../public/back-login.png")]'>
                <img className='m-auto mt-[50px] mb-[70px]' src='Brand logo.png' alt='mark'/>
                <div className="flex justify-around items-start">
                    <form className='bg-[#F6F2EF] bg-opacity-[79%] rounded-[10px] shadow-lg w-1/3 px-[40px] py-[50px]' method='post' onSubmit={handleSubmit}>
                        <h2 className='font-medium text-[40px] text-center mb-[50px] leading-[20px]'>Login</h2>
                        <div>
                            {error && (
                                <div className="text-center border-2 border-green-600 p-2 mb-2 rounded-md bg-red-200 shadow-2xl">
                                    {error.message}
                                </div>
                            )
                            }
                        </div>
                        {/* Email input */}
                        <div className="mb-[50px]">
                            <input
                                type="text"
                                name='username'
                                value={formData.username || ""}
                                onChange={handleChange}
                                className='w-full px-[15px] py-[5px] font-normal text-[14px] rounded-[4px] border border-black'
                                id="usernameInput"
                                placeholder="Username" />
                        </div>
                        {/* Password input */}
                        <div className="mb-[50px]">
                            <input
                                type="password"
                                name='password'
                                value={formData.password || ""}
                                onChange={handleChange}
                                className="w-full px-[15px] py-[5px] font-normal text-[14px] rounded-[4px] border border-black"
                                id="passInput"
                                placeholder="Password" />
                        </div>
                        {/* <div className="flex justify-between items-center mb-6">
                            <Link
                                to={"/forgotPassword"}
                            >Forgot Password?</Link>
                        </div> */}
                        <div className="text-center">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="text-white text-[14px] px-[25px] py-[8px] bg-[#A77C61] rounded-[5px]">
                                Login
                            </button>
                            <p className="text-sm font-semibold mt-[15px]">
                                Don't have an account?
                                <Link
                                    to={"/register"}
                                    className="text-[#5C4435] ml-1"
                                >Make One</Link>
                            </p>
                        </div>
                    </form>
                    <div>
                        <p className='text-[#A77C61] text-[24.2px] font-medium'>Welcome to</p>
                        <h1 className='text-[#5C4435] text-[42px] font-bold'>Your Site To<br/>Customize You Door</h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;

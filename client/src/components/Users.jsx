import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import LeftSide from './LeftSide';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { SearchIcon } from 'lucide-react';

const generateData = () => {
    return Array.from({ length: 100 }, (_, index) => ({
      Username: index + 1,
      Role: `Item ${index + 1}`,
      Company: `Category ${Math.floor(Math.random() * 5) + 1}`,
    }));
  };

// import { SearchIcon } from 'lucide-react';
function Users() {
    const [data] = useState(generateData());
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [totalPages, setTotalPages] = useState(0);

      // Calculate total pages when data or itemsPerPage changes
    useEffect(() => {
        setTotalPages(Math.ceil(data.length / itemsPerPage));
        // Reset to first page when changing items per page
        setCurrentPage(1);
    }, [data.length, itemsPerPage]);

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Go to first page
    const goToFirstPage = () => setCurrentPage(1);

    // Go to last page
    const goToLastPage = () => setCurrentPage(totalPages);

    // Handle items per page change
    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
    };

    const [activeview, setActiveView] = useState([]);
    const handleView = (index) => {
        const updatedActiveView = [...activeview];
        updatedActiveView[index] = !updatedActiveView[index];
        setActiveView(updatedActiveView);
    };

    const [activecheck, setActiveCheck] = useState([]);
    const handleCheck = (index) => {
        const updatedActiveCheck = [...activecheck];
        updatedActiveCheck[index] = !updatedActiveCheck[index];
        setActiveCheck(updatedActiveCheck);
    };

    // Search bar
    const [searchTerm, setSearchTerm] = useState('');
    const [searchview, setSearchView] = useState(false);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement search functionality here
        console.log('Search term submitted:', searchTerm);
    };
    const handleSearch=() => {
        var updatesearchbar = searchview;
        updatesearchbar = !updatesearchbar;
        setSearchView(updatesearchbar);
    }    
    console.log(searchview);

    return (
        <div className='h-screen relative'>
            <img className='absolute' src="shape-top.png" alt="shape" />
            <img className='absolute bottom-0 w-screen' src="shape-btm.png" alt="shape" />
            <div className='flex'>
                <LeftSide/>
                <div className='flex flex-col z-10 rounded-l-[70px] shadow-[0px_15px_15px_rgba(0,0,0,0.2)] flex-1 h-screen bg-opacity-80 backdrop-blur-md'>
                    <Link className='left-0 top-0 w-full' to={"/"}>
                        <p className='text-[20px] text-start leading-[60px] ml-[53px] mr-[45px] border-b-2 border-b-[#5C4435]'><span className='text-[30px] pr-[5px]'>&larr;</span> All Templates /</p>
                    </Link>
                    <div className="pl-[45px] pr-[10px] py-[45px] xl:p-[45px] flex-1 flex flex-col m-auto 2xl:w-[1220px] xl:w-[1000px] lg:w-[760px] md:w-[530px]">
                        <div className="flex justify-start items-end ">
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
                            <SearchIcon onClick={() => handleSearch()} className='text-white bg-[#6F8185] px-3.5 h-[38px] w-12 rounded-md'/>       
                            <form className={`ml-4 flex items-center ${searchview? 'block w-[200px]':'hidden w-0'}`} onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={handleChange}
                                    placeholder="Search..."
                                    className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {/* <button
                                    type="submit"
                                    className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Search
                                </button> */}
                            </form>                
                        </div>
                        <div className='flex-1 flex flex-col w-full'>
                            <div className="relative flex-1 flex flex-col border border-[#5C4435] max-w-6xl bg-white rounded-lg shadow-md mt-4">                                                                                    
                                {/* Table */}
                                <div className="h-[calc(100vh-326px)] overflow-x-auto overflow-y-auto p-1">
                                    <table className="min-w-full divide-y divide-[#A77C61] leading-[49px]">
                                        <thead className='text-[#5C4435] font-bold'>
                                            <tr>
                                                <th className="text-left font-medium px-[25px]">Username</th>
                                                <th className="text-left font-medium px-[25px]">Role</th>
                                                <th className="text-left font-medium px-[25px]">Company</th>
                                                <th className="w-24"></th>
                                            </tr>
                                        </thead>
                                        <tbody className="border-bb divide-y divide-[#A77C61]">
                                        {currentItems.map((item, index) => (
                                            <tr key={item.id} className={index % 2 === 0 ? 'bg-[#F6F2EF]' : 'bg-white'}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.Username}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.Role}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.Company}</td>
                                                <td className='flex justify-start items-center gap-2 py-[10px]'>
                                                    <button key={index} onClick={() => handleView(index)} class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`lucide lucide-eye h-5 w-5 ${activeview[index]? 'text-green-600':'text-gray-800'}`}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                    </button>
                                                    <button onClick={() => handleCheck(index)} class="h-8 w-8 flex items-center justify-center rounded-md hover:bg-[#f6f2ef]">
                                                        <svg className={`text-red-600 h-5 w-5 ${activecheck[index]? 'hidden':'block'}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>
                                                            <line x1="4.93934" y1="4.93934" x2="19.0607" y2="19.0607" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
                                                        </svg>
                                                        <svg className={`text-green-600 h-5 w-5 ${activecheck[index]? 'block':'hidden'}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                                
                                {/* Pagination */}
                                <div className="absolute w-full bottom-0 flex items-center justify-end py-6 bg-[#E4D6CE] gap-4">
                                    {/* Items per page selector */}
                                <div className="flex justify-end">
                                    <div className="flex items-center">
                                        <label htmlFor="itemsPerPage" className="mr-2 text-sm text-gray-600">
                                        Items per page:
                                        </label>
                                        <select
                                        id="itemsPerPage"
                                        value={itemsPerPage}
                                        onChange={handleItemsPerPageChange}
                                        className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                        <option value={5}>5</option>
                                        <option value={10}>10</option>
                                        <option value={20}>20</option>
                                        <option value={50}>50</option>
                                        </select>
                                    </div>
                                </div>
                                    <div className="text-sm text-gray-700">
                                        <span className="font-medium">{indexOfFirstItem + 1}</span> -{' '}
                                        <span className="font-medium">
                                        {indexOfLastItem > data.length ? data.length : indexOfLastItem}
                                        </span>{' '}
                                        of <span className="font-medium">{data.length}</span>
                                    </div>
                                
                                <div className="flex items-center space-x-2">
                                    <button
                                    onClick={goToFirstPage}
                                    disabled={currentPage === 1}
                                    className={`p-2 rounded-md ${
                                        currentPage === 1
                                        ? 'text-gray-400 cursor-not-allowed'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                    >
                                    <ChevronsLeft size={16} />
                                    </button>
                                    
                                    <button
                                    onClick={() => paginate(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className={`p-2 rounded-md ${
                                        currentPage === 1
                                        ? 'text-gray-400 cursor-not-allowed'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                    >
                                    <ChevronLeft size={16} />
                                    </button>
                                    
                                    {/* <div className="flex items-center">
                                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                        // Logic to show 5 page numbers centered around current page
                                        let pageNum;
                                        if (totalPages <= 5) {
                                        pageNum = i + 1;
                                        } else if (currentPage <= 3) {
                                        pageNum = i + 1;
                                        } else if (currentPage >= totalPages - 2) {
                                        pageNum = totalPages - 4 + i;
                                        } else {
                                        pageNum = currentPage - 2 + i;
                                        }
                                        
                                        return (
                                        <button
                                            key={pageNum}
                                            onClick={() => paginate(pageNum)}
                                            className={`px-3 py-1 rounded-md mx-1 ${
                                            currentPage === pageNum
                                                ? 'bg-blue-500 text-white'
                                                : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                        >
                                            {pageNum}
                                        </button>
                                        );
                                    })}
                                    </div> */}
                                    
                                    <button
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className={`p-2 rounded-md ${
                                        currentPage === totalPages
                                        ? 'text-gray-400 cursor-not-allowed'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                    >
                                    <ChevronRight size={16} />
                                    </button>
                                    
                                    <button
                                    onClick={goToLastPage}
                                    disabled={currentPage === totalPages}
                                    className={`p-2 rounded-md ${
                                        currentPage === totalPages
                                        ? 'text-gray-400 cursor-not-allowed'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                    >
                                    <ChevronsRight size={16} />
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;
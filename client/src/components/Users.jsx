import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import LeftSide from './LeftSide';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

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
                    <div className="p-[45px] flex-1 flex flex-col">
                        <div className="flex justify-start items-center ">
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
                        </div>
                        <div className='flex-1 flex flex-col w-full'>
                            <div className="relative flex-1 flex flex-col border border-[#5C4435] max-w-6xl bg-white rounded-lg shadow-md mt-4">                                                                                    
                                {/* Table */}
                                <div className="h-[calc(100vh - 326px)] overflow-x-auto overflow-y-hidden p-1">
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
                                                <td>
                                                    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye h-4 w-4"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
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
                        {/* <div className='border border-[#5C4435] rounded-lg mt-8 max-w-[1300px] m-auto p-1'>
                            <table className="w-full border-collapse text-base leading-[49px]">
                                <thead className='text-[#5C4435] font-bold'>
                                    <tr>
                                        <th className="text-left font-medium px-[25px]">Username</th>
                                        <th className="text-left font-medium">Role</th>
                                        <th className="text-left font-medium">Company</th>
                                        <th className="w-24"></th>
                                    </tr>
                                </thead>
                                <tbody className='border-y border-[#A77C61]'>
                                    <tr className='border-y border-[#A77C61] bg-[#F6F2EF]'>
                                        <td className='px-[25px]'>Admin1</td>
                                        <td>SuperAdmin</td>
                                        <td>-</td>
                                        <td>
                                            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye h-4 w-4"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
                                        </td>
                                    </tr>
                                    <tr className='border-y border-[#A77C61]'>
                                        <td>Admin1</td>
                                        <td>SuperAdmin</td>
                                        <td>-</td>
                                        <td>
                                            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye h-4 w-4"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
                                        </td>
                                    </tr>
                                    <tr className='border-y border-[#A77C61]'>
                                        <td>Admin1</td>
                                        <td>SuperAdmin</td>
                                        <td>-</td>
                                        <td>
                                            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye h-4 w-4"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
                                        </td>
                                    </tr>
                                </tbody>
                                 
                            </table>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;
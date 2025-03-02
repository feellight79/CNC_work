import React from 'react';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}) => {
  // Generate page numbers to display
  const generatePaginationItems = () => {
    // Always show first page, last page, current page, and pages around current page
    const items = [];
    
    // Calculate range of pages to show around current page
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
    
    // Whether to show ellipsis
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;
    
    // Always add page 1
    items.push(1);
    
    // Add left ellipsis if needed
    if (shouldShowLeftDots) {
      items.push('...');
    } else if (leftSiblingIndex > 1) {
      // If we're not showing dots but there's still a gap, fill it
      for (let i = 2; i < leftSiblingIndex; i++) {
        items.push(i);
      }
    }
    
    // Add pages around current page
    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      if (i !== 1 && i !== totalPages) {
        items.push(i);
      }
    }
    
    // Add right ellipsis if needed
    if (shouldShowRightDots) {
      items.push('...');
    } else if (rightSiblingIndex < totalPages) {
      // If we're not showing dots but there's still a gap, fill it
      for (let i = rightSiblingIndex + 1; i < totalPages; i++) {
        items.push(i);
      }
    }
    
    // Always add last page if it's not already included
    if (totalPages > 1) {
      items.push(totalPages);
    }
    
    return items;
  };

  const paginationItems = generatePaginationItems();

  return (
    <nav className="flex items-center justify-center mt-8">
      <ul className="flex items-center space-x-1">
        {/* Previous button */}
        <li>
          <button
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-10 h-10 rounded-md ${
              currentPage === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            aria-label="Previous page"
          >
            {/* Previous arrow icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        </li>

        {/* Page numbers */}
        {paginationItems.map((item, index) => (
          <li key={index}>
            {item === '...' ? (
              <span className="flex items-center justify-center w-10 h-10 text-gray-500">
                ...
              </span>
            ) : (
              <button
                onClick={() => typeof item === 'number' && onPageChange(item)}
                className={`flex items-center justify-center w-10 h-10 rounded-md ${
                  currentPage === item
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                aria-label={`Page ${item}`}
                aria-current={currentPage === item ? 'page' : undefined}
              >
                {item}
              </button>
            )}
          </li>
        ))}

        {/* Next button */}
        <li>
          <button
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center w-10 h-10 rounded-md ${
              currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            aria-label="Next page"
          >
            {/* Next arrow icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
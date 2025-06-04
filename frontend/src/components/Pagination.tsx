import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <>
    <div className="p-8 space-y-4 bg-white text-black ">
      <h1 className="text-xl font-bold">Pagination</h1>
      </div>
    <div className="flex items-center justify-center space-x-1 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-md text-sm font-medium border bg-white hover:bg-gray-100 disabled:opacity-50"
        >
        Prev
      </button>

      {pages.map((page) => (
          <button
          key={page}
          onClick={() => handleClick(page)}
          className={`px-3 py-1 rounded-md text-sm font-medium border ${
              page === currentPage
              ? "bg-blue-600 text-white"
              : "bg-white hover:bg-gray-100 text-gray-800"
            }`}
            >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-md text-sm font-medium border bg-white hover:bg-gray-100 disabled:opacity-50"
        >
        Next
      </button>
    </div>
          </>
  );
};

export default Pagination;

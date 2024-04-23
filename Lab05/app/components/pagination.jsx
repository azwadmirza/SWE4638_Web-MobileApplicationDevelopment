"use client";
import React, { useEffect, useState } from 'react';


const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const [pageNumbers, setPageNumbers] = useState([])

    useEffect(() => {
        const updatedPageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            updatedPageNumbers.push(i);
        }
        setPageNumbers(updatedPageNumbers);
    }, [totalPages]);    

    return (
        <div className='w-full'>
            <ul className="flex items-center justify-center">
                <li>
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white p-0 text-sm text-black transition duration-150 ease-in-out hover:bg-white ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                        aria-label="Previous"
                    >
                        <span className="text-sm">&lt;</span>
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button
                            onClick={() => onPageChange(number)}
                            className={`mx-1 font-medium text-md flex h-9 w-9 items-center justify-center  p-0  shadow-xl transition duration-150 ease-in-out ${Number(currentPage) === Number(number) ? "text-black bg-white rounded-full" : "hover:bg-white rounded-full bg-black border border-white text-white hover:text-black"}`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white p-0 text-sm text-black transition duration-150 ease-in-out hover:bg-white ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                        aria-label="Next"
                    >
                        <span className="text-sm">&gt;</span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;

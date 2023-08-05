import React from 'react'
import './stylepages/Paginations.css'

const Paginations = ({ pokePerPage, totalPoke, paginate, currentPage }) => {

    const pageNumbers = [];

    let firstPage = currentPage < 3 ? 1 : currentPage - 2;

    for (let i = firstPage; i <= Math.ceil(totalPoke / pokePerPage) && pageNumbers.length < 5; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                <button onClick={() => paginate(currentPage - 1)} className='menos'>
                <i className='bx bxs-chevrons-left'></i>
                </button>
                <div className='button'>
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        className= {`${currentPage === number ? "active" : "" } page`}
                        onClick={() => paginate(number)}
                    >
                        {number} 
                    </button>
                ))}
                </div>
                <button onClick={() => paginate(currentPage + 1)} className='suma'>
                <i className='bx bxs-chevrons-right' ></i>
                </button>
                
            </ul>
        </nav>
    )
}

export default Paginations
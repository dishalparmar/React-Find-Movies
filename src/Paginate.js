import React from 'react'
import './Paginate.css'
import ReactPaginate from 'react-paginate';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Paginate({ movies, pageNumber, pageCount, onPageChange }) {

  return (
    <div className='paginate'>
      <div className='paginate-total'>{movies.length} Results found</div>
      <div className='paginate-reactPaginate'>
        <div className='paginate-count-display'>Page {pageNumber + 1} of {pageCount}</div>
        <ReactPaginate 
          previousLabel={<ArrowLeftIcon />}
          nextLabel={<ArrowRightIcon />}
          pageCount={pageCount}
          onPageChange={onPageChange}
          pageClassName='paginate-btns'
          previousLinkClassName='previous-li'
          nextLinkClassName='next-li'
        />
      </div>
  </div>
  )
}

export default Paginate
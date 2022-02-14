import React, { useState } from 'react'
import './Main.css';
import MockData from'./MockData.json';
import Movie from './Movie';
import Paginate from './Paginate';

function Main() {
   
    // useEffect(() => {                                                      // In real life app, we would call some api with axios or similar to this one
                                                                              // Fetch the data and do "setMovies(data)" to set it;
    //   const fetchData = async () => {
    //            await fetch('https://jsonplaceholder.typicode.com/users')
    //           .then((response) => response.json())
    //           .then((data) => {
    //             console.log(data);
    //           })
    //   }
  
    //   fetchData();
    // }, []);

  const [movies, setMovies] = useState(MockData.slice(0, MockData.length));   // Fetching data from my local json file
  const [pageNumber, setPageNumber] = useState(0);                            // Will tell us which page we are on
  const moviesPerPage = 8;                                                    // Number of movies we want to show per page
  const pagesVisited = pageNumber * moviesPerPage;                            // How many pages have we viewed so far? i.e. 5, 10 ?
  const pageCount = Math.ceil(movies.length / moviesPerPage);                 // Total pages, we want to even out the page numbers i.e. if arr is 11 pagination will go the 3 pages and show the last one on page 3
  const onPageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const showMovies = movies.slice(pagesVisited, pagesVisited + moviesPerPage) // We want to go from 5 -> 10
                            .map(movie => ( 
                            <div className='main-row' key={movie.id}>
                              <Movie image={movie.image}
                                      name={movie.name}
                                      year={movie.year}
                                      plot={movie.plot}
                                />
                              </div>
  ));

  return (
    <div className='main'>
      <Paginate movies={movies}
                pageNumber={pageNumber}
                pageCount={pageCount}
                onPageChange={onPageChange}
      />
      {showMovies}
    </div>
  )
}

export default Main;
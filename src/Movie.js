import React, { useState } from 'react';
import './Movie.css';
import Modal from './Modal';

function Movie({image, name, year, plot}) {

const [modal, setModal] = useState(false);
const toggleModal = (e) => {
  e.preventDefault();
  setModal(!modal);
}

if(modal) {
  document.body.classList.add('active-modal')
} else {
  document.body.classList.remove('active-modal')
}
  return (
    <>
      <a href='#' onClick={toggleModal}>
        <div className='movie'>
          <img src={image} alt={`Movie Poster for ${name}`} />
          <div className='movie-info'>
            <p>{name}</p>
            <p>{year}</p>
          </div>
        </div>
      </a>

      {modal &&
      <Modal image={image}
              name={name}
              year={year}
              plot={plot}
              toggleModal={toggleModal}
          />
      }
    </>
  )
}

export default Movie
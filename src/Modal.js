import React from 'react'
import './Modal.css';

function Modal({image, name, year, plot, toggleModal}) {
  return (
    <div className="modal">
    <div onClick={toggleModal} className="overlay"></div>
    <div className="modal-content">
      <div className='modal-movie-wrapper'>
        <div className='modal-movie-poster'><img src={image} alt={`Movie Poster for ${name}`} /></div>
        <div className='modal-movie-details'>
          <div className='modal-movie-name'>{name} <small>({year})</small></div>
          <div className='modal-movie-info'>
            <p>Director: Some Director</p>
            <p>Cast: Some Cast</p>
            <p>Genre: Some Genre</p>
            <p className='modal-movie-plot'>{plot}</p>
          </div>
        </div>
      </div>
      <button className="close-modal" onClick={toggleModal}>X</button>
    </div>
  </div>
  )
}

export default Modal
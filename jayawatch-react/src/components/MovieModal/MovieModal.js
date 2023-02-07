import React from "react";
import "./MovieModal.css";
import { Button, Modal } from "react-bootstrap";

const MovieModal = ({ movie, handleClose, show, selectedMovie }) => {
  const modalBg = {
    background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url(https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path})`,
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton style={modalBg}></Modal.Header>
        <Modal.Body>
          <h1 className="modal-title">{selectedMovie.title}</h1>
          <p className="modal-popularity">Popularity: {selectedMovie.popularity}</p>
          <p className="modal-description">{selectedMovie.overview}</p>
          <p className="modal-movieId">Movie id: {selectedMovie.id}</p>
          <div className="modal-body-button">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Watch Now!</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MovieModal;

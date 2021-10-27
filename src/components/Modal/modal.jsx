import React from "react";
import ReactDOM from "react-dom";
import closeicon from "../../images/close-icon.svg";
import moment from "moment";
import "./modal.css";

const Modal = ({ visible, toggle, movieInfo }) => {
  const {
    poster_path,
    vote_average,
    vote_count,
    overview,
    release_date,
    title,
  } = movieInfo;
  return visible
    ? ReactDOM.createPortal(
        <div className="modal">
          <div className="modal" role="dialog" aria-modal="true">
            <div className="modal-header">
              <h3>{title}</h3>
              <img
                className="close-x"
                src={closeicon}
                alt="close-x"
                onClick={toggle}
              />
            </div>
            <div className="modal-content">
              <img
                className="modal-image"
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                alt="movie-poster"
              />
              <div className="movie-info-container">
                <p className="movie-info-header">
                  <strong>Release date: </strong>
                  {moment(release_date).format("LL")}
                </p>
                <p className="movie-info-body">{overview}</p>
                <p className="movie-rating">
                  <strong>{vote_average}</strong>/10 ({vote_count} total votes)
                </p>
              </div>
            </div>
          </div>
          <div className="modal-background"></div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;

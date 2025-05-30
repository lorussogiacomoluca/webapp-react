import React from "react";
import { NavLink } from "react-router-dom";
const FilmCard = ({ film }) => {
  const { id, titolo, regista, anno, trama, immagine } = film;
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card">
          <div className="card-img-top">
            <img src={`/${immagine}`} alt="" className="img-fluid" />
          </div>
          <div className="card-body">
            <h1 className="card-title">{titolo}</h1>
            <div className="row">
              <div className="col-12 d-flex justify-content-between">
                <p className="card-text">{regista}</p>
                <p className="card-text">{anno}</p>
              </div>
            </div>
            <p className="card-text">{trama}</p>
            <NavLink className="btn btn-primary" to={`/movie/${id}`}>
              Vai alla scheda
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmCard;

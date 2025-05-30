import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import filmsArray from "../assets/data/filmsArray";
import { useEffect } from "react";
import RecensioneCard from "../components/RecensioneCard";

const MovieDetail = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState(filmsArray);
  const [selectedMovie, setSelectedMovie] = useState({});
  const navigate = useNavigate();

  const fetchMovie = (id) => movies.find((movie) => movie.id === parseInt(id));

  useEffect(() => {
    setSelectedMovie(fetchMovie(id));
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <img
            src={`/${selectedMovie.immagine}`}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-8">
          <h1> {selectedMovie.titolo}</h1>
          <p>{selectedMovie.trama}</p>
          <p>{selectedMovie.anno}</p>
          <p>{selectedMovie.regista}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {selectedMovie.recensioni?.map((recensione, index) => (
            <RecensioneCard key={index} recensione={recensione} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieDetail;

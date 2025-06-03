import React, { useState } from "react";
import { useParams } from "react-router-dom";

// import filmsArray from "../assets/data/filmsArray";
import { useEffect } from "react";
import RecensioneCard from "../components/RecensioneCard";
import axios from "axios";

const MovieDetail = () => {
  const { id } = useParams();
  const [selectedMovie, setSelectedMovie] = useState({});

  const fetchMovie = () => {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((resp) => setSelectedMovie(resp.data))
      .catch((error) => console.log(error));
  };

  useEffect(fetchMovie, []);

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <img src={`${selectedMovie.image}`} alt="" className="img-fluid" />
        </div>
        <div className="col-12 col-md-6 col-lg-8">
          <h1> {selectedMovie.title}</h1>
          <p>{selectedMovie.abstract}</p>
          <p>{selectedMovie.release_year}</p>
          <p>{selectedMovie.director}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {selectedMovie.reviews?.map((review, index) => (
            <RecensioneCard key={index} review={review} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieDetail;

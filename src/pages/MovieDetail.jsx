import React, { useState } from "react";
import { useParams } from "react-router-dom";

// import filmsArray from "../assets/data/filmsArray";
import { useEffect } from "react";
import RecensioneCard from "../components/RecensioneCard";
import axios from "axios";
import Rating from "../components/Rating";

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
          <h5>Abstract:</h5>
          <p>{selectedMovie.abstract}</p>
          <h5>Release year:</h5>
          <p>{selectedMovie.release_year}</p>
          <h5>Director:</h5>
          <p>{selectedMovie.director}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex align-items-center justify-content-between">
          <h1>Our Community Reviews</h1>
          <Rating key={`rating-${selectedMovie.avg}`} avg={selectedMovie.avg} />
        </div>
        <div className="col"></div>
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

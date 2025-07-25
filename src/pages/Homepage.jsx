import React, { useState, useEffect, useContext } from "react";
import FilmCard from "../components/filmCard";
import axios from "axios";
import GlobalContext from "../context/GlobalContext";

const Homepage = () => {
  const [films, setFilms] = useState([]);
  const { setIsLoading } = useContext(GlobalContext);

  const fecthMovies = () => {
    setIsLoading(true);
    axios
      .get("http://localhost:3000/api/movies/")
      .then((resp) => {
        setFilms(resp.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(fecthMovies, []);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1 className="text-primary">Movie Collection</h1>
          <h2>
            <i>Discover more</i>
          </h2>
        </div>
      </div>
      <div className="row gy-4">
        {films.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </>
  );
};

export default Homepage;

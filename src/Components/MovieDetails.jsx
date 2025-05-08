import React, { useContext } from "react";
import { useParams } from "react-router";
import { MoviesContext } from "../Context/MoviesContextProvider";

const MovieDetails = () => {
  let { id } = useParams();

  const { movies } = useContext(MoviesContext);
  const movie = movies?.results?.find((m) => m.id === parseInt(id));
  if (!movie) return <h2>Loading...</h2>;

  return (
    <>
      <div className="container my-4" style={{ paddingTop: "50px" }}>
        <div className="row">
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="img-fluid"
              alt={movie.title}
            />
          </div>
          <div className="col-md-8">
            <h3 className="text-info">{movie.title}</h3>
            <p className="text-light">{movie.overview}</p>
            <p>
              <small className="text-light">Last updated 3 mins ago</small>
            </p>
            <p className="text-danger">{movie.adult ? "+18" : "All Ages"}</p>
            <div className="d-flex align-items-center">
              <span className="fw-bold me-2 text-light">Rating:</span>
              <span className="text-warning">{movie.vote_average} / 10</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;

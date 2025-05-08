import { Link } from "react-router";
import "../Styles/Movie.css";
import { useContext } from "react";
import { MoviesContext } from "../Context/MoviesContextProvider";
const Movie = ({ id }) => {
const { movies } = useContext(MoviesContext);
  const movie = movies?.results?.find((m) => m.id === id);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <>
      <div className="col-md-4 mb-4 mt-5 ">
        <div className="card Movie-card Movie-card-container  h-100 shadow ">
          <Link to={`/movie/${movie.id}`} className="text-decoration-none">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="movie"
              className="card-img-top"
              style={{ objectFit: "cover", height: "320px" }}
            />
          </Link>

          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-info">{movie.title}</h5>
            <p className="card-text text-light flex-grow-1">
              {movie.overview?.slice(0, 90)}
              <Link
                to={`/movie/${movie.id}`}
                className="text-primary ms-1 see-more"
                style={{ cursor: "pointer" }}
              >
                .. See More
              </Link>
            </p>
            <div className="d-flex align-items-center mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                width="16"
                height="16"
                fill="#FFD700"
                className="me-2"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <span className="text-warning fw-bold me-1">
                {typeof movie.vote_average === "number"
                  ? movie.vote_average.toFixed(1)
                  : "N/A"}
              </span>
              <span className="text-light">/ 10</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;

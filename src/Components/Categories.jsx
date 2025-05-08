import React, { useContext, useRef } from "react";
import { Link } from "react-router";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { MoviesContext } from "../Context/MoviesContextProvider";
import "../Styles/about.css"
const Categories = () => {
  const { movies } = useContext(MoviesContext);
  const scrollRef = useRef(null);
  if (!movies.results) return <h2>Loading...</h2>;

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 300;
  };

  return (
    <>
      <div className="d-flex flex-wrap w-100">
        <div className="row">
          <h2 className="m-4">Your Next Favorite Movie is Here</h2>
        </div>
        <div className="px-4 py-4 w-100 col-12 position-relative">
          {/* Left arrow */}
          <button
            onClick={scrollLeft}
            className="btn  position-absolute top-50 start-0 translate-middle-y shadow rounded-circle d-none d-sm-flex"
            style={{ zIndex: 10 }}
          >
            <FaArrowAltCircleLeft
              className=" text-white"
              style={{ fontSize: "40px" }}
            />
          </button>

          <div
            ref={scrollRef}
            className="d-flex overflow-auto px-4 gap-3"
            style={{
              scrollBehavior: "smooth",
              whiteSpace: "nowrap",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {movies.results.map((movie) => (
              <Link to={`/movie/${movie.id}`} className="text-decoration-none">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="card-img-top category-img-top"
                  style={{
                    objectFit: "cover",
                    height: "400px",
                    width: "260px",
                    borderRadius: "10px",
                  }}
                />
              </Link>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="btn position-absolute top-50 end-0 translate-middle-y shadow rounded-circle d-none d-sm-flex"
            style={{ zIndex: 10 }}
          >
            <FaArrowAltCircleRight
              className=" text-white"
              style={{ fontSize: "40px" }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Categories;

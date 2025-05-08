import React, { useContext } from "react";
import Movie from "../Components/Movie";
import SlideShow from "../Components/slideShow";
import { MoviesContext } from "../Context/MoviesContextProvider";
import Categories from "../Components/Categories";
import { SearchContext } from "../Context/SearchContextProvider";

const HomePage = () => {
  const { movies } = useContext(MoviesContext);
const {searchQuery} = useContext(SearchContext)

  if (!movies?.results) return <h2>Loading...</h2>;

  // Filter movies using search query
  const filteredMovies = movies.results.filter((movie) =>
    movie.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <SlideShow></SlideShow>
      <Categories></Categories>
      <div className="container">
        <div className="row">
          {(searchQuery ? filteredMovies : movies.results).map((movie) => (
            <Movie key={movie.id} id={movie.id} />
          ))}
        </div>
        <div className="row"></div>
      </div>
    </>
  );
};

export default HomePage;

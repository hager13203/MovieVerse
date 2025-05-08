import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MoviesContext = createContext();

const MoviesContextProvider = ({children}) => {
  let [movies, setMovies] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
      )
      .then((res) => {
        console.log("API response:", res.data);

        setMovies(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <MoviesContext.Provider value={{ movies }}>
        {children}
      </MoviesContext.Provider>
    </>
  );
};

export default MoviesContextProvider;

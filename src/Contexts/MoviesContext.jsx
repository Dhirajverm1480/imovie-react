import { createContext, useEffect, useState } from "react";

export const MoviesContext = createContext();

const MoviesContextProvider = (props) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //   let currentPage = 1;
  // let totalPages = 1;

  const fetchMovies = async (page) => {
    setLoading(true);
    setError(null);

    try {
      const endpoint = `/movie/popular?api_key=${API_KEY}&language=en-US`;
      //   const fullURL = `${BASE_URL}${endpoint}&page=${page}`;
      //   console.log("Requesting:", fullURL);
      const response = await fetch(`${BASE_URL}${endpoint}&page=${page}`);
      const data = await response.json();
      // console.log("Data ->: ", data);
      if (data && data.results) {
        setMovies(data.results);
      } else {
        console.warn("Result is not found in Api");
      }
    } catch (errors) {
      console.log("Error: ", errors);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const value = {
    movies,
    loading,
    error,
    currentPage,
    setCurrentPage,
  };

  return (
    <MoviesContext.Provider value={value}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;

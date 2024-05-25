import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "@/my-components/MovieCard";
import { useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const MoviesPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const movie = queryParams.get("movie");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(9);

  useEffect(() => {
    const fetchMovies = async () => {
      const URL = `https://www.omdbapi.com/?apikey=b6003d8a&s=${movie}`;
      const response = await axios.get(URL);
      setMovies(response.data.Search);
    };
    fetchMovies();
  }, [movie]);

  // Pagination Logic
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {currentMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="mx-2 px-4 py-2   rounded"
        >
          <ArrowLeft size={16} />
        </button>
        <span className="mx-2 px-4 py-2  rounded">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="mx-2 px-4 py-2   rounded"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default MoviesPage;

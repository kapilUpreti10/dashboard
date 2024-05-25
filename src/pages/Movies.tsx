import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "@/my-components/MovieCard";
import { useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const MoviesPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let movie = queryParams.get("movie");

  // generate a random movie if no movie is provided
  // Arrays of words for different parts of the movie name
  const prefixes = ["The", "A", "An", "My", "Your"];
  const adjectives = ["Great", "Fantastic", "Amazing", "Wonderful", "Epic"];
  const nouns = ["Adventure", "Journey", "Quest", "Tale", "Saga"];
  const suffixes = ["Part I", "Part II", "Returns", "Revenge", "Awakens"];

  // Function to generate a random movie name
  // function generateRandomMovieName() {
  //   const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  //   const randomAdjective =
  //     adjectives[Math.floor(Math.random() * adjectives.length)];
  //   const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  //   const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  //   return `${randomPrefix} ${randomAdjective} ${randomNoun} ${randomSuffix}`;
  // }

  // const randomMovieName = generateRandomMovieName();
  // console.log(randomMovieName);

  if (!movie) {
    movie = "batman";
  }
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [moviesPerPage] = useState(9);

  useEffect(() => {
    const fetchMovies = async () => {
      const URL = `https://www.omdbapi.com/?apikey=b6003d8a&s=${movie}&page=${currentPage}`;
      const response = await axios.get(URL);
      setTotalPages(Math.ceil(response.data.totalResults / moviesPerPage));
      setMovies(response.data.Search);
    };
    fetchMovies();
  }, [movie, currentPage]);

  // Pagination Logic
  // const indexOfLastMovie = currentPage * moviesPerPage;
  // const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  // const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // const totalPages = Math.ceil(movies.length / moviesPerPage);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.slice(0, movies.length - 1).map((movie, index) => (
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

import React from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { Title, Year, Type, Poster, imdbID } = movie;
  const urlTitle = Title.trim();
  const navigateToDetailPage = useNavigate();
  const viewDetailPage = () => {
    navigateToDetailPage(`/dashboard/movies/detail/${urlTitle}/${imdbID}`, {
      state: { movie },
    });
  };
  return (
    <div className="w-[350px] sm:w-[250px] lg:w-[320px]  mx-auto mb-4 md:mb-5 md:mr-4 bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative">
        <img
          src={Poster}
          alt={Title}
          className="w-full h-80 md:h-60 object-fit"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 flex items-center justify-center transition duration-300">
          <ShoppingCart className="text-white w-12 h-12" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex   text-sm gap-5">
          <p className="">{Year}</p>
          <p className="text-green-500 font-semibold text-md">
            {Type.toUpperCase()}
          </p>
        </div>
        <div className="mt-2">
          <p className="text-lg font-semibold text-gray-900">{Title}</p>
        </div>
        <div
          className="mt-4 hover:bg-black flex items-center justify-center text-white cursor-pointer bg-red-500 p-2 rounded-md"
          onClick={viewDetailPage}
        >
          <p className="text-sm font-medium ">View Details</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

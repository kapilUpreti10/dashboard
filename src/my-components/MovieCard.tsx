import React from "react";
import { Play } from "lucide-react";

const MovieCard = ({ movie }) => {
  const { Title, Year, Type, Poster } = movie;
  return (
    <div className="w-[200px] md:w-[350px] mx-auto mb-4 md:mb-0 md:mr-4 bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative">
        <img
          src={Poster}
          alt={Title}
          className="w-full h-80 md:h-60 object-contain"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 flex items-center justify-center transition duration-300">
          <Play className="text-white w-12 h-12" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between text-gray-500 text-sm">
          <p>{Year}</p>
          <p>{Type}</p>
        </div>
        <div className="mt-2">
          <p className="text-lg font-semibold text-gray-900">{Title}</p>
        </div>
        <div className="mt-4 flex items-center justify-center text-white cursor-pointer bg-red-500 p-2 rounded-md">
          <Play className="mr-2 w-6 h-6" />
          <p className="text-sm font-medium">Buy Now</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

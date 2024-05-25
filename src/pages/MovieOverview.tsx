import React from "react";
import { ShoppingCart } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addToCart } from "@/redux/slice/CartSlice";
import { useDispatch } from "react-redux";

import ErrorPage from "@/utils/ErrorPage";

const MovieOverview = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigateToCart = useNavigate();
  const { movie } = location.state || {};

  if (!movie) {
    return (
      <ErrorPage
        errorTittle="No movie found"
        errorMessage="Sorry, the given action cannot be performed"
      />
    );
  }

  const { Title, Year, Type, Poster, imdbID } = movie;

  const notify = () => toast.success("Added successfully!");

  const viewCartItems = () => {
    navigateToCart("/dashboard/cartItems");
  };

  return (
    <div className="flex flex-col md:flex-row max-w-screen-lg mx-auto my-8 p-4 bg-white rounded-lg shadow-lg">
      <img src={Poster} alt={Title} className="md:w-1/3 rounded-lg" />
      <div className="md:ml-4 md:w-2/3">
        <p className="text-2xl font-semibold">{Title}</p>
        <p className="text-lg">{Type}</p>
        <p className="text-lg">{Year}</p>
        <p className="mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
          suscipit repellat alias laborum mollitia expedita. Suscipit voluptates
          dignissimos, dolorem impedit quidem autem quo ratione eligendi odit
          cupiditate, corrupti hic? Quis adipisci quas inventore perferendis
          debitis numquam ipsa, fugit impedit quisquam velit nihil mollitia!
          Harum perferendis quae sint fuga, voluptatum distinctio.
        </p>
        <div className="flex mt-4">
          <button
            className="flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-md"
            onClick={() => {
              notify();
              dispatch(addToCart({ ...movie, price: 10 }));
              viewCartItems();
            }}
          >
            <ShoppingCart className="w-6 h-6 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieOverview;

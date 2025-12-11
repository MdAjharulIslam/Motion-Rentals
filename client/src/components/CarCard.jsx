import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react"; 

const CarCard = ({ car }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(car._id));
  }, [car._id]);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const newFavorites = isFavorite
      ? favorites.filter((id) => id !== car._id)
      : [...favorites, car._id];

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      onClick={() => {
        navigate(`/car-details/${car._id}`);
        window.scrollTo(0, 0);
      }}
      className="group rounded-xl overflow-hidden hover:translate-y-1 transition-all duration-500 cursor-pointer shadow-2xl shadow-blue-300"
    >
      <div className="relative h-48 overflow-hidden shadow-2xl shadow-blue-100">
        <img
          src={car.image}
          alt="Car Image"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {car.isAvalible && (
          <p className="absolute top-4 left-4 bg-green-500 text-white text-xs px-2.5 py-1 rounded-full font-semibold shadow-md">
            Available Now
          </p>
        )}

        
        <button
          onClick={toggleFavorite}
          className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-md shadow-lg p-1.5 flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite ? "text-red-500 fill-red-500" : "text-gray-400"
            }`}
          />
        </button>
      </div>

      <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg">
        <span className="font-semibold">
          {currency}
          {car.pricePerDay}
        </span>
        <span className="text-sm text-white/80"> / Day</span>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-medium">
              {car.brand} {car.model}
            </h3>
            <p className="text-sm text-muted-foreground">
              {car.category} · {car.year}
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-y-2 text-gray-600">
          <div className="flex items-center text-sm text-muted-foreground">
            <img src={assets.users_icon} alt="seats" className="h-4 mr-2" />
            <span>{car.seating_capacity} Seats</span>
          </div>

          <div className="flex items-center text-sm text-muted-foreground">
            <img src={assets.fuel_icon} alt="fuel type" className="h-4 mr-2" />
            <span>{car.fuel_type}</span>
          </div>

          <div className="flex items-center text-sm text-muted-foreground">
            <img src={assets.car_icon} alt="transmission" className="h-4 mr-2" />
            <span>{car.transmission}</span>
          </div>

          <div className="flex items-center text-sm text-muted-foreground">
            <img
              src={assets.location_icon}
              alt="location"
              className="h-4 mr-2"
            />
            <span>{car.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

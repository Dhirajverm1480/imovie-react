import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ id, image, title }) => {
  return (
    <Link to={`/details/${id}`} className="cursor-pointer">
      <div className="w-[50%] sm:w-48 lg:w-40 rounded-lg border p-1 h-72">
        <img src={image} alt={title} />
        <h3 className="overflow-hidden h-7">{title}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;

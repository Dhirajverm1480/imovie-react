import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ id, image, title }) => {
  return (
    <Link to={`/details/${id}`} className="cursor-pointer">
      <div className="w-full h-full sm:w-48 lg:w-52 rounded-lg border p-1">
        <img src={image} alt={title} />
        <h3 className="overflow-hidden h-7">{title}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;

import { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { MoviesContext } from "../Contexts/MoviesContext";

const Home = () => {
  const { movies } = useContext(MoviesContext);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setMovie(movies);
  }, [movies]);

  console.log("m", movies);
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-wrap gap-y-1">
        {movie.map((item) => (
          <MovieCard
            key={item.id}
            id={item.id}
            image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

import { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { MoviesContext } from "../Contexts/MoviesContext";
import Logo from "../assets/img/Logo.png";

const Home = () => {
  const { movies } = useContext(MoviesContext);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setMovie(movies);
  }, [movies]);

  console.log("m", movies);
  return (
    <div className="page-frame">
      <div className="w-full h-[80vh] flex-center">
        <div className="w-full flex-center flex-col">
          <img src={Logo} alt="" className="w-52 rounded-full" />
          <div className="flex-center my-3">
            <input
              type="text"
              placeholder="Search Movies, Webserise"
              className="px-5 py-1 text-lg bg-transparent border mr-2 outline-none"
            />
            <button className="btn">Search</button>
          </div>
          <div>

          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap gap-2">
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
      
    </div>
  );
};

export default Home;

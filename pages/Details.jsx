import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../Contexts/MoviesContext";
import { useParams } from "react-router-dom";
import Title from "../components/Title";

const Details = () => {
  const { itemId } = useParams();
  const { movies } = useContext(MoviesContext);
  const [itemsDetail, setItemsDetail] = useState([]);

  const fetchItemDetailById = async () => {
    const foundItem = movies.find((item) => item.id.toString() === itemId);
    if (foundItem) {
      setItemsDetail(foundItem);
    } else {
      console.log("not found");
    }
  };

  useEffect(() => {
    fetchItemDetailById();
  }, [movies]);
  return (
    <div className="page-frame">
      {itemsDetail ? (
        <>
          <div className="md:flex justify-between">
            <div className="w-full md:w-[25%] h-full sm:h-96 rounded-md overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w500${itemsDetail.poster_path}`}
                alt={itemsDetail.title}
                className="w-full h-full"
              />
            </div>
            <div className="md:w-[70%]">
              {/* <h1 className="text-3xl font-bold">{itemsDetail.title}</h1> */}
              <Title title={itemsDetail.title} />
              <p>{itemsDetail.overview}</p>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Details;

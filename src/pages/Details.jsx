import { useContext, useEffect, useState } from "react"
import { MoviesContext } from "../Contexts/MoviesContext"
import { useParams } from "react-router-dom";
import BackDrops from "../components/BackDrops";
import DetailsBanner from "../components/DetailsBanner";


const Details = () => {
    const { itemId } = useParams()
    const { movies } = useContext(MoviesContext);
    const [itemsDetail, setItemsDetail] = useState([])

    const fetchItemDetailById = async () => {
        const foundItem = movies.find((item) => item.id.toString() === itemId);
        if(foundItem){
            setItemsDetail(foundItem)
            console.log("Item: ", foundItem)
        }
        else{
            console.log("not found")
        }
    }

    useEffect(() => {
        fetchItemDetailById()
    }, [movies])
  return (
    <div>
      {
        itemsDetail? (
            <>
            <div>
                <BackDrops backDrop={`https://image.tmdb.org/t/p/w500${itemsDetail.backdrop_path}`}/>
            </div>
            <div>
                <DetailsBanner image={`https://image.tmdb.org/t/p/w500${itemsDetail.poster_path}`} title={itemsDetail.title} rating={itemsDetail.vote_average} count={itemsDetail.count} overview={itemsDetail.overview} relase_date={itemsDetail.relase_date} />
            </div>
            </>
        ): (
            <p>Loading...</p>
        )
      }
    </div>
  )
}

export default Details

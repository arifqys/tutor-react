import { useEffect, useState } from "react";
import { useParams } from "react-router";
import './ShowDetail.css';

function ShowDetail() {
  const { id: showId } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then(data => data.json())
      .then(data => setData(data))
  }, [showId])


  return (
    <>
      <h1>{data?.name}</h1>
      <img src={data?.image?.medium} alt={data?.name} />
      <table className="table">
        <tr>
          <td>Languange:</td>
          <td>{data?.language}</td>
        </tr>
        <tr>
          <td>Genres:</td>
          <td>{data?.genres.map(genre => genre)}</td>
        </tr>
      </table>
    </>
  )
}

export default ShowDetail;
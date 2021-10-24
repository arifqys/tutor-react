import { useEffect, useState } from "react";
import ShowCard from "./ShowCard";

const apiEndpoint = "https://api.tvmaze.com/shows";

function ShowsCatalogue() {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(apiEndpoint)
      .then(data => data.json())
      .then(data => {
        setShows(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <div>
      <h1>TV Shows</h1>

      {isLoading ? 'Loading...' : shows.map(data => <ShowCard key={data.id} data={data} />)}
    </div>
  )
}

export default ShowsCatalogue;
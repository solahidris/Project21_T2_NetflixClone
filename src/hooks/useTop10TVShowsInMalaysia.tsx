// useTop10TVShowsInMalaysia.tsx

import { useState, useEffect } from "react";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
  poster_path: string | undefined;
  vote_average: number;
}

const useTop10TVShowsInMalaysia = () => {
  const [top10TVShows, setTop10TVShows] = useState<Movie[]>([]);
  const apikey = process.env.REACT_APP_TMDB_API_KEY;

  const fetchTop10TVShowsInMalaysia = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${apikey}`
      );
      const top10TVShows = response.data.results
        .slice(0, 2)
        .map((show: any) => ({
          id: show.id,
          title: show.name,
          poster_path: `https://image.tmdb.org/t/p/w500${show.poster_path}`,
          vote_average: show.vote_average,
        }));
      setTop10TVShows(top10TVShows);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTop10TVShowsInMalaysia();
    // eslint-disable-next-line
  }, []);

  return { top10TVShows };
};

export default useTop10TVShowsInMalaysia;

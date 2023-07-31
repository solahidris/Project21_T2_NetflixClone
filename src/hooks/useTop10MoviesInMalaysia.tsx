// useTop10MoviesInMalaysia.tsx

import { useState, useEffect } from "react";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
  poster_path: string | undefined;
  vote_average: number;
}

const useTop10MoviesInMalaysia = () => {
  const [top10Movies, setTop10Movies] = useState<Movie[]>([]);
  const apikey = process.env.REACT_APP_TMDB_API_KEY;

  const fetchTop10MoviesInMalaysia = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}`
      );
      const top10Movies = response.data.results
        .slice(0, 2)
        .map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          vote_average: movie.vote_average,
        }));
      setTop10Movies(top10Movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTop10MoviesInMalaysia();
    // eslint-disable-next-line
  }, []);

  return { top10Movies };
};

export default useTop10MoviesInMalaysia;

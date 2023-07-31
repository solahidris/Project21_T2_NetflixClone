// useTrendingNow.tsx

import { useState, useEffect } from "react";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
  poster_path: string | undefined;
  vote_average: number;
}

const useTrendingNow = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const apikey = process.env.REACT_APP_TMDB_API_KEY;

  const fetchTrendingNow = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${apikey}`
      );
      const trendingMovies = response.data.results
        .slice(0, 2)
        .map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          vote_average: movie.vote_average,
        }));
      setTrendingMovies(trendingMovies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrendingNow();
    // eslint-disable-next-line
  }, []);

  return { trendingMovies };
};

export default useTrendingNow;

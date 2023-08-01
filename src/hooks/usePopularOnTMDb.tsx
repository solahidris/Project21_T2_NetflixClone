// usePopularOnTMDb.tsx

import { useState, useEffect } from "react";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
  poster_path: string | undefined;
  vote_average: number;
}

const usePopularOnTMDb = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const apikey = process.env.REACT_APP_TMDB_API_KEY;

  const fetchPopularOnTMDb = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`
      );
      const popularMovies = response.data.results
        .slice(0, 10)
        .map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          vote_average: movie.vote_average,
        }));
      setPopularMovies(popularMovies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPopularOnTMDb();
    // eslint-disable-next-line
  }, []);

  return { popularMovies };
};

export default usePopularOnTMDb;
// useAnime.tsx

import { useState, useEffect } from "react";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
  poster_path: string | undefined;
  vote_average: number;
}

const useAnime = () => {
    const [anime, setAnime] = useState<Movie[]>([]);
    const apikey = process.env.REACT_APP_TMDB_API_KEY;
  
    const fetchAnime = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=16`
        );
        const anime = response.data.results.slice(0, 10).map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          vote_average: movie.vote_average,
        }));
        setAnime(anime);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchAnime();
      // eslint-disable-next-line
    }, []);
  
    return { anime };
  };
  
  export default useAnime;
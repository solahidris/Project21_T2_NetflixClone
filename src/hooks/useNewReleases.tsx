// useNewReleases.tsx

import { useState, useEffect } from "react";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
  poster_path: string | undefined;
  vote_average: number;
}

const useNewReleases = () => {
    const [newReleases, setNewReleases] = useState<Movie[]>([]);
    const apikey = process.env.REACT_APP_TMDB_API_KEY;
  
    const fetchNewReleases = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`
        );
        const newReleases = response.data.results.slice(0, 2).map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, // Construct the complete image URL
          vote_average: movie.vote_average,
        }));
        setNewReleases(newReleases);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchNewReleases();
      // eslint-disable-next-line
    }, []);
  
    return { newReleases };
  };
  

export default useNewReleases;
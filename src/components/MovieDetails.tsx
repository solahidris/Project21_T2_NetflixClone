// MovieDetails.tsx

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

interface MovieDetailsProps {
  id: number;
  title: string;
  poster_path: string | undefined;
  vote_average: number;
  overview: string;
  release_date: string;
}

const MovieDetails: React.FC = () => {
  const [movieDetails, setMovieDetails] = useState<MovieDetailsProps | null>(
    null
  );
  const { id: movieId } = useParams<{ id: string }>(); // to select correct movie

  const fetchMovieDetails = async () => {
    try {
      const apikey = process.env.REACT_APP_TMDB_API_KEY;
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}`
      );
      setMovieDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
    // eslint-disable-next-line
  }, [movieId]);

  return (
    <div className="bg-black min-h-[100vh] text-white">
      <Header />
      <div className="px-5 pt-16 flex flex-col lg:pt-40">
        {movieDetails ? (
          <>
            <div className="flex justify-center">
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt={movieDetails.title}
                className="w-60 lg:w-96 rounded object-cover rounded-xl mb-5"
              />
            </div>
            <div className="flex flex-col px-5 lg:px-60 pb-60 gap-4 items-center">
              <div className="flex">
                <h1 className="font-semibold text-3xl text-black bg-white px-5 py-2 rounded text-center lg:w-[600px]">
                  {movieDetails.title}
                </h1>
              </div>
              <p className="text-sm">Rating: {movieDetails.vote_average}</p>
              <div className="bg-white/10 p-4 text-sm rounded-xl lg:w-[600px]">
                <p className="indent-8 leading-6">{movieDetails.overview}</p>
              </div>
              <p className="text-xs">
                Release Date: {movieDetails.release_date}
              </p>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;

// Cards.tsx

import useNewReleases from "../hooks/useNewReleases";
import usePopularOnTMDb from "../hooks/usePopularOnTMDb";
import useTop10MoviesInMalaysia from "../hooks/useTop10MoviesInMalaysia";
import useTop10TVShowsInMalaysia from "../hooks/useTop10TVShowsInMalaysia";
import useAnime from "../hooks/useAnime";

import { Link } from "react-router-dom";

type CardsProps = {};

const Cards: React.FC<CardsProps> = () => {
  const { newReleases } = useNewReleases();
  const { popularMovies } = usePopularOnTMDb();
  const { top10Movies } = useTop10MoviesInMalaysia();
  const { top10TVShows } = useTop10TVShowsInMalaysia();
  const { anime } = useAnime();

  return (
    // This code here. i want it just slightly covering 
    <div className="mt-[-40px] lg:mt-[-160px] relative z-50">
      <div className="text-white p-6 lg:text-3xl lg:pb-6">
        <p className="font-bold pb-2">New Releases</p>
        <div className="flex gap-2 overflow-x-auto">
          {/* Display New Releases */}
          {newReleases.map((movie) => (
            <Link to={`movie/${movie.id}`} key={movie.id}>
              <div className="w-[100px] h-[150px] lg:w-[300px] lg:h-[450px] rounded overflow-hidden">
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </Link>
          ))}
        </div>

        <p className="font-bold pb-2 pt-8 lg:pt-24 lg:text-3xl lg:pb-6">Popular on TMDb</p>
        <div className="flex gap-2 overflow-x-auto">
          {/* Display Popular on TMDb */}
          {popularMovies.map((movie) => (
            <Link to={`movie/${movie.id}`} key={movie.id}>
              <div className="w-[100px] h-[150px] lg:w-[300px] lg:h-[450px] rounded overflow-hidden">
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </Link>
          ))}
        </div>

        <p className="font-bold pb-2 pt-8 lg:pt-24 lg:text-3xl lg:pb-6">Top 10 Movies in Malaysia Today</p>
        <div className="flex gap-2 overflow-x-auto">
          {/* Display Top 10 Movies */}
          {top10Movies.map((movie) => (
            <Link to={`movie/${movie.id}`} key={movie.id}>
              <div className="w-[100px] h-[150px] lg:w-[300px] lg:h-[450px] rounded overflow-hidden">
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </Link>
          ))}
        </div>

        <p className="font-bold pb-2 pt-8 lg:pt-24 lg:text-3xl lg:pb-6">Top 10 TV Shows in Malaysia Today</p>
        <div className="flex gap-2 overflow-x-auto">
          {/* Display Top 10 TV Shows */}
          {top10TVShows.map((movie) => (
            <Link to={`movie/${movie.id}`} key={movie.id}>
              <div className="w-[100px] h-[150px] lg:w-[300px] lg:h-[450px] rounded overflow-hidden">
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </Link>
          ))}
        </div>

        <p className="font-bold pb-2 pt-8 lg:pt-24 lg:text-3xl lg:pb-6">Anime</p>
        <div className="flex gap-2 overflow-x-auto">
          {/* Display Anime */}
          {anime.map((movie) => (
            <Link to={`movie/${movie.id}`} key={movie.id}>
              <div className="w-[100px] h-[150px] lg:w-[300px] lg:h-[450px] rounded overflow-hidden">
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;

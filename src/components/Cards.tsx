// Cards.tsx

import useNewReleases from "../hooks/useNewReleases";
import usePopularOnTMDb from "../hooks/usePopularOnTMDb";
import useTop10MoviesInMalaysia from "../hooks/useTop10MoviesInMalaysia";
import useTop10TVShowsInMalaysia from "../hooks/useTop10TVShowsInMalaysia";
import useAnime from "../hooks/useAnime";

type CardsProps = {};

const Cards: React.FC<CardsProps> = () => {
  const { newReleases } = useNewReleases();
  const { popularMovies } = usePopularOnTMDb();
  const { top10Movies } = useTop10MoviesInMalaysia();
  const { top10TVShows } = useTop10TVShowsInMalaysia();
  const { anime } = useAnime();

  return (
    <div>
      <div className="text-white p-6">

        <p className="font-bold pb-2">New Releases</p>
        <div className="flex gap-2 overflow-x-auto">
            {/* Display New Releases */}
              {newReleases.map((movie) => (
                <img
                  key={movie.id}
                  src={movie.poster_path}
                  alt={movie.title}
                  className="w-24 lg:w-52 rounded object-cover"
                />
              ))}
        </div>

        <p className="font-bold pb-2 pt-8">Popular on TMDb</p>
        <div className="flex gap-2 overflow-x-auto">
            {/* Display New Releases */}
              {popularMovies.map((movie) => (
                <img
                  key={movie.id}
                  src={movie.poster_path}
                  alt={movie.title}
                  className="w-24 lg:w-52 rounded object-cover"
                />
              ))}
        </div>

        <p className="font-bold pb-2 pt-8">Top 10 Movies in Malaysia Today</p>
        <div className="flex gap-2 overflow-x-auto">
            {/* Display New Releases */}
              {top10Movies.map((movie) => (
                <img
                  key={movie.id}
                  src={movie.poster_path}
                  alt={movie.title}
                  className="w-24 lg:w-52 rounded object-cover"
                />
              ))}
        </div>

        <p className="font-bold pb-2 pt-8">Top 10 TV Shows in Malaysia Today</p>
        <div className="flex gap-2 overflow-x-auto">
            {/* Display New Releases */}
              {top10TVShows.map((movie) => (
                <img
                  key={movie.id}
                  src={movie.poster_path}
                  alt={movie.title}
                  className="w-24 lg:w-52 rounded object-cover"
                />
              ))}
        </div>

        <p className="font-bold pb-2 pt-8">Anime</p>
        <div className="flex gap-2 overflow-x-auto">
            {/* Display New Releases */}
              {anime.map((movie) => (
                <img
                  key={movie.id}
                  src={movie.poster_path}
                  alt={movie.title}
                  className="w-24 lg:w-52 rounded object-cover"
                />
              ))}
        </div>

      </div>
    </div>
  );
};

export default Cards;
// MovieCategory.tsx

import Header from "./Header";
import useNewReleases from "../hooks/useNewReleases";
import usePopularOnTMDb from "../hooks/usePopularOnTMDb";
import useTop10MoviesInMalaysia from "../hooks/useTop10MoviesInMalaysia";
import useTop10TVShowsInMalaysia from "../hooks/useTop10TVShowsInMalaysia";
import useAnime from "../hooks/useAnime";

import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

type MovieCategoryProps = {};

interface Movie {
  id: number;
  title: string;
  poster_path: string | undefined;
}

const MovieCategory: React.FC<MovieCategoryProps> = () => {
  const { category } = useParams<{ category: string }>();

  // Hooks for fetching data
  const { newReleases } = useNewReleases();
  const { popularMovies } = usePopularOnTMDb();
  const { top10Movies } = useTop10MoviesInMalaysia();
  const { top10TVShows } = useTop10TVShowsInMalaysia();
  const { anime } = useAnime();

  // Render by Category Selected
  const CategorySection: React.FC<{ title: string; movies: Movie[] }> = ({
    title,
    movies,
  }) => (
    <div className="flex flex-col">
      <p className="font-bold lg:text-3xl pb-2 lg:pt-8">{title}</p>
      <div className="flex gap-2 flex-wrap justify-center pt-2 lg:pt-8">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <img
              src={movie.poster_path}
              alt={movie.title}
              className="w-40 lg:w-[384px] rounded object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-black min-h-[100vh] text-white pt-0 lg:pt-10">
      <Header />
      <div className="px-5 pt-16 flex flex-col lg:pb-[160px]">
        {category === "newReleases" && (
          <CategorySection title="New Releases" movies={newReleases} />
        )}
        {category === "popularMovies" && (
          <CategorySection title="Popular on TMDb" movies={popularMovies} />
        )}
        {category === "top10Movies" && (
          <CategorySection
            title="Top 10 Movies in Malaysia"
            movies={top10Movies}
          />
        )}
        {category === "top10TVShows" && (
          <CategorySection
            title="Top 10 TV Shows in Malaysia"
            movies={top10TVShows}
          />
        )}
        {category === "anime" && (
          <CategorySection title="Anime" movies={anime} />
        )}
      </div>
    </div>
  );
};

export default MovieCategory;

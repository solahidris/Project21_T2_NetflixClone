// MovieCategory.tsx

import useNewReleases from "../hooks/useNewReleases";

import { Link } from "react-router-dom";

type CardsProps = {};

const Cards: React.FC<CardsProps> = () => {
  const { newReleases } = useNewReleases();

  return (
    <div>
      <div className="text-white p-6">

        <p className="font-bold pb-2">New Releases</p>
        <div className="flex gap-2 overflow-x-auto">
            {/* Display New Releases */}
              {newReleases.map((movie) => (
                <Link to={`movie/${movie.id}`} key={movie.id}>
                <img
                  key={movie.id}
                  src={movie.poster_path}
                  alt={movie.title}
                  className="w-24 lg:w-52 rounded object-cover"
                />
                </Link>
              ))}
        </div>

      </div>
    </div>
  );
};

export default Cards;

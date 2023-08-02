// Header.tsx

import NetflixLogo2 from "../assets/netflixlogo2.png";
// import { BiSearch } from "react-icons/bi";
// import { FaRegBell } from "react-icons/fa";
// import { BsPersonSquare } from "react-icons/bs";
// import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
        // Gradient Black Top Div
    <div className="bg-gradient-to-b from-black to-transparent w-full absolute top-0 z-50">
        {/* Actual Header Div Container */}
      <div className="flex px-3 justify-between text-white">
            
            {/* Left Side Container */}
        <div className="flex items-center text-[7px] lg:text-lg gap-2 lg:gap-8">
          <Link to="/" ><img src={NetflixLogo2} alt="netflixlog" className="w-24 lg:w-48" /></Link>
          <Link to="/" ><button className="font-bold hover:text-stone-300">Home</button></Link>
          <Link to="/category/newReleases"><button className="hover:text-stone-300">New</button></Link>
          <Link to="/category/popularMovies"><button className="hover:text-stone-300">Popular</button></Link>
          <Link to="/category/top10Movies"><button className="hover:text-stone-300">Top 10 Movies</button></Link>
          <Link to="/category/top10TVShows"><button className="hover:text-stone-300">Top 10 TV Shows</button></Link>
          <Link to="/category/anime"><button className="hover:text-stone-300">Anime</button></Link>
        </div>

            {/* Right Side Container */}
        {/* <div className="flex text-[7px] lg:text-lg gap-0 lg:gap-4 items-center">
          <span className="mr-2 text-[10px] lg:text-2xl "><BiSearch /></span>
          <span className="mr-2"><FaRegBell /></span>
          <span className="mr-1"><BsPersonSquare /></span>
          <span><AiFillCaretDown /></span>
        </div> */}

      </div>
    </div>
  );
};

export default Header;
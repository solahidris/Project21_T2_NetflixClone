// Header.tsx

import NetflixLogo from "../assets/netflixlogo.png";
import { BiSearch } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
        // Gradient Black Top Div
    <div className="bg-gradient-to-b from-black to-transparent w-full absolute top-0 z-10">
        {/* Actual Header Div Container */}
      <div className="flex px-3 justify-between text-white">
            {/* Left Side Container */}
        <div className="flex items-center bg-red-3000 text-[7px] gap-2">
          <img src={NetflixLogo} alt="netflixlog" className="w-24 " />
          <button className="font-bold">Home</button>
          <button>TV Shows</button>
          <button>Movies</button>
          <button>New & Popular</button>
          <button>My List</button>
        </div>
            {/* Right Side Container */}
        <div className="flex text-[7px] items-center">
          <button className="mr-2 text-[10px] "><BiSearch /></button>
          <button className="mr-2">Kids</button>
          <button className="mr-2"><FaRegBell /></button>
          <button className="mr-1"><BsPersonSquare /></button>
          <button><AiFillCaretDown /></button>
        </div>
      </div>
    </div>
  );
};

export default Header;

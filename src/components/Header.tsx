// Header.tsx

import NetflixLogo from "../assets/netflixlogo.png";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
        // Gradient Black Top Div
    <div className="bg-gradient-to-b from-black to-transparent w-full absolute top-0 z-10">
        {/* Actual Header Div Container */}
      <div className="flex px-3 justify-between text-white">
            {/* Left Side Container */}
        <div className="flex items-center bg-red-3000 text-[7px]">
          <img src={NetflixLogo} alt="netflixlog" className="w-24 " />
          <button>Home</button>
          <button>TV Shows</button>
          <button>Movies</button>
          <button>New & Popular</button>
          <button>My List</button>
          <button>Browse by Languages</button>
        </div>
            {/* Right Side Container */}
        <div className="flex bg-red-2000 text-[7px] items-center">
          <button>🔍</button>
          <button>Kids</button>
          <button>🔔</button>
          <button>👤</button>
          <button>▼</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

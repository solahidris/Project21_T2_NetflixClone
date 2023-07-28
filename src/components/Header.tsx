// Header.tsx

import NetflixLogo from "../assets/netflixlogo.png";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="flex bg-red-5000 p-3 justify-between text-white">
      <div className="flex items-center bg-red-3000 text-[7px]">
        <img src={NetflixLogo} alt="netflixlog" className="w-24 " />
        <button>Home</button>
        <button>TV Shows</button>
        <button>Movies</button>
        <button>New & Popular</button>
        <button>My List</button>
        <button>Browse by Languages</button>
      </div>
      <div className="flex bg-red-2000 text-[7px] items-center">
        <button>🔍</button>
        <button>Kids</button>
        <button>🔔</button>
        <button>👤</button>
        <button>▼</button>
      </div>
    </div>
  );
};

export default Header;

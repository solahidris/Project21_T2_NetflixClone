// HeaderCoverart.tsx

import LuffyGear5 from "../assets/luffyg5-min.png";
type HeaderCoverartProps = {};

const HeaderCoverart: React.FC<HeaderCoverartProps> = () => {
  return (
    <div>
      {/* Title */}
      <span className="text-3xl font-bold text-border-shadow tracking-wide text-white absolute z-10 top-20 left-5">
        One Piece
      </span>
      {/* Description */}
      <span className="text-xs text-white text-border-shadow absolute z-10 top-[120px] left-6 w-48">
        The most anticipated episode featuring Luffy's Gear 5 evolution fighting
        against Kaido
      </span>
      {/* Play & Info Button */}
      <div className="flex gap-2 z-10 top-[184px] left-6 absolute font-semibold">
        <button className="bg-stone-100 hover:bg-stone-300 rounded px-4 py-1 rounded ">► Play</button>
        <button className="bg-stone-300/10 hover:bg-stone-500/10 rounded px-4 py-1 text-white">ⓘ More Info</button>
      </div>
      {/* Cover Art Image */}
      <img src={LuffyGear5} alt="gear5" className="w-full relative" />
      {/* Black Gradient Bottom */}
      <div className="bg-gradient-to-t from-black to-transparent z-10 h-10 mt-[-40px] z-20 relative"></div>
    </div>
  );
};

export default HeaderCoverart;

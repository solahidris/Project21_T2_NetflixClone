// HeaderCoverart.tsx

import LuffyGear5 from "../assets/luffyg5-min.png";
type HeaderCoverartProps = {};

const HeaderCoverart: React.FC<HeaderCoverartProps> = () => {
  return (
    <div className="relative z-40">
      {/* Title */}
      <span className="text-3xl lg:text-[6rem] font-bold text-border-shadow tracking-wide text-white absolute z-10 top-[60px] lg:top-60 left-5">
        One Piece
      </span>
      {/* Description */}
      <span className="text-xs lg:text-3xl text-white text-border-shadow absolute z-10 top-[100px] lg:top-[330px] left-6 w-48 lg:w-[576px]">
        The most anticipated episode featuring Luffy's Gear 5 evolution fighting
        against Kaido
      </span>
      {/* Play & Info Button */}
      <div className="flex gap-2 z-10 top-[160px] lg:top-[480px] left-6 absolute font-semibold">
        <a href="https://aniwatch.to/watch/one-piece-100?ep=104284"><button className="bg-stone-100 hover:bg-stone-300 rounded px-4 py-1 lg:px-8 lg:py-3 lg:text-2xl rounded" >► Play</button></a>
        <a href="https://aniwatch.to/watch/one-piece-100?ep=104284"><button className="bg-stone-300/10 hover:bg-stone-500/10 rounded px-4 py-1 lg:px-8 lg:py-3 lg:text-2xl text-white">ⓘ More Info</button></a>
      </div>
      {/* Cover Art Image */}
      <img src={LuffyGear5} alt="gear5" className="w-full relative" />
      {/* Black Gradient Bottom */}
      <div className="bg-gradient-to-t from-black to-transparent z-10 h-10 mt-[-40px] z-20 relative"></div>
    </div>
  );
};

export default HeaderCoverart;

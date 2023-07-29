// HeaderCoverart.tsx

import LuffyGear5 from "../assets/luffyg5-min.png"
type HeaderCoverartProps = {};

const HeaderCoverart: React.FC<HeaderCoverartProps> = () => {
  return (
    <div>
        {/* Cover Art Image */}
      <img src={LuffyGear5} alt="gear5" className="w-full relative" />
        {/* Black Gradient Bottom */}
      <div className="bg-gradient-to-t from-black to-transparent z-10 h-10 mt-[-40px] z-20 relative"></div>
    </div>
  );
};

export default HeaderCoverart;

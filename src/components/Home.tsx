import Header from "./Header";
import Notes from "./Notes";
import LuffyGear5 from "../assets/luffygear5.png";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="bg-stone-100 min-h-[100vh] relative">
      {/* Header with Gradient Background */}
      <div
        className="bg-gradient-to-b from-black to-transparent h-24 w-full absolute top-0 z-10"
      >
        <Header />
      </div>

      {/* Image */}
      <img
        src={LuffyGear5}
        alt="gear5"
        className="w-full z-1"
        style={{
          position: "relative",
        }}
      />

      {/* Content */}
      <div className="relative z-20">
        <p>GEAR 5!</p>
        <Notes />
      </div>
    </div>
  );
};

export default Home;

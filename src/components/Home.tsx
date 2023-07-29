import Header from "./Header";
import Notes from "./Notes";
import HeaderCoverart from "./HeaderCoverart";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="bg-stone-100 min-h-[100vh] relative">
        <Header />
        <HeaderCoverart />
      
      {/* Content */}
      <div className="absolute z-20">
        <p>GEAR 5!</p>
        <Notes />
      </div>
    </div>
  );
};

export default Home;

import Header from "./Header";
import Notes from "./Notes";
import HeaderCoverart from "./HeaderCoverart";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="bg-black min-h-[100vh]">
        <Header />
        <HeaderCoverart />
      
      {/* Content */}
      <div className="text-white">
        <p>New Releases</p>
        <p>Continue Watching for User123</p>
        <p>Popular on Netflix</p>
        <p>Trending Now</p>
        <p>Top 10 Movies in Malaysia Today</p>
        <p>Top 10 TV Shows in Malaysia Today</p>
        <p>Anime</p>
      </div>
        <Notes />
    </div>
  );
};

export default Home;

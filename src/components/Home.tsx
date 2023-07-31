// Home.tsx

import React from "react";

import Header from "./Header";
import Notes from "./Notes";
import HeaderCoverart from "./HeaderCoverart";
import Cards from "./Cards";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {

  return (
    <div className="bg-black min-h-[100vh]">
      <Header />
      <HeaderCoverart />
      <Cards />
      <Notes />
    </div>
  );
};

export default Home;

import React from "react";

import Header from "../parts/Header";
import Slider from "../parts/Slider";
import TrendingPosts from "../parts/TrendingPosts";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <TrendingPosts />
      {/* <FreshStories />
      <Footer /> */}
    </>
  );
};

export default Home;

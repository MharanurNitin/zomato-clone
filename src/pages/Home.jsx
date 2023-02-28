import React, { useState } from "react";
import "./home.css";

import Banner from "../components/Home/BannerSection/Banner.jsx";
import FilterCards from "../components/Home/FilterCard/FilterCards";
import Collections from "../components/Home/collections/Collections";
import Locality from "../components/Home/locality/Locality";
import GetApp from "../components/Home/getapp/GetApp";
import ExploreNear from "../components/Home/ExploreNear-section/ExploreNear";
import { useRecoilValue } from "recoil";
import { loginUserAtom } from "../global-state";

function Home() {
  let info = useRecoilValue(loginUserAtom);
  return (
    <div className="homepage_container">
      {console.log(info)}
      <Banner />
      <FilterCards />
      <Collections />
      <Locality />
      <GetApp />
      <ExploreNear />
    </div>
  );
}

export default Home;

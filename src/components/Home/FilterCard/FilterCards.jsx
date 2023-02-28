import React from "react";
import { Link } from "react-router-dom";
import FilterCard from "./FilterCard";
import { useRecoilValue } from "recoil";
import { cityAtom } from "../../../global-state";
import { data } from "./filtercardData.jsx";
function FilterCards() {
  let style = {
    width: "86%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };

  const city = useRecoilValue(cityAtom);
  return (
    <div className="filter-card-container" style={style}>
      {data.map((el) => (
        <FilterCard data={el} />
      ))}
    </div>
  );
}

export default FilterCards;

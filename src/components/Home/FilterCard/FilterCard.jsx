import React from "react";
import { useNavigate } from "react-router-dom";
import { cityAtom } from "../../../global-state.js";
import { useRecoilValue } from "recoil";
import "./filtercard.css";
function FilterCard({ data }) {
  const { title, subtitle, img, navigator } = data;
  const navigate = useNavigate();
  const city = useRecoilValue(cityAtom);
  return (
    <div
      className="homeFilterCard"
      onClick={() => navigate(`/${city}/${navigator}`)}
    >
      <img src={img} />
      <div className="discription">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
}

export default FilterCard;

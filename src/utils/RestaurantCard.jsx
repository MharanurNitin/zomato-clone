import React, { useState } from "react";
import "./RestaurantCard.css";
import { BiRupee } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { cityAtom } from "../global-state";
import { useRecoilValue } from "recoil";

function RestaurantCard({ details }) {
  const navigate = useNavigate();
  const city = useRecoilValue(cityAtom);
  let { food } = details;
  food = food.join();
  if (food.length > 25) {
    let result = food.slice(0, 25);
    food = result + "...";
  }

  return (
    <div
      className="CardContainer relative gap-3"
      onClick={() =>
        navigate(`/${city}/${details["name"].split(" ").join("-")}/order`, {
          state: details,
        })
      }
    >
      <div className="imgAndText relative">
        <div className="image-container">
          <img src={details["images"][0]} alt="" className="block img" />
          <div className="DiscountAndTimeToDeliver absolute flex gap-2 align-center">
            <h4 className="discount align-center">50% OFF up to 100</h4>
            <h4 className="timeToDeliver">30min</h4>
          </div>
        </div>
      </div>
      <div className="hotel-description ">
        <div className="NameandRating flex align-center">
          <h3 className="resto-Name">{details?.name}</h3>
          <p className="rating">
            {details?.rating}
            <AiFillStar style={{ color: "white" }} />
          </p>
        </div>
        <div className="foodsandPrice m-block space-between align-center flex   mi-1">
          <h4>{food}</h4>

          <h5 className="align-center">
            <BiRupee />
            {Math.floor(80 + Math.random() * 200)}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;

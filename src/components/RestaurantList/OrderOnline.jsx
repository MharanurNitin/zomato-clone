import React, { useEffect, useState } from "react";
import FilterComponent from "../../utils/FilterComponent";
import "./orderOnline.css";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import AllRestaurantInCity from "./AllRestaurantInCity";
import { useParams } from "react-router-dom";
function OrderOnline() {
  const { city } = useParams();
  console.log("this is city", city);
  const [cityId, setCityId] = useState("");
  function findCityId(city) {
    fetch(`http://localhost:3000/city/${city}/getCityId`)
      .then((response) => response.json())
      .then((data) => setCityId(data));
  }
  useEffect(() => {
    findCityId(city);
  }, [city]);
  return (
    <>
      {console.log("This is city id of " + city + ": " + cityId)}
      <div className="width-100">
        <div
          className="width-85"
          style={{
            display: "flex",
            gap: "1.5rem",
            padding: "2rem",
          }}
        >
          <FilterComponent>
            <HiOutlineAdjustmentsHorizontal />
            <p>filter</p>
          </FilterComponent>
          <FilterComponent>
            <p>Pure Veg</p>
          </FilterComponent>
          <FilterComponent>
            <p>Rating: 4.0+</p>
          </FilterComponent>
        </div>
      </div>
      <AllRestaurantInCity cityId={cityId} />
    </>
  );
}

export default OrderOnline;

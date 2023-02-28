import React, { useEffect, useState } from "react";
import { hotels } from "../../allHotelData.js";
import RestaurantCard from "../../utils/RestaurantCard.jsx";
import { cityAtom } from "../../global-state.js";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import "./AllResturantInCity.css";
function AllRestaurantInCity({ cityId, place }) {
  // const city = useRecoilValue(cityAtom);
  const { city } = useParams();

  const [AllRestaurantInCity, SetAllRestaurantInCity] = useState([]);
  function findAllRestaurantsInCity(cityId) {
    fetch(`http://localhost:3000/Restaurant/getRestaurants/${cityId}`)
      .then((response) => response.json())
      .then((data) => SetAllRestaurantInCity(data));
  }

  useEffect(() => {
    findAllRestaurantsInCity(cityId);
  }, [cityId]);
  return (
    <>
      {/* {console.log(AllRestaurantInCity)} */}
      <div className="width-100 mb-1">
        <div className="component title width-85">
          <h1>Best Food in {city}</h1>
        </div>
      </div>
      <div className="width-100">
        <div className="width-85 flex gap-2 restaurant-card-container-oo">
          {AllRestaurantInCity?.map((el) => {
            return <RestaurantCard details={el} />;
          })}
        </div>
      </div>
    </>
  );
}

export default AllRestaurantInCity;
